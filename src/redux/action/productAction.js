import { ActionTypes } from "../contants/actionType";

export const setProducts = (products) => {
  // 1
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
