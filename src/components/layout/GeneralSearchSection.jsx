import { Container, Row, Col, Button, InputGroup, Form } from "react-bootstrap";

const GeneralSearchSection = () => {
  return (
    <Container className="text-center my-5 py-5">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <p className="text-muted mb-2">Ready to explore over the world?</p>
          <h1 className="display-3 fw-bolder mb-3">
            <span style={{ color: "#0a4e7bff" }}>News is prerequisite factor
            grows your abilities</span> 
          </h1>
          <p className="text-muted fs-5 mb-5">
            Transparent - Fast - Accurate
          </p>

          <Form className="d-flex justify-content-center">
            <InputGroup className="shadow-lg rounded-pill" style={{ maxWidth: "600px" }}>
              <Form.Control
                type="text"
                placeholder="Enter anything ..."
                className="border-0 rounded-start-pill py-3 ps-4"
              />
              <Button variant="dark" style={{width:'130px', backgroundColor: "#0a4e7bff"}} className="rounded-end-pill px-3">
                Search
              </Button>
            </InputGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default GeneralSearchSection;