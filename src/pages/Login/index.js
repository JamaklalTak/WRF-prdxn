import React, { useState } from 'react';
import { connect } from 'react-redux';

import Input from '../../helpers/Input';
import Button from '../../helpers/Button';
import Image from '../../helpers/Image';

import LoginStyleContainer from './Login.styled';

import { logInUser } from '../App/store/actions';

const Login = (props) => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState(null);
    const [isNameValid, setIsNameValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const _handleUserNameChange = (value) => {
        setName(value);
        setIsNameValid(validateUserName(value));
    };

    const _handlePasswordChange = (value) => {
        setPassword(value);
        setIsPasswordValid(validateUserPassword(value));
    };

    const validateUserName = (val) => {
      if(val.trim() !== '' && val.trim() !== null){
        return true;
      }
      return false;
    };

    const validateUserPassword = (val) => {
        if(val.trim() !== '' && val.trim() !== null){
          return true;
        }
        return false;
    };
    
    const _handleUserSignIn = () => {
        if(isNameValid && isPasswordValid){
          const requestBody = {
              username: name.trim(),
              password: password.trim()
          };
          props.dispatch(logInUser(requestBody));
        } else {
         setErrorMsg('Username or password is empty, please enter valid credentials.');
        }
    };

    return(
        <LoginStyleContainer>
            <div className='loginTitle header24'>Sign In into WFR</div>
            <Input
                className='username text14'
                placeHolder='Username'
                value={name}
                onChange={e => _handleUserNameChange(e.target.value)}
            />
            <Input
                type={showPassword ? 'text' : 'password'}
                className='password text14'
                placeHolder='Password'
                value={password}
                onChange={e => _handlePasswordChange(e.target.value)}
            >
            {showPassword ?
                <Image
                    className='eyeIcon'
                    src={require('../../assets/Images/password-show.svg')}
                    alt='eyeIcon'
                    onClick={() => setShowPassword(!showPassword)}
                />
                :
                <Image
                    className='eyeIcon'
                    src={require('../../assets/Images/password-hide.svg')}
                    alt='eyeIcon'
                    onClick={() => setShowPassword(!showPassword)}
                />
            }
            </Input>
            {errorMsg && <div className='errorInLogin'>{errorMsg}</div>}
            <Button disable={!(isNameValid && isPasswordValid)} value='SignIn' className='logInBtn button14' onClick={_handleUserSignIn}/>
        </LoginStyleContainer>
    );
}

export default connect()(Login);