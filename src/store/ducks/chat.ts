import {BaseAction} from 'types';

export const Types = {
  CHAT_MESSAGE_SEND: 'chat/CHAT_MESSAGE_SEND',
  CHAT_MESSAGE_SEND_SUCCESS: 'chat/CHAT_MESSAGE_SEND_SUCCESS',
  CHAT_MESSAGE_SEND_ERROR: 'chat/CHAT_MESSAGE_SEND_ERROR',
};

export interface Message {
  user: string;
  message: string;
  timestamp: number;
}
interface ChatState {
  messages: Message[];
  message?: Message;
  sending: boolean;
  error_sending?: string;
}

const INITIAL_STATE: ChatState = {
  messages: [],
  message: null,
  sending: false,
  error_sending: '',
};
const chat = (
  state = INITIAL_STATE,
  {type, payload}: BaseAction,
): ChatState => {
  switch (type) {
    case Types.CHAT_MESSAGE_SEND_SUCCESS:
      return {...state, sending: false, message: null};
    case Types.CHAT_MESSAGE_SEND_ERROR:
      return {...state, sending: false, error_sending: payload.error};
    default:
      return state;
  }
};
export const Creators = {
  sendMessage: (message: Message): BaseAction => ({
    type: Types.CHAT_MESSAGE_SEND,
    payload: {message},
  }),
};

export default chat;
