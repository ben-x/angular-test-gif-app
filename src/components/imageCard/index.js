import React from "react";
import { Link } from "react-router-dom";

import { Card, Col } from "react-bootstrap";

export default function ImageCard(props) {
    return (
        <Col sm={6} md={3}>
            <Link to={`/view/${props.data.id}`}>
                <Card>
                    <Card.Img
                        variant="top"
                        src={props.data.images.downsized_large.url}
                    />
                </Card>
            </Link>
        </Col>
    );
}
