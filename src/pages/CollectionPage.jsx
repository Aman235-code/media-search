/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { motion, AnimatePresence } from "framer-motion";
import { clearCollection } from "../redux/features/collectionSlice";
import { toast } from "react-toastify";
import { FiTrash2 } from "react-icons/fi";

const CollectionPage = () => {
  const collection = useSelector((store) => store.collection.items);
  const dispatch = useDispatch();

  const clearCollections = () => {
    dispatch(clearCollection());
    toast.success("Collection cleared");
  };

  if (!collection.length) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-gray-400">
        <p className="text-lg">
          Your collection is empty. Save something you like ❤️
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="max-w-7xl mx-auto px-4 py-10"
    >
      {/* Page header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-semibold text-gray-100">Your Collection</h2>

        <button
          onClick={clearCollections}
          className="flex items-center gap-2 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 hover:bg-red-500 hover:text-white transition active:scale-95"
        >
          <FiTrash2 className="text-base" />
          Clear
        </button>
      </div>

      {/* Grid */}
      <AnimatePresence>
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {collection.map((item, idx) => (
            <motion.div
              key={item.id || idx}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
            >
              <CollectionCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default CollectionPage;
