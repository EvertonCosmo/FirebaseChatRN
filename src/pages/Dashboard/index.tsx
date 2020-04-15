import React from 'react';
import {Appbar} from 'react-native-paper';
import {Creators as sessionCreators} from '../../store/ducks/session';
import {useDispatch, useSelector} from 'react-redux';
import {FloatingAction} from 'react-native-floating-action';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Screen} from '../../components';
import {
  TitleDashboard,
  HeaderDashboard,
  HeaderDashboardContent,
} from './components';
import {RootReducerType} from 'src/store/modules/rootReducer';

const Dashboard = () => {
  const dispatch = useDispatch();
  const {user} = useSelector((state: RootReducerType) => state.session);

  function logout() {
    dispatch(sessionCreators.logout());
  }
  return (
    <Screen>
      <HeaderDashboard>
        <HeaderDashboardContent
          title={'FirebaseChat'}
          titleStyle={{fontSize: 24, fontWeight: 'bold'}}
        />
        <Appbar.Action icon="exit-to-app" color={'#fff'} onPress={logout} />
      </HeaderDashboard>
      <TitleDashboard>Welcome back ! </TitleDashboard>

      <FloatingAction
        listenKeyboard={true}
        overlayColor={'transparent'}
        color={'#35aaff'}
        buttonSize={60}
        floatingIcon={
          <MaterialIcons name={'person-add'} color={'white'} size={24} />
        }
      />
    </Screen>
  );
};
export default Dashboard;
