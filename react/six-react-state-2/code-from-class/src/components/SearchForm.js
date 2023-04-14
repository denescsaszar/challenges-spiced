import { useState } from "react";

export default function SearchForm({ onSearch, searchTerm }) {
  /* CONTROLLED INPUT COMPONENT */
  const [searchFieldValue, setSearchFieldValue] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    onSearch(searchFieldValue);
  }
  /*   UNCONTROLLED INPUT COMPONENT    */
  //   function handleSubmit(event) {
  //   event.preventDefault();
  //   const el = event.target.elements;
  //   const searchTerm = el.searchTerm.value;
  //   console.log("submitting", searchTerm);
  //   onSearch(searchTerm);
  // }

  console.log("searchFieldValue", searchFieldValue);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchTerm">Search term:</label>
        <input
          autoComplete="off"
          name="searchTerm"
          id="searchTerm"
          value={searchFieldValue}
          onChange={(e) => setSearchFieldValue(e.target.value)}
        />
        <button>
          <span role="img" aria-label="search icon">
            🔍
          </span>
        </button>
      </form>
      <h2>
        {searchTerm
          ? `You searched for "${searchTerm}"`
          : "Please enter a search term"}
      </h2>
    </>
  );
}
