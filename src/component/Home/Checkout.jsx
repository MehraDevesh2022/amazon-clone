import React from 'react'
import Basket from './BasketItems';
import "./Checkout.css"
import Subtotal from './Subtotal';
function Checkout() {
  return (
  
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="basket ad"
          className="checkout__ad"
        />

        <div>
          <h3>Hello John Doe</h3>
          <h2 className="checkout__title">Your Shoping Basket</h2>
        </div>
        
        <Basket/>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>

    </div>
   
  );
}

export default Checkout