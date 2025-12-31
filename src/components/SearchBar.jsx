import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";
import { FiSearch } from "react-icons/fi";
import { motion } from "framer-motion";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(setQuery(text));
    setText("");
  };

  return (
    <div className="w-full flex justify-center px-2">
      <motion.form
        onSubmit={submitHandler}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-3xl flex items-center gap-3 bg-gray-900/80 backdrop-blur-md border border-gray-800 rounded-2xl p-3 shadow-lg"
      >
        <div className="flex items-center gap-2 w-full bg-gray-950 rounded-xl px-4 py-3 border border-gray-800 focus-within:border-purple-500 transition">
          <FiSearch className="text-gray-400 text-xl shrink-0" />

          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Search anything..."
            className="w-full bg-transparent outline-none text-gray-100 placeholder-gray-500 text-base sm:text-lg"
            required
          />
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl text-base sm:text-lg font-medium transition shadow-md"
        >
          <FiSearch />
          <span className="hidden sm:block">Search</span>
        </motion.button>
      </motion.form>
    </div>
  );
};

export default SearchBar;
