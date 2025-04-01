"use client";

import { useState } from "react";
import { FoodCard } from "../../home/_components/FoodCard";
import CartDrawer from "../../home/_components/CartDrawer";

interface FoodItem {
  foodId: string;
  quantity: number;
}

export default function Home() {
  const [selectedFood, setSelectedFood] = useState<FoodItem>({
    foodId: "",
    quantity: 0,
  });

  const foods = [
    { foodId: "1", foodName: "food1", price: 10000 },
    { foodId: "2", foodName: "food2", price: 20000 },
    { foodId: "3", foodName: "food3", price: 30000 },
  ];

  return (
    <div className="flex justify-between">
      <div className="flex gap-5">
        {foods.map((food) => (
          <div key={food.foodId} className="flex">
            <FoodCard
              food={food}
              selectedFood={selectedFood}
              setSelectedFood={setSelectedFood}
            />
          </div>
        ))}
      </div>
      <CartDrawer />
    </div>
  );
}
