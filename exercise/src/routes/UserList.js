import React, { useState, useEffect } from "react";
import { RandomName } from "../api";
import { withRouter } from "react-router-dom";

const Loader = () => <div className="loader"></div>;

const UserList = withRouter(({ history }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    RandomName()
      .then(({ data: { results } }) => {
        setLoading(false);
        setData(results);
      })
      .catch(err => {
        setLoading(false);
      });
  }, []);

  const handleUserDetails = (id, userObj) => {
    history.push(`/userdetails/${id}`, userObj);
  };
  return loading ? (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Loader />
    </div>
  ) : (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>

            <th>Email</th>

            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data.map(
            ({
              name: { first, last },
              email,
              phone,
              login: { md5 },
              picture: { medium }
            }) => (
              <tr
                key={md5}
                onClick={handleUserDetails.bind(null, md5, {
                  first,
                  last,
                  email,
                  phone,
                  picture: medium
                })}
              >
                <td>{first}</td>
                <td>{last}</td>

                <td>{email}</td>

                <td>{phone}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
});

export default UserList;
