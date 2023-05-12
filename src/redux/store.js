import { createStore } from "redux";
import reducers from "./reducer";
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducers, {}, composeEnhancers);

export default store;
