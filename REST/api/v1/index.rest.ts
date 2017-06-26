import {IRestData} from './../../index.interface'
import {usersControllers} from './User.controller'
import {routesControllers} from './Route.controller'

export const paths: IRestData[] = [
    /**
     * @swagger
     * definition:
     *   Puppy:
     *     properties:
     *       name:
     *         type: string
     *       breed:
     *         type: string
     *       age:
     *         type: integer
     *       sex:
     *         type: string
     */
    {
        description: 'all repository actions endpoint',
        method: 'get',
        path: `users/:id`,
        controller: usersControllers.getUserById
    },


    /**
     * @swagger
     * definition:
     *   Puppy:
     *     properties:
     *       name:
     *         type: string
     *       breed:
     *         type: string
     *       age:
     *         type: integer
     *       sex:
     *         type: string
     */
    {
        description: 'all repository actions endpoint',
        method: 'get',
        path: `users`,
        controller: usersControllers.getAllUsers
    },
    {
        description: 'all repository actions endpoint',
        method: 'get',
        path: `users/:id/routs`,
        controller: routesControllers.getUserRoutesByUserId
    },

    {
        description: 'all repository actions endpoint',
        method: 'get',
        path: `users/:id/settings`,
        controller: usersControllers.getUserSettingsByUserId
    },
    {
        description: 'save routes repository actions endpoint',
        method: 'post',
        path: `users/:id/routes`,
        controller: routesControllers.saveRoutesForUser
    },

    {
        description: 'all repository actions endpoint',
        method: 'put',
        path: `users/`,
        controller: usersControllers.saveUser
    },

    /*/users
    /users/:id
/users/:id/settings
/users/:id/routs*/
];