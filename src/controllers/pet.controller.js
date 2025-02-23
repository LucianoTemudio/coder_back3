import { petService } from "../services/pet.services.js";

class PetController {
    generate_pets = (req, res, next) => {
        try {
            const { q } = req.params;
            const response = petService.generate_pets_service(q);
            res.json(response);
        } catch (error) {
            
        }
    };

    generate_mongo_pets = async (req, res, next) => {
        try {
            const { pets } = req.params;
            const response = await petService.generate_mongo_pets_service(pets);
            res.json(response);
        } catch (error) {
            
        }
    };

        getAll = async (req, res, next) => {
            try {
              const response = await petService.getAll();
              res.json(response);
            } catch (error) {
            }
          };

};

export const petController = new PetController();