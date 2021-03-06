import React, {Fragment, useRef} from 'react';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {BasicFormProps} from 'types';
import {
  Container,
  ButtonCustom,
  TextButton,
  TextError,
  FormContainer,
  TextButtonSignUp,
  ButtonCustomSignUp,
} from './styles';
import {TextInputCustom} from './styles';
import {
  form_validation_signUp,
  form_validation_login,
} from '../../helpers/validation_form';
import LoadingIndicator from '../LoadingIndicator';

const BasicForm = ({buttonTitle, action}: BasicFormProps) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const secondTextInput = useRef(null);
  return (
    <Container>
      <Formik
        initialValues={{email: '', password: '', confirm_password: ''}}
        validationSchema={
          buttonTitle === 'SignUp'
            ? form_validation_signUp
            : form_validation_login
        }
        onSubmit={(values) => {
          dispatch(action({email: values.email, password: values.password}));
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
          isValid,
        }) => {
          return (
            <Fragment>
              <FormContainer>
                {touched.email && errors.email && (
                  <TextError>{errors.email}</TextError>
                )}
                <TextInputCustom
                  onChangeText={handleChange('email')}
                  placeholder={'Email'}
                  keyboardType={'email-address'}
                  onBlur={handleBlur('email')}
                  autoCapitalize={'none'}
                  returnKeyType={'next'}
                  onSubmitEditing={() => {
                    secondTextInput?.current?.focus();
                  }}
                  blurOnSubmit={false}
                  value={values.email}
                  underlineColorAndroid={'#35aaff'}
                />

                {touched.password && errors.password && (
                  <TextError>{errors.password}</TextError>
                )}
                <TextInputCustom
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  placeholder={'Password'}
                  secureTextEntry={true}
                  autoCapitalize={'none'}
                  returnKeyType={'done'}
                  ref={secondTextInput}
                  value={values.password}
                  underlineColorAndroid={'#35aaff'}
                />
                {buttonTitle === 'SignUp' && (
                  <Fragment>
                    {touched.confirm_password && errors.confirm_password && (
                      <TextError>{errors.confirm_password}</TextError>
                    )}
                    <TextInputCustom
                      onChangeText={handleChange('confirm_password')}
                      onBlur={handleBlur('confirm_password')}
                      value={values.confirm_password}
                      placeholder={'Confirm Password'}
                      secureTextEntry={true}
                      autoCapitalize={'none'}
                      returnKeyType={'done'}
                      underlineColorAndroid={'#35aaff'}
                    />
                  </Fragment>
                )}
                <ButtonCustom onPress={handleSubmit} disabled={!isValid}>
                  <TextButton>{buttonTitle}</TextButton>
                </ButtonCustom>
                {buttonTitle === 'Login' && (
                  <ButtonCustomSignUp
                    onPress={() => navigation.navigate('signup')}>
                    <TextButtonSignUp>Register</TextButtonSignUp>
                  </ButtonCustomSignUp>
                )}
              </FormContainer>
            </Fragment>
          );
        }}
      </Formik>
    </Container>
  );
};

export default React.memo(BasicForm);
