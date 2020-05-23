import React from "react";
import { Layout } from 'antd'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "../pages";
import { MenuNav } from "../components";

export const RootRouter = () => {
    return (
        <Layout>
            <BrowserRouter>
                <MenuNav />
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
        </Layout>
    );
}

function About() {
    return (
        <div>sdas</div>
    )
}
