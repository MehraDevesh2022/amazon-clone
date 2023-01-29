export default (state , action) => {
 
  switch(action.type){
     case 'Add_Item':
        return {
          ...state,
          basketItem: [action.payLoad, ...state.basketItem],
        };
        case  'Remove_item':
        return {
          basketItem: state.basket.filter((item) => item.id !== action.payLoad),
        };
        case 'Empty' :
            return {
              basketItem: [],
            }
            default :
            return state
   }
}