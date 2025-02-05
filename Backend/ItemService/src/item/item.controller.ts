import { HttpStatusCode } from 'axios';
import { Request, Response } from 'express';

export const ItemController = {
    getAll: async (req: Request, res: Response): Promise<void> => void
        res.status(HttpStatusCode.Ok).json(await)
}