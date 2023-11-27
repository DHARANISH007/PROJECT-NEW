import React, { useState } from 'react';

const AddToCartPage = () => {
  
  const [cart, setCart] = useState([]);

  
  const products = [
    { id: 1, name: 'Purse', price: 200 },
    { id: 2, name: 'Cakes', price: 1500 },
    { id: 3, name: 'Perfumes', price: 2345 },
    
  ];


  const handleAddToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

 
  const handleRemoveQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart.filter((item) => item.quantity > 0));
  };

 
  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    

      <div>
        <h2>Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - {product.price}
              <br>
              
              </br>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((cartItem) => (
              <li key={cartItem.id}>
                {cartItem.name} - ${cartItem.price} - Quantity: {cartItem.quantity}
                <button onClick={() => handleRemoveQuantity(cartItem.id)}>Remove One</button>
                <button onClick={() => handleRemoveFromCart(cartItem.id)}>Remove All</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AddToCartPage;
