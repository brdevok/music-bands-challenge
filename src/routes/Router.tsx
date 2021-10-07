import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { BandsProvider } from "../context/BandsContext";
import BandPage from "../pages/BandPage/BandPage";
import Home from "../pages/Home/Home";

const Router:React.FC = ():JSX.Element => {

    return(
        <HashRouter>

            <Switch>

                <Route exact path="/">
                    <BandsProvider>
                        <Home/>
                    </BandsProvider>
                </Route>
                <Route path="/band/:id">
                    <BandPage/>
                </Route>

            </Switch>

        </HashRouter>
    );

}

export default Router;