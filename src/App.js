import './App.css';
import React, {Component} from 'react';
import {HashRouter as Router, Route} from 'react-router-dom'
import routes from "./routes";
import { Navbar } from "./components/Navbar/Navbar";

class App extends Component  {

  AllRoutes = () => {
    return (<div>
      {routes.map((route, index) => {
        return (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={( props )=> {
                  return (
                      <route.component {...props} />
                  );
                }}
            />
        );
      })}
    </div>)
  };

  render() {
    return (
        <Router>
          <Navbar />
          <this.AllRoutes/>
        </Router>
    );
  }
}

export default App;
