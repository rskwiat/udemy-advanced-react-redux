import { combineReducers } from 'redux';
import authenicationReducer from './authentication';

const rootReducer = combineReducers({
  authenticated: authenicationReducer
});

export default rootReducer;
