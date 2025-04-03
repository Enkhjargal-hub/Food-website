"use client";

import { Plus } from "lucide-react";
import Image from "next/image";

interface FoodCardProps {
  food: {
    foodId: string;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
  };
  setSelectedFood: (selectedFood: { foodId: string; quantity: number }) => void;
}

const FoodCard: React.FC<FoodCardProps> = ({ food, setSelectedFood }) => {
  if (!food) return null;

  return (
    <div className="max-w-sm w-full bg-white shadow-lg rounded-2xl overflow-hidden relative">
      {/* Зурагны хэсэг */}
      <div className="relative w-full h-48">
        <Image
          src={food.imageUrl || "https://via.placeholder.com/400x400"}
          alt={food.name || "Food image"}
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-red-600">{food.name}</h2>
        <p className="text-gray-600 text-sm">${food.price}</p>

        {/* Тайлбар */}
        <p className="text-gray-500 text-sm mt-2 line-clamp-3">
          {food.description}
        </p>

        <div className="flex justify-between items-center mt-3">
          <button
            className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md"
            onClick={() =>
              setSelectedFood({ foodId: food.foodId, quantity: 1 })
            }
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

// camelCase  = front-end
// kebab-case = file nerlehed
// snake_case = crud db variable
// PascalCase = front-end
// UPPER-CASE = sql, back end
