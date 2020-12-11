import React, {useState} from 'react';
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux';

import classes from './Login.css';
import Container from '../UI/Container/Container';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { updateObject, checkValidity} from '../../shared/utility';
import * as actions from '../../store/actions/index';

const Login = (props) => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [usernameForm, setUsernameForm] = useState({
    key: 'username',
    label: {
      text: 'Username',
      type: 'Secondary',
    },
    elementType: 'input',
    elementConfig: {
      type: 'input',
      placeholder: ''
    },
    value: '',
    validation: {
      required: true,
      maxLength: 50
    },
    valid: false,
    touched: false,
    errorMessage: null
  });

  const [passwordForm, setPasswordForm] = useState({
    key: 'password',
    label: {
      text: 'Password',
      type: 'Secondary',
    },
    elementType: 'password',
    elementConfig: {
      type: 'password',
      placeholder: ''
    },
    value: '',
    validation: {
      required: true,
      maxLength: 50
    },
    valid: false,
    touched: false,
    errorMessage: null
  });

  const checkAllFormIsValid = () => {
    let isValid = true;
    isValid = usernameForm.valid;
    isValid = passwordForm.valid && isValid;
    return isValid;
  }

  const isLoginSuccess = (username, password) => {
    const staticUsername = "login";
    const staticPassword = "1234";

    return username === staticUsername && staticPassword === password
  }

  const submitHandler = (event) => {
    event.preventDefault();
    let isValid = true;
    if (usernameForm.value === '') {
      setUsernameForm(
        updateObject(usernameForm, {
          touched: true,
          valid: false,
          errorMessage: 'input required'
        })
      );
      isValid = false;
    }
    if (passwordForm.value === '') {
      setPasswordForm(
        updateObject(passwordForm, {
          touched: true,
          valid: false,
          errorMessage: 'input required'
        })
      );
      isValid = false;
    }

    isValid = checkAllFormIsValid() && `isValid`; 

    if (isValid) {
      if (isLoginSuccess(usernameForm.value, passwordForm.value)) {
        setLoginSuccess(true);
      } else {
        console.log('give alert wrong id pass');
      }
    }
  }

  let loginRedirect = null;
  if (loginSuccess) {
    loginRedirect = <Redirect to='/' />
    props.onSetAuthenticated();
  }

  const inputUsernameChangedHandler = (event) => {
    const [isValid, errorMessage] = checkValidity(event.target.value, usernameForm.validation);
    const updatedControls = updateObject( usernameForm, {
      value: event.target.value,
      valid: isValid,
      errorMessage: errorMessage,
      touched: true
    });
    setUsernameForm(updatedControls);
  }

  const inputPasswordChangedHandler = (event) => {
    const [isValid, errorMessage] = checkValidity(event.target.value, passwordForm.validation);
    const updatedControls = updateObject( passwordForm, {
      value: event.target.value,
      valid: isValid,
      errorMessage: errorMessage,
      touched: true
    });
    setPasswordForm(updatedControls);
  }

  return (
    <div className={classes.Login}>
      {loginRedirect}
      <Container>
        <h1>Github Jobs Login</h1>
        <form 
          className={classes.FormLoginWrapper}
          onSubmit={submitHandler}>
          <Input
            key={usernameForm.key}
            id={usernameForm.key}
            label={usernameForm.label}
            elementType={usernameForm.elementType}
            elementConfig={usernameForm.elementConfig}
            value={usernameForm.value}
            isValid={usernameForm.valid}
            errorMessage={usernameForm.errorMessage}
            touched={usernameForm.touched}
            changed={(event) => inputUsernameChangedHandler(event)} />
          <Input
            key={passwordForm.key}
            id={passwordForm.key}
            label={passwordForm.label}
            elementType={passwordForm.elementType}
            elementConfig={passwordForm.elementConfig}
            value={passwordForm.value}
            isValid={passwordForm.valid}
            errorMessage={passwordForm.errorMessage}
            touched={passwordForm.touched}
            changed={(event) => inputPasswordChangedHandler(event)} />
            <div className={classes.ButtonWrapper}>
              <Button
                disabled={false}
                btnType="Success">Login</Button>
            </div>
        </form>
      </Container>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isAuth: state.login.isAuth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetAuthenticated: () => dispatch(actions.setAuthenticated())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login)