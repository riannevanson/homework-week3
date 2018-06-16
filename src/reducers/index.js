import { combineReducers } from 'redux';
import wordslist from './wordslist';

const allReducers = combineReducers({
  wordslist : wordslist
});

export default allReducers;
