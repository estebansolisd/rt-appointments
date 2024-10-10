import { Request, Response } from 'express';
import { Deal } from '../models/Deal';

export const getDeals = async (req: Request, res: Response) => {
  const deals = await Deal.findAll();
  res.json(deals);
};

export const getDealById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deal = await Deal.findByPk(id);
  if (deal) {
    res.json(deal);
  } else {
    res.status(404).json({ message: 'Deal not found' });
  }
};

export const createDeal = async (req: Request, res: Response) => {
  const newDeal = await Deal.create(req.body);
  res.status(201).json(newDeal);
};

export const updateDeal = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deal = await Deal.findByPk(id);
  if (deal) {
    await deal.update(req.body);
    res.json(deal);
  } else {
    res.status(404).json({ message: 'Deal not found' });
  }
};

export const deleteDeal = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deal = await Deal.findByPk(id);
  if (deal) {
    await deal.destroy();
    res.status(204).json();
  } else {
    res.status(404).json({ message: 'Deal not found' });
  }
};
