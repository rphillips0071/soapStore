import React, { useContext } from 'react';
import Products from '../assets/products.json';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.jpg';
import image5 from '../assets/5.jpg';
import image6 from '../assets/6.jpg';
import image7 from '../assets/7.jpg';
import image8 from '../assets/8.jpg';
import image9 from '../assets/9.jpg';
import image10 from '../assets/10.jpg';

const imageMap = {
  1: image1,
  2: image2,
  3: image3,
  4: image4,
  5: image5,
  6: image6,
  7: image7,
  8: image8,
  9: image9,
  10: image10,
};

function BodywashBody() {
  const { addToCart, cartItems } = useContext(ShoppingCartContext);

  return (
    <div>
      <h1 className='products_heading'>Body Wash Products</h1>
      <div className="product_container">
        {Products.filter(product => product.type === 'body wash').map(product => {
          const cartItemsAmount = cartItems[product.id];
          const productImage = imageMap[product.id]; // Map image using id
          
          return (
            <div className="product_card" key={product.id}>
              <img src={productImage} alt={product.name} className="product_image" />
              <h2 className="product_name">{product.name}</h2>
              <p className="product_price">${product.price.toFixed(2)}</p>
              <button className="product_button" onClick={() => addToCart(product.id)}>
                Add to Bag {cartItemsAmount > 0 && <>({cartItemsAmount})</>}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BodywashBody;
