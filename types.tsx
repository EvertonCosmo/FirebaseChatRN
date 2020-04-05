export interface NavigationScreenProps {
  navigation?: any;
  route?: any;
}
export interface BasicFormProps {
  buttonTitle: string;
  action(data: AuthType): BaseAction;
}
export interface BaseAction {
  type: String;
  payload?: any;
}
export interface AuthType {
  email: string;
  password: string;
}
