// Node Modules
import _ from 'lodash';

// Constants
import {
  ADD_WINDOW,
  DELETE_WINDOW,
  CHANGE_LAYOUT
} from '../actions';

export default function(state = [], action) {
  switch(action.type) {
    case ADD_WINDOW:
      return [...state, action.payload];
    case DELETE_WINDOW:
      return _.reject(state, {i: action.payload});
    case CHANGE_LAYOUT:
      return action.payload;
    default:
      return state;
  }
}
