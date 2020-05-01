import { combineReducers } from 'redux';
import TweetReducer from './Reducers/TweetReducer';

const rootReducer = combineReducers({
    TweetReducer,
});

export default rootReducer;