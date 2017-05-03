import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import reducer from './Reducer';

export default combineReducers({
  routing: routerReducer,
  reducer,
});
