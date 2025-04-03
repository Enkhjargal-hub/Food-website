interface CartDrawerProps {
  selectedFood: { foodId: string; quantity: number };
}

const CartDrawer: React.FC<CartDrawerProps> = ({ selectedFood }) => {
  return (
    <div className="cart-drawer">
      <h2>Таны сагс:</h2>
      {selectedFood.foodId ? (
        <p>
          Хоол: {selectedFood.foodId}, Тоо: {selectedFood.quantity}
        </p>
      ) : (
        <p>Сагс хоосон байна</p>
      )}
    </div>
  );
};

export default CartDrawer;
