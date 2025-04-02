"use client";

interface Food {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

interface EditFoodFormProps {
  editingFood: Food;
  setEditingFood: (food: Food | null) => void;
  onUpdateFood: () => void;
}

export default function EditFoodForm({
  editingFood,
  setEditingFood,
  onUpdateFood,
}: EditFoodFormProps) {
  return (
    <div>
      <input
        type="text"
        value={editingFood.name}
        onChange={(e) =>
          setEditingFood({ ...editingFood, name: e.target.value })
        }
      />
      <input
        type="number"
        value={editingFood.price}
        onChange={(e) =>
          setEditingFood({ ...editingFood, price: Number(e.target.value) })
        }
      />
      <input
        type="text"
        value={editingFood.description}
        onChange={(e) =>
          setEditingFood({ ...editingFood, description: e.target.value })
        }
      />
      <input
        type="text"
        value={editingFood.imageUrl}
        onChange={(e) =>
          setEditingFood({ ...editingFood, imageUrl: e.target.value })
        }
      />
      <button onClick={onUpdateFood}>Update Food</button>
    </div>
  );
}
