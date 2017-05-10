import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunkMiddleware from '../middleware/thunk';

const configureStore = (preLoadedState = {}) => (
  createStore(rootReducer,
    preLoadedState,
    applyMiddleware(thunkMiddleware))
);

export default configureStore;
