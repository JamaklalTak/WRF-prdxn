import React from 'react';
import { connect } from 'react-redux';

import Image from '../../helpers/Image';

import { logOutUser, saveSelectedTabId } from '../../pages/App/store/actions';

import HeaderStyleContainer from './Header.styled';

const Header = (props) => {
  const { isUserLoggedIn, userData } = props;
  const _handleUserLogoutClick = () => {
    props.dispatch(logOutUser());
    localStorage.removeItem('isUserLoggedIn');
    localStorage.removeItem('userData');
  };

  const _handleLogoClick = () => {
    if(isUserLoggedIn){
      props.history.push('/home');
      props.dispatch(saveSelectedTabId(1));
    }
  };

    return(
        <HeaderStyleContainer
          isUserLoggedIn={isUserLoggedIn}
        >
            <div className='siteLogo' onClick={_handleLogoClick}>
                <span className={`logoTitle ${isUserLoggedIn ? 'header24' : 'header40'}`}>WFR</span>
                <span className='logoName textNormal12'>World Football Records</span>
            </div>
            <div className='settingMenu'>
              <div className='loggedInUserName'>
              {isUserLoggedIn && userData && userData.length > 0 && userData[0].username ?
                <span>Hi, <span className='header16'>{userData[0].username}</span></span> : ''
              }
              </div>
              {isUserLoggedIn ?
                <Image
                  className='signOutBtn'
                  src={require('../../assets/Images/signout.svg')}
                  alt='logout'
                  onClick={_handleUserLogoutClick}  
                />
                :
                ''
              }
            </div>
        </HeaderStyleContainer>
    );
}

export default connect()(Header);