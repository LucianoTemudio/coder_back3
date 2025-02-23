import petsModel from "../models/pet.model.js";


class PetDaoMongo {
    async petCreation(pet) {
        try {
            return await petsModel.create(pet);
          } catch (error) {
          }
    };

    async getAll() {
        try {
          return await petsModel.find({});
        } catch (error) {
          throw new Error(error);
        }
      }

}

export const petDao = new PetDaoMongo();