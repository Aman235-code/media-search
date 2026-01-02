/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { query } = useSelector((store) => store.search);

  if (!query) return null;

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 py-4"
      >
        <Tabs />
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-4 pb-8"
      >
        <ResultGrid />
      </motion.section>
    </>
  );
};

export default HomePage;
