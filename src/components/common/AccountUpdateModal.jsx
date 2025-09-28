import { Modal, Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
const AccountUpdateModal = ({ account, showModal, handlecloseModal}) => {

    const [formData, setFormData] = useState(account);
    const { categories, updateCategory } = useContext(UserContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: name === "isActive" ? value === "true" : value }));
    };

    const handleSubmit = (e, id, data) => {
        // not real api
    }

    const closeModal = () => {
        handlecloseModal();
        handleSelectedCategory(null);
    }

    return (
        <Modal show={showModal} onHide={closeModal} size="lg" >
            <Modal.Header closeButton>
                <Modal.Title>Update Account ID Information: {formData.AccountID}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => { handleSubmit(e,formData.AccountID, formData)}}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="AccountName"
                                value={formData.AccountName}
                                readOnly/>  {/* because of admin, only update role*/}
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Role</Form.Label>
                            <Form.Control type="text"
                                name="AccountRole"
                                value={formData.AccountRole}
                                onChange={handleChange} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"
                                name="AccountPhone"
                                value={formData.AccountPassword}
                                readOnly/>
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Email</Form.Label>
                            <Form.Control type="text"
                                name="AccountEmail"
                                value={formData.AccountEmail}
                                readOnly /> {/* because of admin, only update role*/}
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
export default AccountUpdateModal;