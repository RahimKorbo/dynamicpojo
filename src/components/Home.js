import React, { Component } from 'react'
import { Card, Button, Col, Container, Dropdown, FormControl, InputGroup, Row } from 'react-bootstrap'
/*

{
    "tableName":"CardDetails",
    "columnesDetails":[{
            "columnName":"cardId",
            "columnType":"VARCHAR"
        },
        {
            "columnName":"maskCardNumber",
            "columnType":"INT"
        },
        {
            "columnName":"customerName",
            "columnType":"VARCHAR"
        }

    ]

}

*/
export default class Home extends Component {


    constructor(props) {
        super(props)
        this.state = {
            formValues: [{ name: "", email: "" }]
        };

    }


    render() {
        return (
            <>

                <div className="App-header">

                    <Container>

                        <Row>
                            <Col sm={4}>
                                <Card>
                                    <Card.Body>
                                        <InputGroup size="sm">
                                            <InputGroup.Text id="inputGroup-sizing-sm">Table Name</InputGroup.Text>
                                            <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                        </InputGroup>

                                        <Button variant="outline-primary">Primary</Button>
                                    </Card.Body>

                                </Card>
                            </Col>
                            <Col sm={8}>

                                <Card>
                                    <Card.Body>This is some text within a card body.</Card.Body>
                                </Card>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}
