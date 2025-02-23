import { Router } from "express";
import { userController } from "../controllers/user.controller.js";
import { petController } from "../controllers/pet.controller.js";

const router = Router();

router.get("/mockingusers/:q", userController.generate_users);
router.get("/mockingpets/:q", petController.generate_pets);
router.post("/users/generateData/:users", userController.generate_mongo_users);
router.post("/pets/generateData/:pets", petController.generate_mongo_pets);

router.get("/users", userController.getAll)
router.get("/pets", petController.getAll)

export default router;