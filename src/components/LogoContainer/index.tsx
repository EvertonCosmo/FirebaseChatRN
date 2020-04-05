import React from 'react';
import {Logo} from './styles';
import SvgUri from 'react-native-svg-uri';

const LogoContainer = () => {
  return (
    <Logo>
      <SvgUri
        width={'900'}
        height={'144'}
        source={require('../../assets/chat-svgrepo-com.svg')}
      />
    </Logo>
  );
};
export default React.memo(LogoContainer);
