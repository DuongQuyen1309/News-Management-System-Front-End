import { Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import '../styles/SearchBar.css';

const SearchBar = ({ searchTerm, onSearchChange, filterBy = "name", onFilterChange }) => {
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
          <option value="name">By Name</option>
          <option value="description">By Description</option>
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

export default SearchBar;
