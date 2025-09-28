import { Card } from "react-bootstrap";
import '../styles/NewsCard.css';
import { BiEditAlt } from 'react-icons/bi';
import { FaRegTrashAlt } from 'react-icons/fa';
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useContext } from "react";
import UserContext from "../context/UserContext";
const NewsArticleCard = ({ article }) => {
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [seletectNews, setSelectNews] = useState(null);
    const { categories, deleteNews } = useContext(UserContext);
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
                    // onClick={handleShowUpdateModal}
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
        </Card>
    );
}
export default NewsArticleCard;