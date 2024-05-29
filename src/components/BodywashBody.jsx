import React, { useContext } from 'react';
import Products from '../assets/products.json';
import { ShoppingCartContext } from '../context/ShoppingCartContext';

import img6 from './assets/6.jpg';
import img7 from './assets/7.jpg';
import img8 from './assets/8.jpg';
import img9 from './assets/9.jpg';
import img10 from './assets/10.jpg';


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
                            <img src={product.image} alt={product.name} className="product_image" />
                            <h2 className="product_name">{product.name}</h2>
                            <p className="product_price">${product.price.toFixed(2)}</p>
                            <button className="product_button" onClick={() => addToCart(product.id)}>
                                Add to Bag {cartItemsAmount > 0 && <>({cartItemsAmount})</>}
                            </button>
                            <div className='loadingimages'>
                                <img src={img6} alt="" />
                                <img src={img7} alt="" />
                                <img src={img8} alt="" />
                                <img src={img9} alt="" />
                                <img src={img10} alt="" />

                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default BodywashBody;
