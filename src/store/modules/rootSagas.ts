import {all, takeLatest, spawn} from 'redux-saga/effects';
import {Types as chatTypes} from '../ducks/chat';
import {Types as sessionTypes} from '../ducks/session';
import {sendMessage} from '../sagas/chat';
import {login, signUp, logoutUser, AuthStateChange} from '../sagas/session';

export default function* rootSaga() {
  return yield all([
    spawn(AuthStateChange),
    takeLatest(chatTypes.CHAT_MESSAGE_SEND, sendMessage),
    takeLatest(sessionTypes.SESSION_REQUEST, login),
    takeLatest(sessionTypes.SESSION_SIGNUP, signUp),
    takeLatest(sessionTypes.SESSION_LOGOUT, logoutUser),
    // takeLatest(sessionTypes.SESSION_AUTH_CHANGE, AuthStateChange),
  ]);
}
