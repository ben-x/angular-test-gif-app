import React from "react";
import {
    Button,
    Jumbotron,
    Form,
    FormControl,
    InputGroup,
} from "react-bootstrap";

function search(props) {
    return (
        <Jumbotron>
            <Form>
                <InputGroup>
                    <FormControl
                        placeholder="Keyword"
                        aria-label="Keyword"
                        aria-describedby="basic-addon2"
                        name="search"
                        onChange={(event) => props.bindInput(event)}
                    />
                    <InputGroup.Append>
                        <Button
                            variant="outline-secondary"
                            onClick={props.search}
                        >
                            Search
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
        </Jumbotron>
    );
}

export default search;
