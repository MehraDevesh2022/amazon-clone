import React ,{createContext , useReducer} from 'react'
import { useHistory } from 'react-router-dom';
import Reducer from "./Reducer"
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
const initialState = {
    basketItem : []
}

const BasketContext = createContext(initialState);

function  BasketContextProvider({children}) {
  const [state, dispatch] = useReducer(Reducer , initialState)
const history = useHistory();

    function addToBasket(item){
        // console.log(item);
      dispatch({
        type : 'Add_Item', 
        payLoad : item
       })
    toast("item added");
    }

   function removeFromBasket(id){
    // console.log(state.basketItem);
  const item = state.basketItem.filter((item) => item.id !== id); 
  console.log(item);


    dispatch({
          type : 'Remove_Item',
          payLoad : id

        })
        toast("item removed")
   }
   function emptyBasket(){
    if(state.basketItem.length ===0){
      toast('cart is empty please add item first');
      return;
    }
    dispatch({
            type : "Empty",
            payload : ''  
    })
    toast("Order is Placed")
      history.push('/')
   }
      
    //  const notify = () => toast("Wow so easy !");

    return (
    <BasketContext.Provider
     value={{
        basket  :state.basketItem ,
        addToBasket,
        removeFromBasket,
        emptyBasket
     }}
    >
       {children}
       <ToastContainer/>
    </BasketContext.Provider>
  )
}

export {BasketContextProvider , BasketContext}