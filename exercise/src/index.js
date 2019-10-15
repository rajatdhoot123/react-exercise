import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Landing from './routes/Landing';
import Home from './routes/Home';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from "./routes/UserList"
import UserDetails from "./routes/UserDetail"

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Landing}/>
      <Route path="/home" component={Home}/>
      <Route path="/userlist" component={UserList}/>
      <Route path="/userdetails/:id" component={UserDetails}/>
    </div>
  </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
