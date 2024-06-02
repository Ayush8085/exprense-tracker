import { Request } from 'express';
import User from './models/user.model';

declare module 'express-serve-static-core' {
  interface Request {
    user?: typeof User.prototype; // or specify the exact type if available
  }
}