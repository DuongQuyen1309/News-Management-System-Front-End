import { Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

import '../styles/NewsSearchBar.css';

const NewsSearchBar = ({ searchTerm, onSearchChange, filterBy = "title", onFilterChange }) => {
    function handleKindToFilter(kind){
        onFilterChange(kind);
    }
    function handleSearchValue(value){
        onSearchChange(value);
    }
  return (
    <div className="search-bar-wrapper">
      <InputGroup>
        {/* Dropdown chọn kiểu lọc */}
        <Form.Select
          value={filterBy}
          onChange={(e) => handleKindToFilter(e.target.value)}
          style={{ maxWidth: "140px" }}
        >
          <option value="title">By Title</option>
          <option value="headline">By Headline</option>
          <option value="newsContent">By Content</option>
          <option value="category">By Category</option>
        </Form.Select>

        {/* Ô search */}
        <InputGroup.Text>
          <FaSearch />
        </InputGroup.Text>

        <Form.Control
          type="text"
          placeholder={`Search by ${filterBy}...`}
          value={searchTerm || ""}
          onChange={(e) => handleSearchValue(e.target.value)}
        />
      </InputGroup>
    </div>
  );
};

export default NewsSearchBar;
