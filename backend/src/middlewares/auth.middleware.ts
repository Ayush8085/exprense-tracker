import { RequestHandler } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "../config";
import asyncHandler from "express-async-handler";
import User from "../models/user.model";

const authMiddleware: RequestHandler = asyncHandler(async (req, res, next) => {
    let token = req.cookies.token;

    if (!token) {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            res.status(403);
            throw new Error("Missing/Invalid token");
        }

        token = authHeader.split(" ")[1];
    }

    if (!token) {
        res.status(403);
        throw new Error("Token missing!!");
    }

    const { userId } = jwt.verify(token, JWT_SECRET as string) as JwtPayload;

    const user = await User.findById(userId).select(['email', 'username']);

    if (!user) {
        res.status(404);
        throw new Error("User not found!!")
    }
    req.user = user;

    next();
})

export default authMiddleware;