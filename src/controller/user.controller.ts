import { Request, Response } from 'express';
import { prisma } from '../utils/prisma';

export const listUsers = async (_req: Request, res: Response) => {
  const users = await prisma.user.findMany({orderBy: {createdAt: 'desc'}})
  res.json(users)
}

export const getUser = async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({where: {id: req.params}})
  if(!user) return res.status(400).json({message: "User not found"})
  res.json(user)
}

export const createUser = async (req: Request, res: Response) => {
   const user = await prisma.user.create({ data: req.body });
   res.status(201).json(user)
}

export const updateUser = async (req: Request, res: Response) => {
  const user = await prisma.user.update({where: {id: req.params.id}, data: req.body})
  res.json(user)
}

export const deleteUser = async (req: Request, res: Response) => {
  await prisma.user.delete({where: {id : req.params.id}})
  res.status(204).send();
}