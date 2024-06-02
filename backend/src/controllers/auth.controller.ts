import { RequestHandler } from "express";
import asyncHandler from "express-async-handler";
import z from 'zod';
import User from "../models/user.model";
import bcrypt from 'bcryptjs';
import { accessToken } from "../utils/jwt.token";

// ------------------ REGISTER USER ------------------ 
const registerUser: RequestHandler = asyncHandler(async (req, res) => {
    const registerObject = z.object({
        username: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
        repassword: z.string().min(6),
    });

    // VALIDATE INPUTS
    const { success } = registerObject.safeParse(req.body);
    if (!success) {
        res.status(404);
        throw new Error("Invalid Inputs");
    }

    // MATCH PASSWORDS
    if (req.body.password !== req.body.repassword) {
        res.status(404);
        throw new Error("Passwords does not match!!");
    }

    // CHECK IF EMAIL TAKEN
    const existUser = await User.exists({ email: req.body.email });
    if (existUser) {
        res.status(404);
        throw new Error("Email already registered!!");
    }

    // CREATE USER
    const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })

    // GENERATE ACCESS TOKEN
    const token = await accessToken(user._id);

    res.status(201)
        .cookie('token', token)
        .json({
            message: "Signup successfull!!",
            token,
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
            },
        })
})

// ------------------ REGISTER USER ------------------ 
const loginUser: RequestHandler = asyncHandler(async (req, res) => {
    const loginObject = z.object({
        email: z.string().email(),
        password: z.string().min(6),
    });

    // VALIDATE INPUTS
    const { success } = loginObject.safeParse(req.body);
    if (!success) {
        res.status(404);
        throw new Error("Invalid Inputs");
    }

    // GET USER
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        res.status(404);
        throw new Error("User not found!!");
    }

    // COMPARE PASSWORD
    const correctPassword = await bcrypt.compare(req.body.password, user.password);
    if (!correctPassword) {
        res.status(404);
        throw new Error("Incorrect password!!");
    }

    // GENERATE ACCESS TOKEN
    const token = await accessToken(user._id);

    res.status(200)
        .cookie('token', token)
        .json({
            message: "Login successfull!!",
            token,
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
            },
        })
})

export {
    registerUser,
    loginUser,
}