import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from 'src/reducers';

const configureStore = (initialState:object) => {
    const store = createStore(rootReducer,initialState,applyMiddleware(thunk,logger))
    return store
}

export default configureStore
