// eslint-disable-next-line react/prop-types
const SearchBox = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <div>
        <input
          type="text"
          name="search"
          placeholder="Type to movie name to search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </>
  );
};

export default SearchBox;
