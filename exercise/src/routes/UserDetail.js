import React from "react";
import { withRouter } from "react-router-dom";
import Button from "../components/Button";

const UserDetails = withRouter(
  ({ history, location: { state }, match: { params } }) => {
    return (
      <>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <h3>User Details</h3>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={state.picture} />
            </div>
            <div>ID: {params.id}</div>
            <div>Email: {state.email}</div>
            <div>First: {state.first}</div>
            <div>Last: {state.last}</div>
            <div>Phone: {state.phone}</div>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={() => history.goBack()}>Go Back</Button>
        </div>
      </>
    );
  }
);

export default UserDetails;
