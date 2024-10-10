import { Router } from 'express';
import { UserController } from '../controllers/userController';

const userController = new UserController();
const router = Router();

router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

export { router as userRouter };