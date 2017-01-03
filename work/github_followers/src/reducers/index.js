import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import repo from './repo';
import followers from './followers';

export const rootReducer = combineReducers({repo, followers, routing: routerReducer});
