import * as mongoose from 'mongoose';

let UserSchema = mongoose.Schema({
    id: Number,
    name: String,
    routes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Route'}],
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

UserSchema.statics.getAllOfThem = function (cb) {
    return this.find({}, cb)
};

export const UserModel = function (obj?) {


    return mongoose.model('User', UserSchema)
};

