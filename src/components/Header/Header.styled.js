import Styled from 'styled-components';
import Theme, { dim } from '../../styles/theme';

const HeaderStyledContainer = Styled.div`
display: flex;
flex: 1;
flex-direction: row;
align-items: center;
justify-content: space-between;
background-color: #ffffff;
padding:  ${dim._12px} 5%;

.siteLogo {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0px ${dim._4px};
    cursor: ${props => props.isUserLoggedIn ? 'pointer' : 'default'};
}

.logoTitle {
    transition: font-size 1s;
}

.settingMenu {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.loggedInUserName {
    margin-right: ${dim._12px};
}

.signOutBtn {
    cursor: pointer;
    padding: ${dim._2px};
    :hover{
        background-color: ${Theme.color.red_80};
        border-radius: 40%;
    }
}
`;

export default HeaderStyledContainer;