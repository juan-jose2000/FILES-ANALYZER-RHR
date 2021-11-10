import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { CreateUser } from "../create-user/CreateUser";
import { HomeScreen } from "../home/HomeScreen";
import { Login } from "../login/Login";
import { RecoverPassword } from "../login/recover-password/recover-password";
import { NavBar } from "../navbar/NavBar";
import { UserList } from "../user-list/UserList";

export const AppRouter = () => {

    const [ currentPath, setPath ] = useState("");

    const setCurrentPath = (path) => {
        setPath(path);
    }

    console.log(currentPath);

    return (
        <Router>
          <div>
        
            { currentPath !== "/login" && currentPath !== "/recover-password" ? <NavBar /> : null}


            <Switch>  
              <Route exact path="/" component={ HomeScreen } />
              <Route exact path="/login" component={ Login } >
                <Login setCurrentPath={setCurrentPath} />
              </Route>
              <Route exact path="/recover-password" component={ RecoverPassword } >
                <RecoverPassword setCurrentPath={setCurrentPath} />
              </Route>
              <Route exact path="/create-user" component={ CreateUser } />
              <Route exact path="/user-list" component={ UserList } />

            </Switch>
          </div>
        </Router>
      );
}