import { faker } from "@faker-js/faker";
import { userDao } from "../daos/user.dao.js";

class UserServices {

    generate_users_service = (q) => {
        try {
            const users = [];
            for (let i=0; i<q; i++) {
                users.push({
                    first_name: faker.person.firstName(),
                    last_name: faker.person.lastName(),
                    email: faker.internet.email(),
                    password: 'coder123',
                    role: 'user',
                    pets: [],
                })
            };

            return users;
        } catch (error) {
            
        }
    };

    generate_mongo_users_service = async (users) => {
        try {
            const users_list = [];            
            for (let i=0; i<users; i++) {
                let user = {
                    first_name: faker.person.firstName(),
                    last_name: faker.person.lastName(),
                    email: faker.internet.email(),
                }
                users_list.push(user);
                await userDao.userCreation(user);
            };

            return users_list;
        } catch (error) {
            
        }
    };

    getAll = async () => {
        try {
            const response = await userDao.getAll();
            if (!response) throw new Error("Error get all");
            return response;
          } catch (error) {
            throw error;
          }
    }


};

export const userService = new UserServices();