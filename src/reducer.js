export const initialState = {
  basket: [],
  user: null,
};
// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => amount + item.price, 0);

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product ( id: ${action.id}) as it's not in the basket!`
        );
      }

      return {
        // Todo lo que esta actualmente en el state + basket actualizado
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        // Todo lo que esta actualmente en el state + user actualizado
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
