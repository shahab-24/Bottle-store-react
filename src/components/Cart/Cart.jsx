import PropTypes from "prop-types";
("prop-types");

import './Cart.css'

const Cart = ({ cart, handleRemoveCart }) => {
  const { img } = cart;
  return (
    <div className="add_Bottle">
      <img src={img} alt="" />
      <small><button onClick={() => handleRemoveCart(cart.id)}>Remove</button></small>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
  handleRemoveCart: PropTypes.func.isRequired,
};

export default Cart;
