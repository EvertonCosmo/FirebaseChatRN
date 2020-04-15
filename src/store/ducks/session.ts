import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {BaseAction, AuthType} from 'types';
export const Types = {
  SESSION_LOADING: 'session/SESSION_LOADING',
  SESSION_LOGOUT: 'session/SESSION_LOGOUT',
  SESSION_LOGOUT_SUCCESS: 'session/SESSION_LOGOUT_SUCCESS',
  SESSION_LOGOUT_ERROR: 'session/SESSION_LOGOUT_ERROR',
  SESSION_REQUEST: 'session/SESSION_REQUEST',
  SESSION_SUCCESS: 'session/SESSION_SUCCESS',
  SESSION_ERROR: 'session/SESSION_ERROR',
  SESSION_SIGNUP: 'session/SESSION_SIGNUP',
  SESSION_AUTH_CHANGE: 'session/SESSION_AUTH_CHANGE',
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
  error: '',
};

const session = (state = INITIAL_STATE, {type, payload}: BaseAction) => {
  switch (type) {
    case Types.SESSION_LOADING:
      return {...state, loading: true};
    case Types.SESSION_SUCCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        isAuthenticated: true,
        error: '',
      };
    case Types.SESSION_ERROR:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        error: payload,
      };
    case Types.SESSION_LOGOUT_SUCCESS:
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

  AuthStateChange: (): BaseAction => ({
    type: Types.SESSION_AUTH_CHANGE,
  }),
};
export default session;
