import { createStore } from "redux";
import reducers from "./reducer";
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// this store is used in src/index.js to wrap the App component with the Provider component from react-redux u
const store = createStore(reducers, {}, composeEnhancers);

export default store;
