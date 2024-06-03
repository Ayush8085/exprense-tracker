import { Router } from "express";
import { createExpense, deleteExpense, getAllExpense, getExpense } from "../controllers/expense.controller";

const router = Router();

router.post('/create-expense', createExpense);
router.get('/get-all-expense', getAllExpense);
router.get('/get-expense/:expenseId', getExpense);
router.delete('/delete-expense/:expenseId', deleteExpense);

export default router;