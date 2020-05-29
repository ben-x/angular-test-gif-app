import React, { Component } from "react";
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";

class Route extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={} />
                    <Route exact path="/view/:id" component={} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Route;
