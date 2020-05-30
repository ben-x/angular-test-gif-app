import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "pages/home";
import ImageDetails from "pages/imageDetails";

class WebRoute extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/view/:id" component={ImageDetails} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default WebRoute;
