import React from 'react';
import SignUp from './components/SignUp/SignUp';
import Login from "./components/Login/Login";
import HomePage from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import {AuthProvider} from "../src/contexts/context"
import PrivateRoute from "./components/PrivateRoute";
import AboutMe from "../src/components/AboutMe/AboutMe";
import "react-bootstrap/dist/react-bootstrap.min"

const App = () => {
  const history = useHistory();
  return (
      <AuthProvider>
        <div>
          <Router>
            <Switch>
              <PrivateRoute path={'/HomePage'} exact component={HomePage} />
              <PrivateRoute path={'/About'} exact  component={AboutMe} />
              <Route path='/' exact component={Login} />
              <Route path='/Login' exact component={Login} />
              <Route path='/SignUp' exact component={SignUp} />
            </Switch>
          </Router>
        </div>
      </AuthProvider>
  );
};

export default App;
