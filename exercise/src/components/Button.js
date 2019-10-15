import React, { Component } from "react";

const styles = {
  button: {
    width: 100,
    margin: 8,
    padding: 8
  }
};
const Button = ({children, onClick, style}) => {
  return (
    <button onClick={onClick} style={{ ...styles.button, ...style }}>
      {children}
    </button>
  );
};

export const LoginButton = ({style = {}, onClick, loggedIn}) => (
  <Button onClick={onClick} style={style}>
    {loggedIn ? "Logout" : "Login"}
  </Button>
);

export default Button