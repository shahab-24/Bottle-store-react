

const Cart = ({cart}) => {
    const{img} = cart
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default Cart;