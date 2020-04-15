export interface BasicFormProps {
  buttonTitle: string;
  action(data: AuthType): BaseAction;
}
export interface BaseAction {
  type: string;
  payload?: any;
}
export interface AuthType {
  email: string;
  password: string;
}
export interface Alert {
  message: string;
  title: string;
  visible: boolean;
  onDismiss(): void;
  action?(): void;
}
