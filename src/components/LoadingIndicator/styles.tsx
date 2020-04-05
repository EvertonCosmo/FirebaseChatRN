import styled from 'styled-components';
import {ActivityIndicator} from 'react-native-paper';
import {View} from 'react-native';

export const Container = styled(View)`
  flex: 1;
  opacity: 0.4;
  background-color: blue;
`;
export const LoadingIndicator = styled(ActivityIndicator)`
  flex: 1;
  align-items: center;
`;
