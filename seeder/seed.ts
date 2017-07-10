import DAL from "../modules/dal/DAL.class";

console.log("Starting seeding");


function saveUser(name: string, email: string, password: string, rolesId:Array<any>) {
    let user = new DAL.UserModel();
    user.name = name;
    user.email = email;
    user.password = password;
    user.rolesId=rolesId;
    user.createdAt = new Date();
    user.save();
    console.log(`User ${name} has been created!`);
}

function saveRole(name: string) {
    let role = new DAL.RoleModel();
    role.name = name;
    role._default = true;
    role.createdAt = new Date();
    role.save();
    console.log(`Role ${name} has been created!`);
    return role;
}

DAL.init();
console.log("Removing all from user and role collections!");

//DAL.removeFromRolesAndUsers();

let res = DAL.RoleModel.removeAll();

let res2 =DAL.UserModel.removeAll();

let admin = saveRole("admin");
let user = saveRole("user");

saveUser("user", "user@localhost", "user",Array(user._id));
saveUser("admin", "admin@localhost", "admin",Array(admin._id));

console.log("All done!");

DAL.disconnect();
