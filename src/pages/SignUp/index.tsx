import React, {Fragment} from 'react';
import BasicForm, {Screen, LogoContainer} from '../../components';
import {Creators as sessionCreators} from '../../store/ducks/session';
const SignUp = () => {
  return (
    <Fragment>
      <Screen>
        <LogoContainer />
        <BasicForm buttonTitle={'SignUp'} action={sessionCreators.signUp} />
      </Screen>
    </Fragment>
  );
};
export default React.memo(SignUp);
