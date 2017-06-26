
import DAL from "../../../modules/dal/DAL.class";

export const routesControllers = {
    saveRoutesForUser: saveRouteForUser,
    getUserRoutesByUserId: getUserRoutesByUserId
};

function saveRouteForUser(req, res, next) {

    if (req.body.type === undefined) {
        res.status(400).send({error:`Type is empty`});
    } else if (req.body.paths === undefined || !Array.isArray(req.body.paths) || req.body.paths.length < 2) {
        res.status(400).send({error:`path should consists  at least of two points`});
    } else {
        let route = new DAL.RouteModel();
        route.userId = req.params.id;
        route.type = req.body.type;
        route.description = req.body.description;
        route.paths = req.body.paths;
        route.createdAt = new Date();
        route.save();
        res.send(`saveRouteForUser id:${route._id}`);
    }
}

function getUserRoutesByUserId(req, res, next) {
    console.log('getUserRoutesByUserId', req.params.id);
    res.send(`getUserRoutesByUserId! ${req.params.id}`)
}