import { combineReducers } from 'redux'
import newgame from './newgame'
import wordguess from './wordguess'
import newenter from './newenter'

export default combineReducers({
  newgame,
  wordguess,
  newenter
})
