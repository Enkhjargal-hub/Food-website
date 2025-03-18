import { Products } from "../../models/product.schema.js";

export const createProduct = async (req, res) => {
  try {
    const { name, quantity, price, description } = req.body;

    const newProduct = await Products.create({
      name,
      quantity,
      price,
      description
    });
    
    res.json({ message: "Product created successfully!", product: newProduct });
  } catch (error) {
    console.error("Product үүсгэх үед алдаа гарлаа:", error);
    res.status(3000).json({ message: "Product үүсгэхэд алдаа гарлаа" });
  }
};