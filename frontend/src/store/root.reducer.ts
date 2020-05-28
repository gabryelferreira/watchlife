import { personsReducer } from './persons/persons.reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  persons: personsReducer,
});