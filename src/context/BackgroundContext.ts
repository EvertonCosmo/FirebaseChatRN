import {createContext} from 'react';

const BackgroundContext = createContext({background: '#222'});

export const BackgroundContextProvider = BackgroundContext.Provider;
export const BackgroundContextConsumer = BackgroundContext.Consumer;
