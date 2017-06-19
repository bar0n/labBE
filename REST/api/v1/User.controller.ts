import DAL from "../../../modules/dal/DAL.class";

export const usersControllers = {
    getAllUsers: getAllUsers,
    getUserById: getUserById,
    getUserSettingsByUserId: getUserSettingsByUserId,
    saveUser: saveUser,
    getUserRoutesByUserId: getUserRoutesByUserId
};

function getAllUsers(req, res, next) {

     DAL.UserModel.find({},(err,docs)=>{
         if (err) throw err;
        if (docs){
            console.log('Docs:', docs);
            res.send(docs)
        }
        else{
            res.send({})
        }

    });

}
function getUserById(req, res, next) {
    console.log('getUserById', req.params.id);

    let find = DAL.UserModel.find({_id:req.params.id},(err,docs)=>{
        if (err) throw err;
        if (docs){

            let optionalParams = docs[0];
            console.log('Doc:', optionalParams);
            res.send(optionalParams)
        }
        else{
            res.send({})
        }

    });
}

function getUserSettingsByUserId(req, res, next) {
    console.log('getUserSettingsByUserId', req.params.id);
    res.send(`getUserSettingsByUserId! ${req.params.id}`)
}

function saveUser(req, res, next) {
    let user = new DAL.UserModel();
    user.name  = req.body.name;
    user.createdAt = new Date();
    user.save();
    res.send(`saveUser id:${user._id}`)
}

function getUserRoutesByUserId(req, res, next) {
    console.log('getUserRoutesByUserId', req.params.id);
    res.send(`getUserRoutesByUserId! ${req.params.id}`)
}