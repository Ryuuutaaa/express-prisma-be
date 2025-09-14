import { Router } from "express";
import { listUsers, createUser, deleteUser, getUser, updateUser } from "../controller/user.controller";
import { validate } from "../middleware/validate";
import { CreateUserSchema, UpdateUserSchema } from "../models/user.model";

const router = Router()

router.get('/', listUsers);
router.get('/:id', getUser);
router.post('/', validate(CreateUserSchema), createUser);
router.patch('/:id', validate(UpdateUserSchema), updateUser);
router.delete('/:id', deleteUser);

export default router;