import { SetStateAction, Dispatch, useContext } from "react";
import { OrderContext } from "../../utils/orderContext";
import { Button } from "@/components/ui/button";

type Food = {
  foodId: string;
  foodName: string;
  price: number;
};

type FoodItem = {
  foodId: string;
  quantity: number;
};

type FoodCardProps = {
  food: Food;
  selectedFood: FoodItem;
  setSelectedFood: Dispatch<SetStateAction<FoodItem>>;
};

export const FoodCard = ({
  food,
  selectedFood,
  setSelectedFood,
}: FoodCardProps) => {
  const {
    /* setNewOrderInfo, newOrderInfo */
  } = useContext(OrderContext);

  const isSelected = selectedFood.foodId === food.foodId;

  const add = () => {
    if (isSelected) {
      setSelectedFood((prev) => ({
        ...prev,
        quantity: prev.quantity + 1,
      }));
    } else {
      setSelectedFood({ foodId: food.foodId, quantity: 1 });
    }
  };

  const remove = () => {
    if (!isSelected || selectedFood.quantity === 0) return;
    setSelectedFood((prev) => ({
      ...prev,
      quantity: prev.quantity - 1,
    }));
  };

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">{food.foodName}</h2>
      <p className="text-gray-600">Үнэ: {food.price}₮</p>
      <div className="flex gap-2 mt-2">
        <Button
          onClick={remove}
          disabled={!isSelected || selectedFood.quantity === 0}
          variant="destructive"
        >
          Хасах
        </Button>
        <span className="px-4 py-2 border rounded">
          {isSelected ? selectedFood.quantity : 0}
        </span>
        <Button onClick={add} variant="default">
          Нэмэх
        </Button>
      </div>
    </div>
  );
};

// camelCase  = front-end
// kebab-case = file nerlehed
// snake_case = crud db variable
// PascalCase = front-end
// UPPER-CASE = sql, back end
