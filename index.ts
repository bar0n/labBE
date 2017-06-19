import {appSettings} from './settings/';


import {Server} from './modules/server';
import {Logger} from './modules/logger';
import {DAL} from './modules/dal';

import * as restV1 from './REST/api/v1/index.rest';
import Promise = ChaiHttp.Promise;

let apiServer = new Server(appSettings.port, restV1);
apiServer.start();
DAL.init();

///////////

/*
let log = new DAL.LogModel();
log.message = 'tst';
log.date = new Date();
log.module = "index";
log.save();

let route = new DAL.RouteModel();
route.pointA = "Point A";
route.pointB = "Point B";
let savedRoute = route.save();
let route2 = new DAL.RouteModel();
route2.pointA = "Point A2";
route2.pointB = "Point B2";
let savedRoute2 = route2.save();
console.log("savedRoute        ", savedRoute);

Promise.all([savedRoute, savedRoute2])
    .then(results => {
        console.log(results);

        let user = new DAL.UserModel();
        user.name = "Jhone";
        user.routes = results.map(x => x._id);
        let pUser = user.save();
        pUser.then(u => console.log("USER:" + u));
    });


//Promise.all(savedRoute,savedRoute2);


DAL.LogModel.find((err, docs) => {
        console.log(err, docs);
        docs.forEach(x => x.speak());
    }
);

let all = DAL.LogModel.getAllOfThem();
console.log("sssssssssssssssss");
//console.log('all ',all);

*/

/////////////////

// import App from './App.class';
//

// const port = appSettings.port;
// App.set('port', port);
//
// const server = http.createServer(App);
// server.listen(port);
// server.on('error', onError);
// server.on('listening', () => console.log(`Listening on ${port}`) );
//
// function onError(error: NodeJS.ErrnoException): void {
//     switch(error.code) {
//         case 'EADDRINUSE':
//             console.error(`${port} is already in use`);
//             process.exit(1);
//             break;
//         default:
//             throw error;
//     }
// }

