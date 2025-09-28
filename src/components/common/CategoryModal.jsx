import { Modal, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
const CategoryModal = ({ category, showModal, handlecloseModal, handleSelectedCategory }) => {

    const [formData, setFormData] = useState(category);
    // Cập nhật khi category thay đổi (khi mở modal mới)
    useEffect(() => {
        setFormData(category);
    }, [category]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: name === "isActive" ? value === "true" : value }));
    };

    const handleSubmit = (id, data) => {
        //not real api BE to submit
    }

    const closeModal = () => {
        handlecloseModal();
        handleSelectedCategory(null);
    }

    return (
        <Modal show={showModal} onHide={closeModal} size="lg" >
            <Modal.Header closeButton>
                <Modal.Title>Update Category ID: {formData.CategoryID}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={() => { handleSubmit(formData.CategoryID, formData)}}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Status</Form.Label>
                            <Form.Select
                                name="isActive"
                                value={formData.isActive ? "true" : "false"}
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
                                value={formData.CategoryName}
                                onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Parent Category ID</Form.Label>
                            <Form.Control type="text"
                                name="ParentCategoryID"
                                value={formData.ParentCategoryID}
                                readOnly />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea"
                            rows={3}
                            name="CategoryDescription"
                            value={formData.CategoryDescription}
                            onChange={handleChange} />
                    </Form.Group>

                    <Button style={{backgroundColor: "#0a4e7bff"}} type="submit">
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
export default CategoryModal;