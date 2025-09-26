import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
const CategoryCard = ({category}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{category.CategoryName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{category.CategoryID}</Card.Subtitle>
                <Card.Text>{category.CategoryDescription}</Card.Text>
                <Card.Link href="#">{category.IsActive ? "Active" : "Inactive"}</Card.Link>
            </Card.Body>
        </Card>
    );
}
export default CategoryCard;