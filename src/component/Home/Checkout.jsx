import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal';
function Checkout() {
  return (
    // <div className="checkout__center">
    //   <img
    //     src="https://miro.medium.com/max/396/0*bVnfVVG7Y7qXQcO1"
    //     alt="cart product img"
    //   />
      <div className="checkout">
        <div className="checkout__left">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
            className='checkout__ad'
          />
        </div>
        {/* <h3>Hello</h3> */}
        {/* <div className="checkout__title">Your Shoping Basket</div> */}
        {/* <h2 className="checkout__title">Your Shoping Basket</h2> */}
        <div className="checkout__right">
          <Subtotal/>
        </div>
      </div>
    // </div>
  );
}

export default Checkout