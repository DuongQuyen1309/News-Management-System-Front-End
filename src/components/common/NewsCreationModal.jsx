import { Modal, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
const NewsCreationModal = ({ showModal, handlecloseModal }) => {
    const { categories } = useContext(UserContext);
    const [formData, setFormData] = useState({
        NewsStatus: true,
        NewsTitle: "",
        Headline: "",
        NewsContent: "",
        NewsSource: "",
        CategoryID: ""
    });
    const [categoryIDs, setCategoryIDs] = useState([]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: name === "isActive" ? value === "true" : value }));
    };
    const handleSubmit = (e) => {
        // not have api so it doesn't update new category
    }

    const getAllCategoryIDs = () => {
        const categoryIDs = categories.map((category) => category.CategoryID);
        setCategoryIDs(categoryIDs);
    }
    useEffect(() => {
        getAllCategoryIDs();
    }, [])

    return (
        <Modal
            show={showModal}
            onHide={handlecloseModal}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Create News</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => { handleSubmit(e) }}>
                    <Form.Group className="mb-3" controlId="formGridTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            name="NewsTitle"
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridHeadline">
                        <Form.Label>Headline</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={2}
                            name="Headline"
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridNewsContent">
                        <Form.Label>News Content</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="NewsContent"
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridSource">
                            <Form.Label>News Source</Form.Label>
                            <Form.Control
                                name="NewsSource"
                                onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Status</Form.Label>
                            <Form.Select
                                name="NewsStatus"
                                onChange={handleChange}
                            >
                                <option value="true">Active</option>
                                <option value="false">Inactive</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridCategory">
                            <Form.Label>Category ID</Form.Label>
                            <Form.Select
                                name="CategoryID"
                                onChange={handleChange}
                            >
                                {categories.map((cat) => (
                                    <option key={cat.CategoryID} value={cat.CategoryID}>
                                        {cat.CategoryName} - {cat.CategoryID}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Button style={{ backgroundColor: "#0a4e7bff" }} type="submit">
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
export default NewsCreationModal;