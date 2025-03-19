export default function Menu() {
    const foods = [
      { id: 1, name: "Бургер", price: "₮12,000", img: "/burger.jpg" },
      { id: 2, name: "Пицца", price: "₮20,000", img: "/pizza.jpg" },
      { id: 3, name: "Суши", price: "₮25,000", img: "/sushi.jpg" },
    ];
  
    return (
      <section className="container mx-auto p-10">
        <h2 className="text-3xl font-bold text-center mb-6">Хоолны цэс</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {foods.map(food => (
            <div key={food.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              {/* <img src={food.img} alt={food.name} className="w-full h-48 object-cover" /> */}
              <div className="p-4">
                <h3 className="text-xl font-bold">{food.name}</h3>
                <p className="text-green-600 font-semibold">{food.price}</p>
                <button className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-700 transition">
                  Захиалах
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  