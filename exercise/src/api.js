import axios from "axios"

export const Login = ({ name, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name === "exercise" && password === "exercise") {
        resolve({
          status: "success",
          message: "Logged in successful",
          user: {
            alias: "EX"
          }
        });
      } else {
        resolve({
          status: "failed",
          message: "Username or password invalid",
          user: {}
        });
      }
    }, 300);
  });
};

export const RandomName = () => {
  return axios.get('https://randomuser.me/api/?results=20')
}
