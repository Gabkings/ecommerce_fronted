
import React from 'react'

import {BrowserRouter, Switch, Route}  from "react-router-dom"
import PrivateRoutes from './auth/helper/Private'
import Login from './auth/Login'
import Signup from './auth/Signup'
import UserDashboard from './auth/UserDashboard'
import Home from './core/Home'


export default function Routes() {
    return (
        <BrowserRouter>
            <switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/signup" exact component={Signup}></Route>
                <Route path="/signin" exact component={Login}></Route>
                <PrivateRoutes path="/user/dashboard" exact component={UserDashboard} />
            </switch>
        </BrowserRouter>
    )
}
