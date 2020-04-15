import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {put, call, take} from 'redux-saga/effects';
import {channel} from 'redux-saga';
import {Types as sessionTypes} from '../ducks/session';

export const changeStateAuthChannel = channel();

function _request(cb: Promise<FirebaseAuthTypes.UserCredential | void>) {
  return new Promise((resolve, reject) => {
    cb.then((response) => resolve(response)).catch((error) => reject(error));
  });
}
function* _changeState() {
  auth().onAuthStateChanged((user) => {
    if (user) {
      changeStateAuthChannel.put({type: sessionTypes.SESSION_SUCCESS, user});
    }
  });
}
export function* changeAuthStateListener() {
  while (true) {
    try {
      const action = yield take(changeStateAuthChannel);
      yield put(action);
    } catch (error) {
      console.log('ERROR' + JSON.stringify(error));
    }
  }
}
export function* AuthStateChange() {
  try {
    yield call(_changeState);
  } catch (err) {
    console.log(err);
  }
}
export function* login({payload}: any) {
  const {email, password} = payload.data;
  try {
    yield put({type: sessionTypes.SESSION_LOADING});
    const {user} = yield call(
      _request,
      auth().signInWithEmailAndPassword(email, password),
    );
    // console.log(user);
    yield put({type: sessionTypes.SESSION_SUCCESS, payload: user});
  } catch (error) {
    console.log('ERROR' + JSON.stringify(error.message));
    yield put({type: sessionTypes.SESSION_ERROR, payload: error.message});
  }
}

export function* signUp({payload}: any) {
  const {email, password} = payload.data;
  try {
    yield put({type: sessionTypes.SESSION_LOADING});
    yield call(
      _request,
      auth().createUserWithEmailAndPassword(email, password),
    );
    // console.log(user);
    console.log('User account created & signed in!');
  } catch (error) {
    console.log('ERROR' + JSON.stringify(error.message));
    yield put({type: sessionTypes.SESSION_ERROR, error: error.message});
  }
}
export function* logoutUser() {
  try {
    yield put({type: sessionTypes.SESSION_LOADING});
    yield call(_request, auth().signOut());
    yield put({type: sessionTypes.SESSION_LOGOUT_SUCCESS});
  } catch (error) {
    yield put({type: sessionTypes.SESSION_LOGOUT_ERROR, error: error.message});
  }
}
