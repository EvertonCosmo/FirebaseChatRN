import styled from 'styled-components/native';
export const FormContainer = styled.View`
  width: 90%;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const TextInputCustom = styled.TextInput`
  /* background-color: #dedede; */
  width: 100%;
  color: #333;
  font-size: 16px;
  margin-bottom: 8px;
  border-radius: 8px;
  /* border-color: #dedede; */
  /* border-width: 1px; */
`;
export const ButtonCustom = styled.TouchableOpacity`
  background-color: #35aaff;
  width: 100%;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  /* margin-top: 8px; */
`;
export const ButtonCustomSignUp = styled.TouchableOpacity`
  margin-top: 8%;
`;
export const TextButtonSignUp = styled.Text`
  color: #191919;
  font-size: 18px;
  font-weight: bold;
`;
export const TextButton = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
export const TextError = styled.Text`
  color: red;
  font-size: 16px;
  align-self: flex-start;
`;
