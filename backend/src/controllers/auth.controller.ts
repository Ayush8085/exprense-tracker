import { RequestHandler } from "express";
import asyncHandler from "express-async-handler";
import z from 'zod';
import User from "../models/user.model";

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
        res.status(404).json({
            message: "Invalid inputs!!",
        })
        return
    }

    // MATCH PASSWORDS
    if (req.body.password !== req.body.repassword) {
        res.status(404).json({
            message: "Passwords does not match!!",
        })
        return
    }

    // CHECK IF EMAIL TAKEN
    const existUser = await User.exists({ email: req.body.email });
    if (existUser) {
        res.status(404).json({
            message: "Email already registered!!",
        })
        return
    }

    // CREATE USER
    const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })

    res.status(201).json({
        message: "Signup successfull!!",
        user,
    })
})

export {
    registerUser,
}