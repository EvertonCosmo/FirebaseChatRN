import React from 'react';
import {Container} from '../BasicForm/styles';
import {LoadingIndicator} from './styles';

const ActivityIndicator = () => {
  return (
    <Container>
      <LoadingIndicator size={'large'} color={'#ffb329'} />
    </Container>
  );
};
export default React.memo(ActivityIndicator);
