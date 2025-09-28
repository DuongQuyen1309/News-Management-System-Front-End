import { Card } from "react-bootstrap";
import '../styles/NewsCard.css';
import { BiEditAlt } from 'react-icons/bi';
import { FaRegTrashAlt } from 'react-icons/fa';
import { format } from "date-fns";
import { useState, useEffect } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const NewsArticleCard = ({ article }) => {
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [seletectNews, setSelectNews] = useState(null);
    const [updateNews, setUpdateNews] = useState(null);
    const [showUpdateModal, setUpdateModal] = useState(false);
    const [formData, setFormData] = useState(article);

    const { categories, deleteNews } = useContext(UserContext);

    useEffect(() => {
        setFormData(article);
        console.log(" dang lay cua", formData);
    }, [article]);

    const handleShow = (article) => {
        setShowDetailModal(true);
        setSelectNews(article);
    }

    const handleClose = () => {
        setShowDetailModal(false);
    }

    const onRemove = (id) => {
        const result = window.confirm("Are you sure you want to remove this news?");
        if (!result) return;
        deleteNews(id);
    };

    const handleEdit = () => {
        console.log("vào hàm handleEdit NEWS");
        setUpdateNews(article);
        setUpdateModal(true);
    }

    const handleCloseUpdateModal = () => {
        setUpdateModal(false);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: name === "isActive" ? value === "true" : value }));
    };

    const handleSubmit = (id, data) => {
        navigate("/news");
    }
    return (
        <Card className="news-card h-100 d-flex flex-column">
            <div className="news-category-badge">
                {
                    categories.find((category) => {
                        if (category.CategoryID === article.CategoryID)
                            return category
                    }).CategoryName
                }
            </div>
            <div style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                display: "flex",
                gap: "8px"
            }}>
                <button
                    className="update-btn"
                    style={{
                        borderRadius: "30px",
                        backgroundColor: "#f0f0f0",
                        border: "none",
                        padding: "5px 8px",
                        cursor: "pointer"
                    }}
                    onClick={handleEdit}
                    title="Update this category"
                >
                    <BiEditAlt color="#0d6efd" />
                </button>

                <button
                    className="remove-btn"
                    style={{
                        borderRadius: "30px",
                        backgroundColor: "#f0f0f0",
                        border: "none",
                        padding: "5px 8px",
                        cursor: "pointer"
                    }}
                    onClick={() => onRemove(article.NewsArticleID)}
                    title="Remove this category"
                >
                    <FaRegTrashAlt color="#dc3545" />
                </button>
            </div>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="news-title" >{article.NewsTitle}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{article.NewsArticleID}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                    {format(new Date(article.CreatedDate), "dd/MM/yyyy HH:mm")}
                </Card.Subtitle>
                <Card.Text className="news-description flex-grow-1">
                    {article.Headline}
                </Card.Text>

                <div className="d-flex flex-column align-items-center gap-2 mt-auto">
                    <Card.Link
                        href="#"
                        className={`status-badge ${article.NewsStatus ? "active" : "inactive"}`}
                    >
                        {article.NewsStatus ? "Active" : "Inactive"}
                    </Card.Link>
                    <Card.Link href="#" className="detail-link" onClick={() => handleShow(article)}>
                        Detail
                    </Card.Link>
                </div>
            </Card.Body>
            {seletectNews && <Modal
                show={showDetailModal}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{seletectNews.NewsTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {seletectNews.NewsContent}<br />
                    News Source: <strong>{seletectNews.NewsSource}</strong>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>}
            {updateNews && <Modal
                show={showUpdateModal}
                onHide={handleCloseUpdateModal}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update News ID: {updateNews.NewsArticleID}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={() => { handleSubmit(formData.NewsArticleID, formData) }}>
                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                name="NewsTitle"
                                value={formData.NewsTitle}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>Headline</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={2}
                                name="Headline"
                                value={formData.Headline}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAddress2">
                            <Form.Label>News Content</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="NewsContent"
                                value={formData.NewsContent}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>NewsSource</Form.Label>
                                <Form.Control
                                    name="NewsSource"
                                    value={formData.NewsSource}
                                    onChange={handleChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Status</Form.Label>
                                <Form.Select
                                    name="isActive"
                                    value={formData.NewsStatus ? "true" : "false"}
                                    onChange={handleChange}
                                >
                                    <option value="true">Active</option>
                                    <option value="false">Inactive</option>
                                </Form.Select>
                            </Form.Group>
                        </Row>
                        <Button style={{ backgroundColor: "#0a4e7bff" }} type="submit">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>}
        </Card>
    );
}
export default NewsArticleCard;