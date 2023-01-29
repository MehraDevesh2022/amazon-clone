import React ,{useContext} from 'react'
import { BasketContext } from '../contextApi'
import CheckOutProduct from './CheckOutProduct';

function Basket() {
  const {basket} = useContext(BasketContext);
  return (
    <>
      {basket.map((item) => (
        <CheckOutProduct
          id={item.id}
          price={item.price}
          rating={item.rating}
          image={item.image}
          title={item.title}
        />
      ))}
    </>
  );
}

export default Basket