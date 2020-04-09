import React from 'react';
import {Portal, Dialog, Paragraph, Button} from 'react-native-paper';
import {Alert} from 'types';

const AlertDialog = ({message, title, visible, onDismiss}: Alert) => {
  return (
    <Portal>
      <Dialog visible={visible}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{message}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={onDismiss}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};
export default React.memo(AlertDialog);
