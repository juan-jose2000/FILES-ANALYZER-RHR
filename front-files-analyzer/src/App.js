import React from "react"
import { Provider,useSelector } from 'react-redux';
import {Route, Switch, Redirect, HashRouter } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { AppRouter } from "./components/app-router/AppRouter";
import { Login } from "./components/login/Login";
import { RecoverPassword } from "./components/login/recover-password/recover-password";
import { store } from "./redux/store/store";

export const App = () => {

    const isAuthenticated = useSelector( state => state.auth.isAuthenticated );
    console.log(isAuthenticated);

    function PrivateRoute({ component, isAuthenticated,  ...rest }) {
        console.log(isAuthenticated);
        return (
          <Route
            {...rest}
            render={props =>
              isAuthenticated ? (
                // <h1>Descomentar la linea de abajo</h1>
                React.createElement(component, props)
              ) : (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: {
                      from: props.location,
                    },
                  }}
                />
              )
            }
          />
        );
      }
    
      function PublicRoute({component, isAuthenticated,  ...rest }) {
        return (
          <Route
            {...rest}
            render={props =>
              isAuthenticated ? (
                <Redirect
                  to={{
                    pathname: "/",
                  }}
                />
              ) : (
                React.createElement(component, props)
              )
            }
          />
        );
      }
      

    return (
        <Provider store={ store } >
            <ToastContainer />
            <HashRouter>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/home" />} />
                <Route
                    exact
                    path="/"
                    render={() => <Redirect to="/home" />}
                />
                <PublicRoute exact path="/login" component={Login} />
                <PublicRoute exact path="/recover-password" component={RecoverPassword} />
                <PrivateRoute path="/" component={AppRouter} isAuthenticated={isAuthenticated} />
            </Switch>
            </HashRouter>
        </Provider>
    );
}