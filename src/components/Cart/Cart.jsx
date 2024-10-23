import PropTypes from "prop-types"; 'prop-types'

const Cart = ({cart}) => {
  
    const{img} = cart;
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};


Cart.propTypes = {
    cart:PropTypes.object.isRequired
}


export default Cart;