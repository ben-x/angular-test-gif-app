import React from "react";

import { Card, Col } from "react-bootstrap";

export default function ImageCard(props) {
    return (
        <Col sm={3}>
            <Card>
                <Card.Img
                    variant="top"
                    src={props.data.images.downsized_large.url}
                />
            </Card>
        </Col>
    );
}
