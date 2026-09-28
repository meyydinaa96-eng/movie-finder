import React from "react";

function SearchBar({
  searchQuery,
  setSearchQuery,
  handleSearch,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <div className="search-icon">
        🔍
      </div>

      <input
        type="text"
        placeholder="Cari judul film favoritmu..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <button type="submit">
        Cari Film
      </button>
    </form>
  );
}

export default SearchBar;