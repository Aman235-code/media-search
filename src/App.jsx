import React from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import SearchBar from "./components/SearchBar";
import Tabs from "./components/Tabs";
import ResultGrid from "./components/ResultGrid";

const App = () => {
  return (
    <div className="h-screen w-full flex flex-col bg-linear-to-br from-gray-900 via-gray-950 to-black text-white">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="shrink-0 sticky top-0 z-50 bg-gray-900/70 backdrop-blur border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <FiSearch className="text-purple-500 text-2xl" />
            <h1 className="text-2xl font-bold tracking-tight">Media Search</h1>
          </div>

          <SearchBar />
        </div>
      </motion.header>

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

      {/* Footer */}
      <footer className="shrink-0 text-center text-sm text-gray-500 py-4 border-t border-gray-800">
        Built with React, Redux, Framer Motion
      </footer>
    </div>
  );
};

export default App;
