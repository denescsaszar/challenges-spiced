import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <main>
      <h1>Search</h1>
      <SearchForm onSearch={handleSearch} searchTerm={searchTerm} />
      <SearchResults searchTerm={searchTerm} />
    </main>
  );
}
