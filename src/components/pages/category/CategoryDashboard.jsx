import { useState } from "react";
import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CategoryCard from "../../common/CategoryCard"
import SearchBar from "../../layout/SearchBar";
import UserContext from "../../context/UserContext";
import CategoryModal from "../../common/CategoryModal";
import CategoryCreationModal from "../../common/CategoryCreationModal";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const CategoryDashboard = () => {
  const { user, categories, loading, showUpdateModal, handleShowUpdateModal, handleCloseUpdateModal } = useContext(UserContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBy, setFilterBy] = useState("name");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const navigate = useNavigate();

  const handleShowCreateModal = () => setShowCreateModal(true);
  const handleCloseCreateModal = () => setShowCreateModal(false);

  const handleShow = (category) => {
    setSelectedCategory(category);
    handleShowUpdateModal();
  }
  if (!user) {
    navigate("/category");
  }

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
          <Button className="mx-2" style={{ backgroundColor: "#0a4e7bff" }} onClick={handleShowCreateModal}>Create New Category</Button>
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
                <CategoryCard category={category} editCategory={handleShow} />
                {/* <CategoryModal category={category} showModal={showUpdateModal} handlecloseModal={handleCloseUpdateModal}/> */}
              </Col>
            )
          })}
        </Row>
        {selectedCategory && <CategoryModal category={selectedCategory} showModal={showUpdateModal} handlecloseModal={handleCloseUpdateModal} handleSelectedCategory={setSelectedCategory} />}
        {showCreateModal && <CategoryCreationModal showModal={showCreateModal} handlecloseModal={handleCloseCreateModal} />}
      </Container>
    )
  }
}
export default CategoryDashboard;