"use client";

interface Food {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

interface FoodListProps {
  foods: Food[];
  onEdit: (food: Food) => void;
  onDelete: (id: string) => void;
}

export default function FoodList({ foods, onEdit, onDelete }: FoodListProps) {
  return (
    <div>
      {foods.map((food) => (
        <div key={food._id} className="border p-3 m-2">
          <h3>
            {food.name} - ${food.price}
          </h3>
          <p>{food.description}</p>
          <img src={food.imageUrl} alt={food.name} width="100" />
          <button onClick={() => onEdit(food)}>Edit</button>
          <button onClick={() => onDelete(food._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
