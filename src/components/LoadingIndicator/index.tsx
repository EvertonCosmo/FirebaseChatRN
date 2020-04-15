import React from 'react';
import {Container} from '../BasicForm/styles';
import {LoadingIndicator} from './styles';
import {Modal, Portal, Text, Button, Provider} from 'react-native-paper';

// const ActivityIndicator = () => {
//   return (
//     <Container>
//       <LoadingIndicator size={'large'} color={'#35aaff'} />
//     </Container>
//   );
// };

const ActivityIndicator = () => {
  return (
    <Provider>
      <Portal>
        <Modal visible={true}>
          <LoadingIndicator size={'large'} color={'#35aaff'} />
        </Modal>
      </Portal>
    </Provider>
  );
};
export default React.memo(ActivityIndicator);
