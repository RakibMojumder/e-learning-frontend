import SearchIcon from "../../../public/assets/icons/SearchIcon";

const Searchbar = () => {
  return (
    <div className="border hidden sm:flex items-center rounded-full flex-1">
      <div className="w-12 flex justify-center items-center">
        <SearchIcon />
      </div>
      <input
        type="text"
        placeholder="Search here..."
        className="py-2 text-sm rounded-r-full w-full focus:outline-none"
      />
    </div>
  );
};

export default Searchbar;
