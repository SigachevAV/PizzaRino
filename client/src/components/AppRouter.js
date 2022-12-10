import React from "react";
import {Route, Redirect, Routes} from 'react-router-dom';
import { routes } from "../routes";
const AppRouter = () => {
    const t = false
    console.log(routes)
    return (
      <Routes>
       {
        routes.map(({path, Component}) =>
         <Route key={path} path={path} component = {Component}/>)
        }
      </Routes>
    );
  }
  
export default AppRouter;