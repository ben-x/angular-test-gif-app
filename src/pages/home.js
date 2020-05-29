import React, { Component } from "react";
import { Card, Container } from "react-bootstrap";
import Search from "components/search";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            search: "",
        };

        this.bindInput = this.bindInput.bind(this);
    }
    searchImage() {
        fetch(
            `http://api.giphy.com/v1/gifs/search?api_key=AczTVuJ5qQDXC4PrEwvS4Hr4qyNVGIGQ&q=${this.state.search}`
        )
            .then((data) => data.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    bindInput(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    componentDidMount() {
        this.searchImage();
    }

    render() {
        return (
            <Container className="main-body">
                <Search bindInput={this.bindInput} />

                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

export default Home;
