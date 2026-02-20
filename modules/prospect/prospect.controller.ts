import { Request, Response } from "express";
import { createProspect } from "./prospect.service";

export const addProspect = async (req: Request, res: Response) => {
  const prospect = await createProspect(req.body);
  res.json(prospect);
};
