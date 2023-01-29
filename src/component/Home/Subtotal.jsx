import React ,{useContext} from 'react'
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css"
import { BasketContext } from '../contextApi';
function Subtotal() {
  const {basket} = useContext(BasketContext);

  function totalPrice(){
       
    if(basket.length>0){
       const myPrice = basket.map((item) => item.price);

       const price = myPrice.reduce((total, currPrice) => total + currPrice);
       return price;
    }
      else{
        return 0
      }
  }   

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} : items):
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalPrice()}
        displayType="text"
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal