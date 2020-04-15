import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {Reducer} from 'redux';
export default (reducers: Reducer) => {
  const persistedReducer = persistReducer(
    {
      key: 'root',
      storage: AsyncStorage,
      whitelist: ['session'],
    },
    reducers,
  );
  return persistedReducer;
};
