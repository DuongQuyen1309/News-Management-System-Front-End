import { Modal, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
const AccountCreationModal = ({ showModal, handlecloseModal }) => {

    const [formData, setFormData] = useState({
        AccountEmail: "",
        AccountName: "",
        Password: "",
        Role: "",
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: name === "isActive" ? value === "true" : value }));
    };

    const handleSubmit = (e) => {
        // not have api so it doesn't create new category
    }

    const closeModal = () => {
        handlecloseModal();
        handleSelectedCategory(null);
    }

    return (
        <Modal show={showModal} onHide={closeModal} size="lg" >
            <Modal.Header closeButton>
                <Modal.Title>Create New Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => { handleSubmit(e) }}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={handleChange}
                                name="AccountName" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Role</Form.Label>
                            <Form.Control type="text"
                                onChange={handleChange}
                                name="AccountRole" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"
                                onChange={handleChange}
                                name="AccountPhone" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text"
                            onChange={handleChange}
                            name="AccountEmail" />
                    </Form.Group>

                    <Button style={{ backgroundColor: "#0a4e7bff" }} type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
export default AccountCreationModal;