import { Modal, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
const CategoryCreationModal = ({ showModal, handlecloseModal }) => {
    const [formData, setFormData] = useState({
        isActive: true,
        CategoryName: "",
        ParentCategoryID: "",
        CategoryDescription: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: name === "isActive" ? value === "true" : value }));
    };
    const handleSubmit = (e) => {
        // not have api so it doesn't update new category
    }
    return (
        <Modal show={showModal} onHide={handlecloseModal} size="lg" >
            <Modal.Header closeButton>
                <Modal.Title>Create New Category</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => { handleSubmit(e) }}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Status</Form.Label>
                            <Form.Select
                                name="isActive"
                                onChange={handleChange}
                            >
                                <option value="true">Active</option>
                                <option value="false">Inactive</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text"
                                name="CategoryName"
                                onChange={handleChange} />
                        </Form.Group>
                        
                        {/* //TODO */}
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Parent Category ID</Form.Label>
                            <Form.Control type="text"
                                name="ParentCategoryID"
                                onChange={handleChange} />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea"
                            rows={3}
                            name="CategoryDescription"
                            onChange={handleChange} />
                    </Form.Group>

                    <Button style={{backgroundColor: "#0a4e7bff"}} type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handlecloseModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
export default CategoryCreationModal;