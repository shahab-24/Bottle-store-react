const getStoredCart = () => {
  const storedCart = localStorage.getItem("cart");

  if (storedCart) {
    return JSON.parse(storedCart);
  }
  return [];
};


const addToLS = (id) => {
  const cart = getStoredCart();  
  cart.push(id);

// after add cart save to localstorage====
  saveToLS(cart)
};


const saveToLS = (cart) => {
    const cartStringiFied = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringiFied)
}


const removeCartFromLS = id => {
    const cart = getStoredCart();
    const remainig = cart.filter(idx => idx !== id)
    saveToLS(remainig)

}

export {addToLS, getStoredCart, removeCartFromLS}
