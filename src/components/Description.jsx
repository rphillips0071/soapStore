import React from 'react';
import previewImg from '../assets/9-removedbg.png';
import storefront from '../assets/storefront.jpg';

function Description() {
  return (
    <>
      <div className='description_container'>
        <div className='descriptionfirst'>
          <img className='descriptionfirst_image' src={previewImg} alt="Description Image" />
        </div>
        <div className='descriptionsecond'>
          <div className='descriptiontext'>
            <h1>Eco-Friendly Hand Soap</h1>
            <p>This artisanal hand soap combines natural ingredients with a traditional touch. Perfect for daily use, it offers a gentle cleanse while caring for the environment. Each bar is hand-cut and comes with a practical wooden brush for optimal hygiene.</p>
          </div>
        </div>
      </div>
      <div className='aboutus_container'>
        <div className='storefront'>
          <img className='storeimage' src={storefront} alt="Storefront Image" />
        </div>
        <div className='aboutus'>
          <h1>Visit Us at The Soap Store</h1>
          <p>We are a small family business and view our customers as an extension of our own families. We proudly make products that we use in our own homes, on our delicate babies' bottoms, our tricky teens' skin, our stressed mature skin, and everything in between.</p>
        </div>
      </div>
    </>
  )
}

export default Description;