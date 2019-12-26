import Styled from 'styled-components';
import Theme, { dim } from '../../styles/theme';

const LoginStyleContainer = Styled.div`
display: flex;
flex-direction: column;
margin: ${dim._scale(120)} auto;
padding: ${dim._12px} ${dim._28px};
background-color: ${Theme.color.base_100};
height: 100%;
width: ${dim._scale(320)};
box-shadow: 0 16px 32px 0 rgba(134,139,143,0.15);

.loginTitle{
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: ${dim._24px} 0px;
}

.errorInLogin {
    display: flex;
    justify-content: center;
    padding: ${dim._4px} 0px;
    color: ${Theme.color.tomato};
}

.eyeIcon{
    position: absolute;
    right: ${dim._8px};
    bottom: ${dim._16px};
}
`;

export default LoginStyleContainer;