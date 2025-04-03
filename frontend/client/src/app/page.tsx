"use client";

import { useState, useEffect } from "react";
import { FoodCard } from "../../home/_components/FoodCard";
import CartDrawer from "../../home/_components/CartDrawer";
import Header from "../../home/_components/Header";
import { Footer } from "../../home/_components/Footer";

interface FoodItem {
  _id: string; // Тухайн хоолны уникаль ID
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

  const [foods, setFoods] = useState<FoodItem[]>([]); // foods state-ийн анхны утга хоосон массив

  useEffect(() => {
    fetch("http://localhost:8000/food") // API-гаас хоолны мэдээлэл авах
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched foods:", data);
        // Хэрэв data нь массив байхгүй бол, хоосон массив ашиглах
        setFoods(Array.isArray(data) ? data : []); // Иймээс алдаа гарахгүй
      })
      .catch((err) => console.error("API Fetch error:", err));
  }, []);

  return (
    <div>
      <Header />
      <div className="flex justify-between p-4">
        <div className="flex gap-5">
          {foods.length > 0 ? (
            foods.map((food) => (
              <div key={food._id} className="flex">
                <FoodCard
                  food={food}
                  selectedFood={selectedFood}
                  setSelectedFood={setSelectedFood}
                />
              </div>
            ))
          ) : (
            <p>Хоолны мэдээлэл ачаалагдаагүй байна.</p> // Хоосон бол энэ мессежийг харуулна
          )}
        </div>
        <CartDrawer />
      </div>
      <Footer />
    </div>
  );
}
