import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { getProductsReducers } from "./reducers/productReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  getProducts: getProductsReducers,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
