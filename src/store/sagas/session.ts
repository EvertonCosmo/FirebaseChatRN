import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {put, call} from 'redux-saga/effects';
import {Types as sessionTypes} from '../ducks/session';

function _request(cb: Promise<FirebaseAuthTypes.UserCredential | void>) {
  return new Promise((resolve, reject) => {
    cb.then((response) => resolve(response)).catch((error) => reject(error));
  });
}
function _changeAuthState() {
  return new Promise((resolve, reject) => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        resolve(user);
      } else {
        reject(null);
      }
    });
  });
}

export function* login({payload}: any) {
  const {email, password} = payload.data;
  try {
    yield put({type: sessionTypes.SESSION_LOADING});
    const {user} = yield call(
      _request,
      auth().signInWithEmailAndPassword(email, password),
    );
    yield put({type: sessionTypes.SESSION_SUCCESS, payload: user});
  } catch (error) {
    console.log('ERROR' + JSON.stringify(error.message));
    yield put({type: sessionTypes.SESSION_ERROR, error: error.message});
  }
}
export function* signUp({payload}: any) {
  const {email, password} = payload.data;
  try {
    yield put({type: sessionTypes.SESSION_LOADING});
    const {user} = yield call(
      _request,
      auth().createUserWithEmailAndPassword(email, password),
    );
    console.log(user);
    console.log('User account created & signed in!');
    const response = yield call(_changeAuthState);
    if (response) {
      console.log('RESPONSE CHANGE' + response);
      yield put({type: sessionTypes.SESSION_SUCCESS, payload: response});
    }
  } catch (error) {
    console.log('ERROR' + JSON.stringify(error.message));
    yield put({type: sessionTypes.SESSION_ERROR, error: error.message});
  }
}
export function* logoutUser() {
  try {
    yield put({type: sessionTypes.SESSION_LOADING});
    const response = yield call(_request, auth().signOut());
    console.log(response);
  } catch (error) {
    yield put({type: sessionTypes.SESSION_ERROR, error: error.message});
  }
}
