import React ,{createContext , useReducer} from 'react'
import { useHistory } from 'react-router-dom';
import Reducer from "./Reducer"
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
  
    }

   function removeFromBasket(id){
       
    dispatch({
          type : 'Remove_Item',
          payLoad : id

        })
   }
   function emptyBasket(){
    dispatch({
            type : "Empty",
            payload : ''  
    })
      history.push('/')
   }
       
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
    </BasketContext.Provider>
  )
}

export {BasketContextProvider , BasketContext}