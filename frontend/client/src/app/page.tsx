"use client";

import { useState, useEffect } from "react";
import FoodCard from "../../home/_components/FoodCard";
import CartDrawer from "../../home/_components/CartDrawer";
import Header from "../../home/_components/Header";
import { Footer } from "../../home/_components/Footer";

interface FoodItem {
  _id: string;
  foodId: string;
  foodName: string;
  price: number;
  imageUrl: string;
}

export default function Home() {
  const [selectedFood, setSelectedFood] = useState<{
    foodId: string;
    quantity: number;
  }>({
    foodId: "",
    quantity: 0,
  });

  const [foods, setFoods] = useState<FoodItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/food")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched foods:", data);
        setFoods(Array.isArray(data) ? data : []);
      })
      .catch((err) => console.error("API Fetch error:", err));
  }, []);

  return (
    <div>
      <Header />
      <div className="flex justify-between p-4">
        <div className="flex gap-5 flex-wrap">
          {foods.length > 0 ? (
            foods.map((food) => (
              <FoodCard
                key={food._id}
                food={food}
                setSelectedFood={setSelectedFood}
              />
            ))
          ) : (
            <p>Хоолны мэдээлэл ачаалагдаагүй байна.</p>
          )}
        </div>
        <CartDrawer selectedFood={selectedFood} />
      </div>
      <Footer />
    </div>
  );
}
