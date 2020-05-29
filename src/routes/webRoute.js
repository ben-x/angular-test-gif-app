import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "pages/home";

class WebRoute extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    {/* <Route exact path="/view/:id" component={} /> */}
                </Switch>
            </BrowserRouter>
        );
    }
}

export default WebRoute;
