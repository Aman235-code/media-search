import React from "react";
import { motion } from "framer-motion";
import { FiHeart, FiPlay } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

const ResultCard = ({ item }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.25 }}
      className="relative w-full h-80 rounded-2xl overflow-hidden bg-gray-900 shadow-lg"
    >
      {/* Media */}
      <div className="h-full w-full">
        {inView && item.type === "photo" && (
          <img
            src={item.src}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500"
          />
        )}

        {inView && item.type === "gif" && (
          <img
            src={item.src}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500"
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

        {/* Placeholder while loading */}
        {!inView && (
          <div className="h-full w-full bg-gray-800 animate-pulse" />
        )}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Bottom content */}
      <div className="absolute bottom-0 w-full p-4 flex justify-between items-end text-white">
        <h2 className="text-sm font-medium line-clamp-2">
          {item.title}
        </h2>

        <button className="bg-red-600 active:scale-95 hover:bg-red-700 px-3 py-2 rounded-xl text-sm flex items-center gap-1">
          <FiHeart />
          Save
        </button>
      </div>
    </motion.div>
  );
};

export default ResultCard;
