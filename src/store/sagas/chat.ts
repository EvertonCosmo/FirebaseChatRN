export function* sendMessage({payload}: any) {
  const {message} = payload.data;
  console.log('sending a message');
}
