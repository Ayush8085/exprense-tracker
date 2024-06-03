import { RequestHandler } from "express";
import asyncHandler from "express-async-handler";
import z from 'zod';
import Expense from "../models/expense.model";

// ------------------ CREATE EXPENSE ------------------ 
const createExpense: RequestHandler = asyncHandler(async (req, res) => {
    const expenseObject = z.object({
        title: z.string(),
        price: z.number(),
        description: z.string().optional(),
    })

    // VALIDATE INPUTS
    const { success } = expenseObject.safeParse(req.body);
    if (!success) {
        res.status(404);
        throw new Error("Missing/Invalid Inputs");
    }

    // CREATE EXPENSE
    const expense = await Expense.create({
        userId: req.user.id,
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
    })

    res.status(201).json({
        message: "Expense created successfully!!",
        expense,
    })
})

// ------------------ GET ALL EXPENSE ------------------ 
const getAllExpense: RequestHandler = asyncHandler(async (req, res) => {
    // GET EXPENSES
    const expenses = await Expense.find({ userId: req.user.id });

    res.status(200).json({
        expenses,
    })
})

// ------------------ GET EXPENSE ------------------ 
const getExpense: RequestHandler = asyncHandler(async (req, res) => {
    // GET EXPENSE
    const expense = await Expense.findOne({
        userId: req.user.id,
        _id: req.params.expenseId
    });

    res.status(200).json({
        expense,
    })
});

// ------------------ DELETE EXPENSE ------------------ 
const deleteExpense: RequestHandler = asyncHandler(async (req, res) => {
    // GET EXPENSE
    await Expense.findOneAndDelete({
        userId: req.user.id,
        _id: req.params.expenseId
    });

    res.status(200).json({
        message: "Expense delete successfully!!",
    })
});

export {
    createExpense,
    getAllExpense,
    getExpense,
    deleteExpense,
}