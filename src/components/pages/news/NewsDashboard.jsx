import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import NewsArticleCard from "../../common/NewsArticleCard";
import { Container, Row, Col } from "react-bootstrap";
const NewsDashboard = () => {
    const { user, newsLoading, news } = useContext(UserContext);
    const navigate = useNavigate();
    // if (!user) {
    //     navigate("/");
    // }
    if (newsLoading) {
        return <p>Loading...</p>
    } else {
        return (
            <Container className="mt-5">
                <h2>News Dashboard</h2>
                <Row>
                    {news.map((item) => {
                        return (
                            <Col md={3} className="mb-3 d-flex" key={item.NewsArticleID}>
                                <NewsArticleCard article={item} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        )
    }
}
export default NewsDashboard;