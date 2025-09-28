import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/CategoryCard.css'; 
import { FaRegTrashAlt } from 'react-icons/fa';
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { BiEditAlt } from 'react-icons/bi';

const CategoryCard = ({ category, editCategory}) => {
    const { deleteCategory } = useContext(UserContext);
    
    const handleEdit = (category) => {
        editCategory(category);
    }
    const onRemove = (id) => {
        const result = window.confirm("Are you sure you want to remove this category?");
        if (!result) return;
        deleteCategory(id);
    };
    return (
        <Card className="category-card h-100 d-flex flex-column">
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
                    onClick={()=>handleEdit(category)}
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
                    onClick={() => onRemove(category.CategoryID)}
                    title="Remove this category"
                >
                    <FaRegTrashAlt color="#dc3545" />
                </button>
            </div>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="category-title ">{category.CategoryName}</Card.Title>
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
