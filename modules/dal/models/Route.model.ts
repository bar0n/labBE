import * as mongoose from 'mongoose';

let RouteSchema = mongoose.Schema({
    userId: String,
    paths: [{latitude : Number,  longitude : Number}],
    type: String,
    description: String,
    createdAt: Date // can be auto created http://mongoosejs.com/docs/guide.html#validateBeforeSave
});

/*
LogSchema.methods.speak = function () {
    console.log(" module "+this.module);
};

LogSchema.pre('save', function(next) {
    console.log("\nmodule.length:"+this.module.length+"\n");
    next();
});
*/

RouteSchema.statics.getAllOfThem = function (cb) {
    return this.find({}, cb)
};

export const RouteModel = function (obj?) {


    return mongoose.model('Route', RouteSchema)
};

