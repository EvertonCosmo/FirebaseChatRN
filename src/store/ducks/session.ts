import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {BaseAction, AuthType} from 'types';
export const Types = {
  SESSION_LOADING: 'session/SESSION_LOADING',
  SESSION_LOGOUT: 'session/SESSION_LOGOUT',
  SESSION_REQUEST: 'session/SESSION_REQUEST',
  SESSION_SUCCESS: 'session/SESSION_SUCCESS',
  SESSION_ERROR: 'session/SESSION_ERROR',
  SESSION_SIGNUP: 'session/SESSION_SIGNUP',
};
interface SessionState {
  user: FirebaseAuthTypes.User | null;
  loading: boolean;
  isAuthenticated: boolean;
  error?: string | null;
}
const INITIAL_STATE: SessionState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

const session = (state = INITIAL_STATE, {type, payload}: BaseAction) => {
  switch (type) {
    case Types.SESSION_LOADING:
      return {...state, loading: true};
    case Types.SESSION_SUCCESS:
      console.log('Session init');
      return {...state, user: payload, loading: false, isAuthenticated: true};
    case Types.SESSION_LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
export const Creators = {
  login: (data: AuthType): BaseAction => ({
    type: Types.SESSION_REQUEST,
    payload: {data},
  }),
  signUp: (data: AuthType): BaseAction => ({
    type: Types.SESSION_SIGNUP,
    payload: {data},
  }),
  logout: (): BaseAction => ({
    type: Types.SESSION_LOGOUT,
  }),
};
export default session;
