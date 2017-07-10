import * as mongoose  from 'mongoose';
import * as models from './models';

export default class DAL {
    public static disconnect() {
        mongoose.connection.close();
    }

  /*  public static removeFromRolesAndUsers() {
        try {
            let db = mongoose.connection;
            db.roles.remove({});
            db.users.remove({});
        }
        catch(e) {
            console.log(e);
        }
        mongoose.connection.collections['roles'].drop( function(err) {
            console.log('collection  roles dropped');
        });
       /!*

        mongoose.connection.collections['users'].drop( function(err) {
            console.log('collection  users dropped');
        });*!/

       /!* mongoose.connection.db.dropCollection('users', function(err, result) {

        });
        mongoose.connection.db.dropCollection('roles', function(err, result) {

        });*!/
    }
*/
    public static init() {
        mongoose.connect('mongodb://localhost/BELABS');

        let db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open',() => console.log('connected to Mongo') );
    }


    static get LogModel() { return models.LogModel() }
    static get UserModel() { return models.UserModel() }
    static get RouteModel() { return models.RouteModel() }
    static get RoleModel() { return models.RoleModel() }

}