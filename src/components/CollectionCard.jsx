/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { FiHeart, FiPlay } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { removeCollection } from "../redux/features/collectionSlice";

const CollectionCard = ({ item }) => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const dispatch = useDispatch();
  const removeFromCollection = (item) => {
    dispatch(removeCollection(item.id));
    toast.error("Removed From Collection");
  };

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group relative w-full h-80 rounded-2xl overflow-hidden bg-gray-900 shadow-md hover:shadow-xl"
    >
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full w-full"
      >
        {/* Media */}
        <div className="h-full w-full">
          {inView && (item.type === "photo" || item.type === "gif") && (
            <img
              src={item.src}
              alt={item.title}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
          )}

          {inView && item.type === "video" && (
            <>
              <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <FiPlay className="text-white text-5xl opacity-70" />
              </div>
            </>
          )}

          {!inView && (
            <div className="h-full w-full bg-gray-800 animate-pulse" />
          )}
        </div>
      </a>

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 w-full p-4 flex items-end justify-between gap-3">
        <h2 className="text-sm font-medium text-white leading-snug line-clamp-2">
          {item.title}
        </h2>

        <button
          onClick={() => {
            removeFromCollection(item);
          }}
          className="shrink-0 flex items-center gap-1 rounded-xl bg-white/10 px-3 py-2 text-sm text-white backdrop-blur hover:bg-red-600 transition active:scale-95"
        >
          {/* <FiHeart className="text-base" /> */}
          Remove
        </button>
      </div>
    </motion.div>
  );
};

export default CollectionCard;
