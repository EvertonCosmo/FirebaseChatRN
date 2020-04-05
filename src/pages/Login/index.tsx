import React, {Fragment} from 'react';
import BasicForm, {Screen, LogoContainer} from '../../components';
import {Creators as sessionCreators} from '../../store/ducks/session';
const Login = () => {
  return (
    <Fragment>
      <Screen>
        <LogoContainer />
        <BasicForm buttonTitle={'Login'} action={sessionCreators.login} />
      </Screen>
    </Fragment>
  );
};
export default React.memo(Login);
