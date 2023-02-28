import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { getAllPizzaReducer } from "./reducers/pizzaReducer";


//create your states here
const rootReducer = combineReducers({
	allPizza: getAllPizzaReducer
});


const initialState = { };

const middleware = [thunk];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;