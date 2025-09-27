import { useEffect } from "react";
import { useState } from "react";
import { getAllCategoryApi } from "../../api/CategoryApi";
import { Container, Row, Col } from "react-bootstrap";
import CategoryCard from "../../common/CategoryCard"
import SearchBar from "../../layout/SearchBar";
const CategoryDashboard = () => {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("name");
  useEffect(() => {
    async function getAllCategory() {
      try {
        const response = await getAllCategoryApi();
        console.log(response);
        setCategories(response);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getAllCategory();
  }, [])

  if (loading) {
    return <p>Loading...</p>
  } else {
    const filteredCategory = categories.filter((category) => {
      if (filterBy === "name") {
        if (category.CategoryName.toLowerCase().includes(searchTerm.toLowerCase()))
          return category
      }
      if (filterBy === "description") {
        if (category.CategoryDescription.toLowerCase().includes(searchTerm.toLowerCase()))
          return category
      }
    })
    return (
      <Container className="mt-5">
        <div className="d-flex justify-content-end">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            filterBy={filterBy}
            onFilterChange={setFilterBy}
          />
        </div>
        <h2>Category Dashboard</h2>
        <Row>
          {filteredCategory.map((category) => {
            return (
              <Col md={3} className="mb-3 d-flex" key={category.CategoryID}>
                <CategoryCard category={category} />
              </Col>
            )
          })}
        </Row>
      </Container>
    )
  }
}
export default CategoryDashboard;