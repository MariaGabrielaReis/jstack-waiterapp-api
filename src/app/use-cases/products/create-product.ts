import { Request, Response } from "express";

import { Product } from "../../models/Product";

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const { name, description, price, category, ingredients } = req.body;

    if (!name) return res.status(400).json({ error: "Name is required" });
    if (!price) return res.status(400).json({ error: "Price is required" });
    if (!category)
      return res.status(400).json({ error: "Category is required" });
    if (!ingredients)
      return res.status(400).json({ error: "Ingredients is required" });

    const product = await Product.create({
      name,
      description,
      price: Number(price),
      category,
      ingredients: JSON.parse(ingredients),
      imagePath,
    });

    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
}
