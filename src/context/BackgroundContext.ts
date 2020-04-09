import {createContext} from 'react';

const BackgroundContext = createContext({background: 'transparent'});

export const BackgroundContextProvider = BackgroundContext.Provider;
export const BackgroundContextConsumer = BackgroundContext.Consumer;
