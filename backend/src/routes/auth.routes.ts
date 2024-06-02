import { Router } from "express";
import { loggedInUser, loginUser, registerUser } from "../controllers/auth.controller";
import authMiddleware from "../middlewares/auth.middleware";

const router = Router();

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.get('/loggedIn-user', authMiddleware, loggedInUser);

export default router;