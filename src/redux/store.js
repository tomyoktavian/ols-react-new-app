import { createStore, compose } from "redux";
import rootReducer from "./reducer";

const configureStore = initialState => {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(rootReducer, initialState, composeEnhancers());
};

const store = configureStore();

export default store;