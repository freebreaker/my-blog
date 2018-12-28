import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
const rootReducer = combineReducers({
    article:articleReducer
})

export default rootReducer;