import React from 'react';
import Login from '../../components/login/login.component';

const LoginPage = () => {
  const placeholderFunction = () => {
    console.log("don't forget to actually write me");
  };

  return (
    <Login
      title="login"
      errorNotifications={null}
      errorMessages="Error message"
      handleChange={placeholderFunction}
      loginFunc={placeholderFunction}
    />
  );
};

export default LoginPage;
