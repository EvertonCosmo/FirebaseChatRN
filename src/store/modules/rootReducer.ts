import {combineReducers} from 'redux';
import {chat, session} from '../ducks';
export const rootReducer = combineReducers({
  chat,
  session,
});
export type RootReducerType = ReturnType<typeof rootReducer>;
