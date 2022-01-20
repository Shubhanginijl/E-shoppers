import * as types from "../Action/actiontype";
let initialState = {
  user: [],
  loginUser: [],
  basket: [],
};
let reducer = (state = initialState, action) => {
  switch (action.type) {
    case "upload":
      return {
        ...state,
        user: action.payload,
      };
    case "createData":
      return {
        ...state,
        loginUser: action.payload,
      };

    case types.Addtobasket:
      let newCart = [...state.basket, action.payload];
      return {
        ...state,
        basket: newCart,
      };
    
    
    case types.remove_from_cart:
      let updatedCart = [...state.basket];
      const index = state.basket.findIndex(item => item.id === action.payload);
      if (index >= 0) {
        updatedCart.splice(index, 1);
      }
      return {
        ...state,
        basket: updatedCart,
      };
    default:
      return state;
  }
};

export default reducer;
