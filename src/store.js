import { compose, createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
//import TweetReducer from './Reducers/TweetReducer';
import rootReducer from './rootReducer';
export default function createFinalStore() {
    const finalCreateStore = compose(applyMiddleware(Thunk))(createStore);
//    return finalCreateStore(TweetReducer);
return finalCreateStore(rootReducer);
}