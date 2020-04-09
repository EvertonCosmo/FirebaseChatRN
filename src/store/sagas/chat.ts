import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {put, call} from 'redux-saga/effects';
import {Types as chatTypes} from '../ducks/chat';

const reference = database().ref('messages');

export function* sendMessage({payload}: any) {
  const {message} = payload.data;
  const user = auth().currentUser;
  console.log('Current User: ' + user);
  let Chatmessage = {
    text: message,
    createdAt: new Date().getTime(),
    user: {
      id: user.uid,
      email: user.email,
    },
  };
  try {
    yield put({type: chatTypes.CHAT_MESSAGE_LOADING});
    yield call(reference.push().set, Chatmessage);
    yield put({type: chatTypes.CHAT_MESSAGE_SEND_SUCCESS});
  } catch (error) {
    yield put({type: chatTypes.CHAT_MESSAGE_SEND_ERROR});
  }
}
