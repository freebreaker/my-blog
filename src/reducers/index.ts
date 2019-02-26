import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import draftReducer from './draftReducer';
import logInReducer from './logInReducer';
import logInBoxReducer from './logInBoxReducer';
const rootReducer = combineReducers({
    article:articleReducer,
    draft:draftReducer,
    loginBox:logInBoxReducer,
    login:logInReducer
})

export default rootReducer;