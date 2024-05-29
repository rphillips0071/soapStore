import React, { useContext } from 'react';
import Products from '../assets/products.json';
import { ShoppingCartContext } from '../context/ShoppingCartContext';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

function BodywashBody() {
    const { addToCart, cartItems } = useContext(ShoppingCartContext);

    return (
        <div>
            <h1 className='products_heading'>Body Wash Products</h1>
            <div className="product_container">
                {Products.filter(product => product.type === 'body wash').map(product => {
                    const cartItemsAmount = cartItems[product.id]; 

                    return (
                        <div className="product_card" key={product.id}>
                            <img src={images[product.image]} alt={product.name} className="product_image" />
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
