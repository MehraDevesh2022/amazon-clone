import React , {useContext}from 'react'
import { BasketContext } from '../contextApi';
 import { ToastContainer, toast } from "react-toastify";
import "./CheckoutProduct.css";
function CheckOutProduct({image ,title ,price , rating , id}) {
  const {removeFromBasket} = useContext(BasketContext);
    return (
      <div className="checkoutProduct">
        <img
          src={image}
          alt="basket item image"
          className="checkoutProduct__image"
        />
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>&</small>
            <strong>{price}</strong>
          </p>
          <p className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_) => (
                <p>🌟</p>
              ))}
          </p>
          <button className="checkoutProduct__btn">Remove from basket</button>
        </div>
      </div>
    );
}

export default CheckOutProduct