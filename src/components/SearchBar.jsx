import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, settext] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    settext("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => submitHandler(e)}
        className="flex bg-gray-950 gap-5 px-10 py-10"
      >
        <input
          className="w-full border-2 px-4 py-2 text-xl rounded outline-none"
          type="text"
          value={text}
          onChange={(e) => settext(e.target.value)}
          required
          placeholder="Search anything..."
        />
        <button className="active:scale-95 cursor-pointer border-2 px-4 py-2 text-xl rounded outline-none">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
