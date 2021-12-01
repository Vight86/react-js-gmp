import React from 'react';
import s from './Login.scss';
import Title from '../Title/Title';
import Button from '../Button/Button';
import CustomInput from '../CustomInput/CustomInput';

const Login = () => (
  <div className={s.login}>
    <form className={s.loginForm}>
      <Title>Log In</Title>
      <div className={s.email}>
        <CustomInput
          type="email"
          placeholder="email"
          label="user id*"
          theme="primary"
        />
      </div>
      <div className={s.password}>
        <CustomInput
          type="password"
          placeholder="password"
          label="password*"
          theme="primary"
        />
      </div>
      <div className={s.buttons}>
        <Button
          theme="secondary"
          isWide={false}
        >
          reset
        </Button>
        <Button
          theme="primary"
          isWide={false}
        >
          log in
        </Button>
      </div>
      <div className={s.note}>*Mandatory</div>
    </form>
    <div className={s.loginLogo} />
  </div>
);

export default Login;
