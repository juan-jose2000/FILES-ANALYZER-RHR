import React from "react"
import { Provider } from 'react-redux';
import { App } from "./App";
import { store } from "./redux/store/store";

export const AppMain = () => {

    return (
       <Provider store={store}>
           <App />
       </Provider>
    );
}