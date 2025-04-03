"use client";

import { useState, useEffect } from "react";
import { FoodCard } from "../../home/_components/FoodCard";
import CartDrawer from "../../home/_components/CartDrawer";
import Header from "../../home/_components/Header";
import { Footer } from "../../home/_components/Footer";

interface FoodItem {
  _id: string;
  name: string;
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

  const [foods, setFoods] = useState<FoodItem[]>([]); // 🆕 foods state нэмлээ!

  useEffect(() => {
    fetch("http://localhost:8000/food") // 🔥 Backend API-аас хоолнуудыг авах
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched foods:", data); // Debug хийхэд ашиглана
        setFoods(data);
      })
      .catch((err) => console.error("API Fetch error:", err));
  }, []);

  return (
    <div>
      <Header />
      <div className="flex justify-between p-4">
        <div className="flex gap-5">
          {foods.map((food) => (
            <div key={food._id} className="flex">
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
      <Footer />
    </div>
  );
}
