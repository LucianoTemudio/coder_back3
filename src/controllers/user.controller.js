import { userService } from "../services/user.services.js";

class UserController {
    
    generate_users = (req, res, next) => {
        try {
            const { q } = req.params;
            const response = userService.generate_users_service(q);
            res.json(response);
        } catch (error) {
            
        }
    };


    generate_mongo_users = async (req, res, next) => {
        try {
            const { users } = req.params;
            const response = await userService.generate_mongo_users_service(users);
            res.json(response);
        } catch (error) {
            
        }
    };

    getAll = async (req, res, next) => {
        try {
          const response = await userService.getAll();
          res.json(response);
        } catch (error) {
        }
      };
    
};

export const userController = new UserController();