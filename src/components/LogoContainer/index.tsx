import React from 'react';
import {Logo} from './styles';
import {SvgXml} from 'react-native-svg';
import SvgUri from 'react-native-svg-uri';
// import chatSvg from '../../assets/chat-svgrepo-com.svg';
// const LogoContainer = () => {
//   return (
//     <Logo>
//       <Image
//         width={'900'}
//         height={'144'}
//         source={require('../../assets/chat-svgrepo-com.svg')}
//       />
//     </Logo>
//   );
// };
const xml = `
  <svg viewBox="0 0 58 58">
    <path
      d="M48 19.929V41.07A4.93 4.93 0 0143.071 46H22L12 57V46H4.929A4.93 4.93 0 010 41.071V19.93A4.93 4.93 0 014.929 15H43.07A4.93 4.93 0 0148 19.929z"
      fill="#0391fd"
    />
    <path
      d="M53.071 1H14.929A4.93 4.93 0 0010 5.93V15h33.071A4.93 4.93 0 0148 19.93V32h5.071A4.93 4.93 0 0058 27.07V5.93A4.93 4.93 0 0053.071 1z"
      fill="#0f71d3"
    />
    <path
      d="M25 26.015H11a1 1 0 110-2h14a1 1 0 110 2zM38 32.015H11a1 1 0 110-2h27a1 1 0 110 2zM38 38.015H11a1 1 0 110-2h27a1 1 0 110 2z"
      fill="#fff"
    />
  </svg>`;
const LogoContainer = () => {
  return (
    <Logo>
      <SvgXml xml={xml} width={'900'} height={'144'} />
    </Logo>
  );
};

export default React.memo(LogoContainer);
