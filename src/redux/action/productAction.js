import { ActionTypes } from "../contants/actionType";

export const setProducts = (products) => {
  // this is an action creator that returns an action object that can be used to perform an action 
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  // 2
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  // 3
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
}