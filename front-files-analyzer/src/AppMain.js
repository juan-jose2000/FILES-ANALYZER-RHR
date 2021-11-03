import React from "react"
import { LoginContext } from "./LoginContext";
import { AppRouter } from "./app-router/AppRouter";

export const AppMain = () => {
    return (
        <LoginContext.Provider>
            <AppRouter/>
        </LoginContext.Provider>
    );
}