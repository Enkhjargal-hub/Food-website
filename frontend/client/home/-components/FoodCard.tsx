interface FoodItem {
    foodId: string;
    foodName: string;
    price: number;
  }
  
  interface FoodCardProps {
    food: FoodItem;
    selectedFood: { foodId: string; quantity: number };
    setSelectedFood: (food: { foodId: string; quantity: number }) => void;
  }
  
  export default function FoodCard({ food, selectedFood, setSelectedFood }: FoodCardProps) {
    const handleSelect = () => {
      setSelectedFood({ foodId: food.foodId, quantity: selectedFood.quantity + 1 });
    };
  
    return (
      <div className="p-4 border rounded-lg shadow-md">
        <h3 className="text-lg font-bold">{food.foodName}</h3>
        <p className="text-gray-600">{food.price}₮</p>
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
          onClick={handleSelect}
        >
          Нэмэх
        </button>
      </div>
    );
  }
  