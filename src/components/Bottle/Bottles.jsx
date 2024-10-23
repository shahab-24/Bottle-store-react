import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle1/Bottle";
import "./Bottles.css";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("Bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const handleAddToCart = (bottle) => {
    console.log(bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);
  };
  return (
    <div>
      <div className="carts">
        <h4>Cart: {cart.length}</h4>
        <div className="cart">
          {cart.map((item) => (
            <Cart key={cart.id} cart={item}></Cart>
          ))}
        </div>
      </div>
      <h3>Hello from BOttles</h3>
      <div className="bottles">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
