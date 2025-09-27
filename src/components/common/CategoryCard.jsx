import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/CategoryCard.css'; // 👈 Thêm file CSS riêng
import { FaRegTrashAlt } from 'react-icons/fa';
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { MdConfirmationNumber } from "react-icons/md";
const CategoryCard = ({ category }) => {
    const { deleteCategory } = useContext(UserContext);
    const onRemove = (id) => {
        const result = window.confirm("Are you sure you want to remove this category?");
        if (!result) return;
        deleteCategory(id);
    };
    return (
        <Card className="category-card h-100 d-flex flex-column">
            <button
                className="remove-btn"
                style={{ position: "absolute", top: "10px", right: "10px", borderRadius: "30px" }}
                onClick={() => onRemove(category.CategoryID)}
                title="Remove this category"
            >
                <FaRegTrashAlt />
            </button>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="category-title">{category.CategoryName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    ID: {category.CategoryID}
                </Card.Subtitle>
                <Card.Text className="category-description flex-grow-1">
                    {category.CategoryDescription}
                </Card.Text>
                <Card.Link
                    href="#"
                    className={`mt-auto status-badge ${category.isActive ? "active" : "inactive"}`}
                >
                    {category.isActive ? "Active" : "Inactive"}
                </Card.Link>
            </Card.Body>
        </Card>
    );
};

export default CategoryCard;
