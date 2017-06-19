import * as express from 'express';
import * as bodyParser from 'body-parser';
import { IRest, IRestData } from './../../REST/index.interface';
let swaggerJSDoc = require('swagger-jsdoc');

export default class Server {

    private expressApp: express.Application;

    constructor(
        private port: number,
        private restData:IRest,
        private apiPath: string = 'api',
        private apiVersion: string = 'v1'
    ) {
        this.expressApp = express();

        this.init();
    }

    private init() {
        this.expressApp.set('port', this.port);
        this.initMiddleware();
        this.initRoutes();
    }


    public start() {
        this.expressApp.listen(this.port, () => {
            console.info(`Server listening on port ${this.port}`);
        });
    }

    private initMiddleware(): void {
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    }

    private initRoutes(): void {
        this.expressApp.get('/', (req, res, next) => {
            res.json({
                message: 'Hello World!'
            });
        });

        let swaggerDefinition = {
            info: {
                title: 'Node Swagger API',
                version: '1.0.0',
                description: 'Demonstrating how to describe a RESTful API with Swagger',
            },
            host: `localhost:${this.port}`,
            basePath: `/${this.apiPath}/${this.apiVersion}/`,
        };

// options for the swagger docs
        let options = {
            // import swaggerDefinitions
            swaggerDefinition: swaggerDefinition,
            // path to the API docs
            apis: ['./REST/api/v1/*.ts'],

        };

// initialize swagger-jsdoc
        let swaggerSpec = swaggerJSDoc(options);


        this.expressApp.get(`/${this.apiPath}/${this.apiVersion}/swagger.json`, function(req, res) {
            res.setHeader('Content-Type', 'application/json');
            res.send(swaggerSpec);
        });

        this.restData.paths.forEach( (p:IRestData) => {
            this.addRoutes( p.method, p.path, p.controller );
        });
    }


    private addRoutes(method:string = 'post', route: string, handler: Function): void {
        let endpointPath = `/${this.apiPath}/${this.apiVersion}/${route}`;
        this.expressApp[method](`${endpointPath}`, handler);
    }
}