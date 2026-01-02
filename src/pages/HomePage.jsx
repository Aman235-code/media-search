/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiCollection } from "react-icons/bi";

const HomePage = () => {
  const { query } = useSelector((store) => store.search);
  return (
    <div className="h-screen w-full flex flex-col bg-linear-to-br from-gray-900 via-gray-950 to-black text-white">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* Top Row */}
          <div className="flex items-center justify-between mb-4">
            {/* Title */}
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-500/10">
                <FiSearch className="text-purple-400 text-xl" />
              </div>
              <h1 className="text-2xl font-semibold tracking-tight text-gray-100">
                Media Search
              </h1>
            </div>

            {/* Action */}
            <Link
              to="/collection"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 text-sm font-medium text-gray-200 hover:bg-gray-800 hover:border-gray-600 transition"
            >
              <BiCollection className="text-lg text-purple-400" />
              Collection
            </Link>
          </div>

          {/* Search */}
          <div className="w-full">
            <SearchBar />
          </div>
        </div>
      </motion.header>

      {query != "" ? (
        <>
          {" "}
          {/* Tabs */}
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="shrink-0 max-w-7xl mx-auto px-4 py-4"
          >
            <Tabs />
          </motion.section>
          {/* Scrollable Results */}
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-1 max-w-7xl mx-auto w-full px-4 pb-8 overflow-y-auto scrollbar-hide"
          >
            <ResultGrid />
          </motion.main>
        </>
      ) : (
        ""
      )}

      {/* Footer */}
      <footer className="shrink-0 text-center text-sm text-gray-500 py-4 border-t border-gray-800">
        Built with React, Redux, Framer Motion
      </footer>
    </div>
  );
};

export default HomePage;
