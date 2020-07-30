import React from "react";
import "./App.css";
import "./tailwind.output.css";

import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import Dashboard from "./components/Dashboard/dashboard";
import Home from './components/Home/home';
import {AuthProvider} from './context/auth';
import PrivateRoute from './components/login/privateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <AuthProvider>
    <Router>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="*">
            <Home/>
            </Route>
        </Switch>
     
    </Router>
    </AuthProvider>

    
  );
}

export default App;
