export default (state , action) => {
 
  switch (action.type) {
    case "Add_Item":
      console.log("add");
      return {
        ...state,
        basketItem: [action.payLoad, ...state.basketItem],
      }
    case "Remove_Item" :
   

      return {
      
        basketItem: state.basketItem.filter(
        (item) => item.id !== action.payLoad)
      };
    case "Empty":
      return {
        basketItem: [],
      };
    default:
      return state;
  }
}