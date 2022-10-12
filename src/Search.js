import React from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = (event) => {
    // console.log(event.target.value);
    setSearchTerm(event.target.value);
  };
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>
    </div>
  );
};

export default Search;
