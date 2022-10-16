import React from "react";
import { Container } from "./styles";

const Search = () => {
  return (
    <Container className="search">
      <input type="text" placeholder="Search. . ." required />
    </Container>
  );
};

export default Search;
