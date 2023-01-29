import React ,{useContext} from 'react'
import "./Product.css"
import { BasketContext } from '../contextApi';


function Product({title , price , rating , image , id}) {
  
  const {addToBasket} = useContext(BasketContext)
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, idx) => {
              return <p>🌟</p>;
            })}
        </div>
      </div>
      <img src={image} alt="" className="product__img" />
      <button onClick={() => addToBasket({ title, price, rating, image, id })}>
        Add to basket
      </button>
    </div>
  );
}

export default Product