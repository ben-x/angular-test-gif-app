import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class Header extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="/logo.jpg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        GIPHY
                    </Navbar.Brand>
                </Navbar>
            </>
        );
    }
}

export default Header;
