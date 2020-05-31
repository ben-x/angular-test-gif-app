import React, { Component } from "react";
import { Row, Container, Col, Card } from "react-bootstrap";
import * as actions from "redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Loading from "components/loader";

class ImageDetails extends Component {
    constructor() {
        super();
        this.state = {
            image: false,
        };

        this.getImage = this.getImage.bind(this);
    }
    getImage(id) {
        fetch(
            `https://api.giphy.com/v1/gifs/${id}?api_key=AczTVuJ5qQDXC4PrEwvS4Hr4qyNVGIGQ`
        )
            .then((data) => data.json())
            .then((data) => {
                this.setState({ image: data.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentDidMount() {
        this.getImage(this.props.match.params.id);
    }

    render() {
        return (
            <Container className="main-body">
                {this.state.image ? (
                    <Row>
                        <Col>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src={
                                        this.state.image.images.downsized_still
                                            .url
                                    }
                                />

                                <Card.Body>
                                    <Card.Title>
                                        {this.state.image.title}
                                    </Card.Title>
                                    <Card.Text>
                                        {this.state.image.url}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card>
                                <Card.Header as="h5">User</Card.Header>
                                <Card.Body>
                                    <Card.Title>
                                        {this.state.image.user.username}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                ) : (
                    <Loading />
                )}
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return { giphys: state.giphys };
};
const mapActionToProps = (dispatch) => {
    return { actions: bindActionCreators(actions, dispatch) };
};

export default connect(mapStateToProps, mapActionToProps)(ImageDetails);
