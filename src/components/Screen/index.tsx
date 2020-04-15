import React, {ReactNode} from 'react';
import {StyleSheet, KeyboardAvoidingView} from 'react-native';
import {BackgroundContextConsumer} from '../../context/BackgroundContext';
interface ScreenProps {
  children: ReactNode;
}

const Screen = ({children}: ScreenProps) => {
  return (
    <BackgroundContextConsumer>
      {({background}) => {
        return (
          <KeyboardAvoidingView
            enabled
            style={[styles.container, {backgroundColor: background}]}>
            {children}
          </KeyboardAvoidingView>
        );
      }}
    </BackgroundContextConsumer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default React.memo(Screen);
