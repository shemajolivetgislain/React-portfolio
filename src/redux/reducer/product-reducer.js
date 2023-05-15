import { ActionTypes } from "../contants/actionType";

const initialState = {
  products: [],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      //this line is necessary to update the state with the payload from the action creator setProducts in src/redux/action/productAction.js
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  // 
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      //this line is necessary to update the state with the payload from the action creator selectedProduct in src/redux/action/productAction.js
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
}