/* eslint-disable no-unused-vars */
import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { BiCollection } from "react-icons/bi";
import SearchBar from "../components/SearchBar";

const AppLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen w-full flex flex-col bg-linear-to-br from-gray-900 via-gray-950 to-black text-white">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            {/* Logo / Title */}
            <Link to="/" className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-500/10">
                <FiSearch className="text-purple-400 text-xl" />
              </div>
              <h1 className="text-2xl font-semibold tracking-tight text-gray-100">
                Media Search
              </h1>
            </Link>

            {/* Nav */}
            <Link
              to="/collection"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 text-sm font-medium text-gray-200 hover:bg-gray-800 hover:border-gray-600 transition"
            >
              <BiCollection className="text-lg text-purple-400" />
              Collection
            </Link>
          </div>

          {/* Search only on home */}
          {isHome && <SearchBar />}
        </div>
      </motion.header>

      {/* Page content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-4 border-t border-gray-800">
        Built with React, Redux, Framer Motion by Aman
      </footer>
    </div>
  );
};

export default AppLayout;
