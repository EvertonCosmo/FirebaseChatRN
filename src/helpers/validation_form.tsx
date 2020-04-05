import * as Yup from 'yup';

export let form_validation_login = Yup.object().shape({
  email: Yup.string().required('Required').email('Invalid email'),
  password: Yup.string()
    .min(8, 'password must be length 8')
    .required('type a password'),
});
export let form_validation_signUp = Yup.object().shape({
  email: Yup.string().required('Required').email('Invalid email'),
  password: Yup.string()
    .min(8, 'password must be length 8')
    .required('type a password'),
  confirm_password: Yup.string()
    .min(8, 'password must be length 8')
    .required('type again')
    .oneOf([Yup.ref('password'), null], "passwords don't match"),
});
