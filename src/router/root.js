import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "../pages";
import { MenuNav } from "../components";

export const RootRouter = () => {
    return (
        <BrowserRouter>
            <MenuNav/>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter >
    );
}

function About() {
    return <h2>About</h2>;
  }
  