import PropTypes from 'prop-types';
import './Bottle.css'


const Bottle = ({bottle , handleAddToCart}) => {
    const {name, img, price, ratings} = bottle;
    return (
        <div className="bottle">
            <h3>{name}</h3>
            <img src={img} alt="" />
            <p>price: $ {price}</p>
            <p>ratings: {ratings}</p>
            <button onClick={() => handleAddToCart(bottle)} className='btn'>Purchase</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func.isRequired
}

export default Bottle;