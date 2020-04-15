import React, {Fragment} from 'react';

import BasicForm, {Screen, LogoContainer} from '../../components';
import {Creators as sessionCreators} from '../../store/ducks/session';
import {LoadingIndicator} from '../../components';
import {useSelector} from 'react-redux';
import {RootReducerType} from 'src/store/modules/rootReducer';

const Login = () => {
  const {loading} = useSelector((state: RootReducerType) => state.session);

  return (
    <Fragment>
      <Screen>
        <Fragment>
          <LogoContainer />
          <BasicForm buttonTitle={'Login'} action={sessionCreators.login} />
        </Fragment>
      </Screen>
    </Fragment>
  );
};
export default React.memo(Login);
