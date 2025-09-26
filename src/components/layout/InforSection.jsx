import React from "react";
import { Container, Card, Button, Row, Col} from "react-bootstrap";
const InforSection = () => {
    return (
        <Container fluid style={{ backgroundImage: "url('inforsection-image.jpg')",
                            backgroundSize: "50%",

                            backgroundRepeat: "repeat",}} 
                    className="pb-5 pt-3">
            <Row className="m-3">
                <h3 style={{ fontFamily: "Cursive, Fantasy", marginLeft: '0.7rem' }}>News Management System</h3>
                <p style={{ fontFamily: "Cursive, Fantasy", marginLeft: '0.7rem' }}>
                    News management systems help businesses organize and control data effectively, <br/>
                    increase transparency and support quick decision making. We provide a modern, <br/>
                    secure and easy-to-use platform.</p>
                <Button className="mx-4" style={{ width: '10%', background: "#0a4e7bff", border: "none"}}>More detail</Button>
            </Row>
            <Row>
                <Col>
                    <Card style={{ width: '18rem', border: "none" }}>
                        <Card.Body>
                            <Card.Title style={{ fontFamily: "Cursive, Fantasy" }}>Data Management</Card.Title>
                            <Card.Text>
                                Supports entering, editing, and deleting data safely and easily.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                                <Col>
                    <Card style={{ width: '18rem', border: "none"  }}>
                        <Card.Body>
                            <Card.Title style={{ fontFamily: "Cursive, Fantasy" }}>High Security</Card.Title>
                            <Card.Text>
                                Use JWT authentication, clear authorization and data encryption.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                                <Col>
                    <Card style={{ width: '18rem', border: "none"  }}>
                        <Card.Body>
                            <Card.Title style={{ fontFamily: "Cursive, Fantasy" }}>Multi-user</Card.Title>
                            <Card.Text>
                                Support multiple roles such as Admin, User with intuitive interface.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                                <Col>
                    <Card style={{ width: '18rem', border: "none"  }}>
                        <Card.Body>
                            <Card.Title style={{ fontFamily: "Cursive, Fantasy" }}>Report & Analysis</Card.Title>
                            <Card.Text>
                                Provide charts and statistics to help make quick and accurate decisions.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
export default InforSection;