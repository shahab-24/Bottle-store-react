import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle1/Bottle";
import "./Bottles.css";
import Cart from "../Cart/Cart";
import { addToLS, getStoredCart } from "../../Utilities/locarStorage";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("Bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  // load data from localStorage with useEffect======
  useEffect(() => {
    // data loading after bottles length grater than 0=====

    // jodi bottles thake tahle useEffect diye ls theke data load hobe otherwise useEffect call hobena====
    if (bottles.length > 0) {
      // ls theke previous data thakle ta niye asha===
      const storedCart = getStoredCart();
      const savedCart = [];

      //ager cart item gulor modde loop diye protita id acces kore seta bottle er id er sate match hole id gulo empty array te raka===== and finally setCart a sei array ta set kore deya jate ui te dekha jai====
      for (const id of storedCart) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          savedCart.push(bottle);
        }
      }
      setCart(savedCart)
    }
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    console.log(bottle);
    const newCart = [...cart, bottle];
    setCart(newCart);

    // calling addToLS function to add cart to the localStorage====
    addToLS(bottle.id);
  };

  return (
    <div>
      <div className="carts">
        <h4 className="cart_bg">Cart: {cart.length}</h4>
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
