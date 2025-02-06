import { HttpStatusCode } from 'axios';
import { Request, Response } from 'express';
import { UserManager } from './user.manager';

export const UserController = {
    getAll: async (req: Request, res: Response): Promise<void> => void
        res.status(HttpStatusCode.Ok).json(await UserManager.getAll()),
    getUserById: async (req: Request, res: Response): Promise<void> => void
        res.status(HttpStatusCode.Ok).json(await UserManager.getUserById(req.params.id))
}