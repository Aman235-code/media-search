/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { motion, AnimatePresence } from "framer-motion";
import { clearCollection } from "../redux/features/collectionSlice";
import { toast } from "react-toastify";

const CollectionPage = () => {
  const collection = useSelector((store) => store.collection.items);
  const dispatch = useDispatch();

  const clearCollections = () => {
    dispatch(clearCollection());
    toast.success("Collection Cleared");
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
      <button
        onClick={() => clearCollections()}
        className="bg-red-500 px-5 py-2 text-base font-medium rounded-lg"
      >
        Clear Collection
      </button>
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
