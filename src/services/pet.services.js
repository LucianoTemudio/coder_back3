import { faker } from "@faker-js/faker";
import { petDao } from "../daos/pet.dao.js";

class PetServices {
    generate_pets_service = (q) => {
        try {
            const pets = [];
            const speciesList = ["dog", "cat", "fish"]
            for (let i=0; i<q; i++) {
                pets.push({
                    name: faker.person.firstName(),
                    species: faker.helpers.arrayElement(speciesList),
                    adopted: false,
                    owner: '',
                })
            };

            return pets;
        } catch (error) {
            
        }
    };


    generate_mongo_pets_service = async (pets) => {
        try {
            const pets_list = [];
            const speciesList = ["dog", "cat", "fish"]
            for (let i=0; i<pets; i++) {
                let pet = {
                    name: faker.person.firstName(),
                    species: faker.helpers.arrayElement(speciesList),                    
                }
                pets_list.push(pet);
                await petDao.petCreation(pet);
            };

            return pets_list;
        } catch (error) {
            
        }
    };

        getAll = async () => {
            try {
                const response = await petDao.getAll();
                if (!response) throw new Error("Error get all");
                return response;
              } catch (error) {
                throw error;
              }
        }

};

export const petService = new PetServices();