import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { CreateUser } from "../users/CreateUser";
import { HomeScreen } from "../home/HomeScreen";
import { NavBar } from "../navbar/NavBar";
import { UserList } from "../users/UserList";
import EditUser from "../users/EditUser";
import ChangePassword from "../change-password/ChangePassword";
import FileDetail from "../files/FileDetail";

export const AppRouter = () => {

    const [ currentPath, setPath ] = useState("");

    return (
        <Router>
          <div>
        
            { currentPath !== "/login" && currentPath !== "/recover-password" ? <NavBar /> : null}

            <Switch>  
              <Route exact path="/" component={ HomeScreen } />
              <Route exact path="/create-user" component={ CreateUser } />
              <Route exact path="/user-list" component={ UserList } />
              <Route exact path="/user/form/:id/:action" component={ EditUser } />
              <Route exact path="/change-password" component={ ChangePassword } />
              <Route exact path="/file/:id" component={ FileDetail } />
            </Switch>
          </div>
        </Router>
      );
}