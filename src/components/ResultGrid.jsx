/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { FiAlertCircle, FiLoader } from "react-icons/fi";

import { fetchPhotos, fetchVideos, fetchGif } from "../api/mediaApi";
import {
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, results, loading, activeTab, error } = useSelector(
    (store) => store.search
  );

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        dispatch(setLoading());
        let data = [];

        if (activeTab === "photos") {
          const res = await fetchPhotos(query);
          data = res.results.map((item) => ({
            id: item.id,
            type: "photo",
            thumbnail: item.urls.small,
            src: item.urls.full,
            title: item.alt_description || "Photo",
            url: item.links.html,
          }));
        }

        if (activeTab === "videos") {
          const res = await fetchVideos(query);
          data = res.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "Video",
            thumbnail: item.image,
            src: item.video_files[0].link,
            url: item.url,
          }));
        }

        if (activeTab === "gif") {
          const res = await fetchGif(query);
          data = res.results.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title || "GIF",
            thumbnail: item.media_formats.tinygif.url,
            src: item.media_formats.gif.url,
            url: item.url,
          }));
        }

        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message || "Something went wrong"));
      }
    };

    getData();
  }, [query, activeTab, dispatch]);

  /* Error State */
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-400">
        <FiAlertCircle className="text-4xl mb-3 text-red-500" />
        <p className="text-lg font-medium">Failed to load results</p>
        <p className="text-sm">{error}</p>
      </div>
    );
  }

  /* Loading State */
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <FiLoader className="text-4xl animate-spin text-purple-500 mb-4" />
        <p className="text-gray-400">Searching {activeTab}...</p>
      </div>
    );
  }

  /* Empty State */
  if (!results.length) {
    return (
      <div className="flex items-center justify-center py-20 text-gray-500">
        No results found
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {results.map((item, index) => (
          <ResultCard key={index} item={item} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default ResultGrid;
