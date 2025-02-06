import { HttpStatusCode } from 'axios';
import { Request, Response } from 'express';
import { ItemManager } from './item.manager';

export const ItemController = {
    getAll: async (req: Request, res: Response): Promise<void> => void
        res.status(HttpStatusCode.Ok).json(await ItemManager.getAll()),
    getItemById: async (req: Request, res: Response): Promise<void> => void
        res.status(HttpStatusCode.Ok).json(await ItemManager.getItemById(req.params.id))
}