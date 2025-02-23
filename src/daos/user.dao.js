import usersModel from "../models/user.model.js";


class UserDaoMongo {
    async userCreation(user) {
        try {
            return await usersModel.create(user);
          } catch (error) {
          }
    };

    async getAll() {
        try {
          return await usersModel.find({});
        } catch (error) {
          throw new Error(error);
        }
      }
}

export const userDao = new UserDaoMongo();