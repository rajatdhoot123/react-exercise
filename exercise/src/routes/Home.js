import React, { useState , useEffect} from "react";
import Modal from "../components/Modal";
import { FormControl, Button } from "react-bootstrap";
import TopBar from "../components/TopBar";
import HomeContent from "../components/HomeContent";
import { Login } from "../api";
const Home = () => {
  const [show, setShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    if(loggedIn) {
      setShow(false)
    }
  },[loggedIn])
  const handleClose = () => setShow(false);

  const handleLoginClick = () => {
    if(loggedIn) {
      setUser({})
      setLoggedIn(false)
      return
    }
    setShow(true);
  };
  return (
    <div className="App">
      <Modal title="Login" handleClose={handleClose} show={show}>
        <LoginCard setUser={setUser} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      </Modal>
      <TopBar user={user} loggedIn={loggedIn} handleLoginClick={handleLoginClick} />
      <HomeContent loggedIn={loggedIn} handleLoginClick={handleLoginClick} />
    </div>
  );
};

const LoginCard = ({ setUser,setLoggedIn, loggedIn }) => {
  const [state, setState] = useState({
    userName: "",
    password: ""
  });

  const handleOnChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleLogin = () => {
    if(loggedIn) {
      setUser({})
      setLoggedIn(false)
      return;
    }
    Login({ name: state.userName, password: state.password }).then(
      ({ status, message, user }) => {
        if (status === "success") {
          setUser(user)
          setLoggedIn(true);
        }
      }
    );
  };
  return (
    <>
      <div className="my-2">
        <FormControl
          name="userName"
          onChange={handleOnChange}
          placeholder="username"
          aria-label="username"
          aria-describedby="basic-addon2"
        />
      </div>
      <div className="my-2">
        <FormControl
          name="password"
          onChange={handleOnChange}
          type="password"
          placeholder="password"
          aria-label="password"
          aria-describedby="basic-addon2"
        />
      </div>

      <Button onClick={handleLogin}>{loggedIn ? "Logout" : "Login"}</Button>
    </>
  );
};

export default Home;
