import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <Form inline className="search-form">
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success" className="search-button">Search</Button>
      </Form>
    </div>
  );
};

export default SearchBar;
