// Node Modules
import _ from 'lodash';

// Constants
import {
  ADD_WINDOW,
  DELETE_WINDOW,
  CHANGE_LAYOUT
} from '../actions';

// Config
import { default_grid } from '../config/grid_config';

export default function(state = default_grid, action) {
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
