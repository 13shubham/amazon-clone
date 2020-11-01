export const initialState = {
  basket: [],
  user: null
};
//data layer is state and manipulate with action which could be add, remove 
// below function can be written as const reducer = () => {}
function reducer(state, action){ console.log(action.type);
  switch(action.type){
    case 'ADD_TO_BASKET': 
      //Logic for adding to basket
      return {
         ...state,
         basket: [...state.basket, action.item]
        };//return whatever we have, also return the basket ... whatever return new data layer looks like
    case 'REMOVE_FROM_BASKET':
      //Logic for removing item from basket
      let newBasket = [...state.basket]

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id);

      if(index >= 0){
        //item exists in basket, remove it...
        newBasket.splice(index, 1); // go to next index and splice it or cut it
      }else{
        console.warn(
          'Cant remove product (id: ${action.id}) as its not in basket');
      }
      return { ...state, 
        basket: newBasket };
    default:
      return state;
  }
}

export default reducer;