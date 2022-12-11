import React from "react";
import {Route, Navigate, Routes} from 'react-router-dom';
import Pizzarina from "../page/main";
import Pizza from "../page/pizza";
const AppRouter = () => {
    const t = false
    return (
      <Routes>
        {
            <Route key={'/'} path={'/'} element = {<Pizzarina />} exact/>
        }
        {
            <Route key={'/pizza/:id'} path={'/pizza/:id'} element = {<Pizza />} exact/>
        }
      </Routes>
    );
  }
  
export default AppRouter;