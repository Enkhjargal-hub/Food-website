"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // useRouter-г орууллаа
import LoginForm from "./_components/LoginForm";
import FoodList from "./_components/FoodList";
import FoodForm from "./_components/FoodForm";
import EditFoodForm from "./_components/EditFoodForm";

interface Food {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export default function AdminPage() {
  const router = useRouter(); // useRouter-г ашиглаж байна
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [foods, setFoods] = useState<Food[]>([]);
  const [newFood, setNewFood] = useState({
    name: "",
    price: "",
    description: "",
    imageUrl: "",
  });
  const [editingFood, setEditingFood] = useState<Food | null>(null);

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    const res = await fetch("http://localhost:8000/food");
    const data = await res.json();
    setFoods(data);
  };

  const handleLogin = (username: string, password: string) => {
    if (username === "admin" && password === "password") {
      setIsLoggedIn(true);
      router.push("/admin"); // Амжилттай нэвтэрсэн тохиолдолд admin хуудас руу шилжих
    } else {
      alert("Invalid credentials");
    }
  };

  const handleAddFood = async () => {
    await fetch("http://localhost:8000/food", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFood),
    });
    setNewFood({ name: "", price: "", description: "", imageUrl: "" });
    fetchFoods();
  };

  const handleUpdateFood = async () => {
    if (!editingFood) return;
    await fetch(`http://localhost:8000/food/${editingFood._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editingFood),
    });
    setEditingFood(null);
    fetchFoods();
  };

  const handleDeleteFood = async (id: string) => {
    await fetch(`http://localhost:8000/food/${id}`, { method: "DELETE" });
    fetchFoods();
  };

  if (!isLoggedIn) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return (
    <div className="p-10">
      <h2>Admin Panel - Manage Foods</h2>
      <FoodForm
        newFood={newFood}
        setNewFood={setNewFood}
        onAddFood={handleAddFood}
      />
      <FoodList
        foods={foods}
        onEdit={setEditingFood}
        onDelete={handleDeleteFood}
      />
      {editingFood && (
        <EditFoodForm
          editingFood={editingFood}
          setEditingFood={setEditingFood}
          onUpdateFood={handleUpdateFood}
        />
      )}
    </div>
  );
}
