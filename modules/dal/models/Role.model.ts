import * as mongoose from 'mongoose';

let RoleSchema = mongoose.Schema({
    id: Number,
    name: String,
    _default: Boolean,
    createdAt: Date // can be auto created http://mongoosejs.com/docs/guide.html#validateBeforeSave
});

/*
LogSchema.methods.speak = function () {
    console.log(" module "+this.module);
};
*/
RoleSchema.pre('save', function(next) {
    // console.log("\nmodule.length:"+this.module.length+"\n");
    console.log("saving ROLE");
    next();
});


RoleSchema.statics.getAllOfThem = function (cb) {
    return this.find({}, cb)
};

RoleSchema.statics.removeAll = function (cb) {
    return this.remove({}, function(err) {
        if (err) {
            console.log(err)
        } else {
            console.log('success');
        }
    });
};

export const RoleModel = function (obj?) {


    return mongoose.model('Role', RoleSchema)
};

