import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button, { LoginButton } from "./Button";

export default class TopBar extends Component {
  render() {
    return (
      <header
        style={{
          height: 48,
          width: "100%",
          backgroundColor: "rgb(102,63,180)",
          color: "white",
          padding: "6px 10px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <div style={styles.logo}>
          <Link to="/">
            <img
              alt={"logo"}
              style={{ maxHeight: 40, flex: 1 }}
              src="favicon-196x196.png"
            />
          </Link>
        </div>
        <div>{"Modus Create"}</div>
        <div style={{ float: "left", color: "white", flex: 1 }} />
        <div style={{ float: "right", paddingRight: 20 }}>
          <Button style={{ backgroundColor: "red", color: "white" }}>
            {this.props.user.alias ? this.props.user.alias : "Signup"}
          </Button>
          <LoginButton
            loggedIn={this.props.loggedIn}
            onClick={this.props.handleLoginClick}
            style={{ backgroundColor: "blue", color: "white" }}
          />
        </div>
      </header>
    );
  }
}

const styles = {
  logo: {
    float: "left",
    margin: 8
  }
};
