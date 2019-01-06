import { combineReducers } from 'redux';
import articleReducer from './articleReducer';
import draftReducer from './draftReducer';

const rootReducer = combineReducers({
    article:articleReducer,
    draft:draftReducer
})

export default rootReducer;