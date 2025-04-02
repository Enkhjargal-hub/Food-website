"use client";

interface Food {
  name: string;
  price: string;
  description: string;
  imageUrl: string;
}

interface FoodFormProps {
  newFood: Food;
  setNewFood: (food: Food) => void;
  onAddFood: () => void;
}

export default function FoodForm({
  newFood,
  setNewFood,
  onAddFood,
}: FoodFormProps) {
  return (
    <div>
      <input
        type="text"
        placeholder="Food Name"
        value={newFood.name}
        onChange={(e) => setNewFood({ ...newFood, name: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={newFood.price}
        onChange={(e) => setNewFood({ ...newFood, price: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={newFood.description}
        onChange={(e) =>
          setNewFood({ ...newFood, description: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Image URL"
        value={newFood.imageUrl}
        onChange={(e) => setNewFood({ ...newFood, imageUrl: e.target.value })}
      />
      <button onClick={onAddFood}>Add Food</button>
    </div>
  );
}
