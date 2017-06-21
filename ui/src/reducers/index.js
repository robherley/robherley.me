import { combineReducers } from 'redux';
import WindowReducer from './reducer_window';

// Where all the reducers meet.
const rootReducer = combineReducers({
  currentLayout: WindowReducer,
});

export default rootReducer;
