import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import NewsArticleCard from "../../common/NewsArticleCard";
import { Container, Row, Col, Button } from "react-bootstrap";
import NewsSearchBar from "../../layout/NewsSearchBar";
const NewsDashboard = () => {
    const { user, newsLoading, news, categories } = useContext(UserContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterBy, setFilterBy] = useState("title");
    const navigate = useNavigate();
    // if (!user) {
    //     navigate("/");
    // }
    const getCategoryNameByid = (article) => {
        const categoryName = categories.find((category) => {
            if (category.CategoryID === article.CategoryID)
                return category
        }).CategoryName
        return categoryName
    }

    if (newsLoading) {
        return <p>Loading...</p>
    } else {
        const filteredNews = news.filter((item) => {
            if (filterBy === "title") {
                if (item.NewsTitle.toLowerCase().includes(searchTerm.toLowerCase()))
                    return item
            }
            if (filterBy === "headline") {
                if (item.Headline.toLowerCase().includes(searchTerm.toLowerCase()))
                    return category
            }
            if (filterBy === "newsContent")
                if (item.NewsContent.toLowerCase().includes(searchTerm.toLowerCase()))
                    return item
            if (filterBy === "category") {
                if (getCategoryNameByid(item).toLowerCase().includes(searchTerm.toLowerCase()))
                    return item
            }
        })
        return (
            <Container className="mt-5">
                <div className="d-flex justify-content-end">
                    <Button className="mx-2" style={{ backgroundColor: "#0a4e7bff" }} >Create News</Button>
                    <NewsSearchBar searchTerm={searchTerm}
                        onSearchChange={setSearchTerm}
                        filterBy={filterBy}
                        onFilterChange={setFilterBy}/>
                </div>
                <h2>News Dashboard</h2>
                <Row>
                    {filteredNews.map((item) => {
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