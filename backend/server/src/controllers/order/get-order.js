import { OrderModel } from "../../models/order-schema.js";  

export const getOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await OrderModel  
      .findById(orderId)
      .populate("user", "orderedFoods");  // Хэрэглэгчийн мэдээлэл болон захиалсан хоолыг авна

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to retrieve order", error });
  }
};
