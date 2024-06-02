import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";
import { Types } from "mongoose";

const accessToken = async (userId: Types.ObjectId) => {
    return jwt.sign({ userId }, JWT_SECRET as string)
}

export {
    accessToken,
}