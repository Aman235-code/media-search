import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FiImage, FiVideo, FiZap } from "react-icons/fi";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  const tabs = [
    { id: "photos", label: "Photos", icon: FiImage },
    { id: "gif", label: "GIFs", icon: FiZap },
    { id: "videos", label: "Videos", icon: FiVideo },
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="flex gap-2 sm:gap-4 bg-gray-900/70 backdrop-blur-md border border-gray-800 rounded-2xl p-2 shadow-md">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <motion.button
              key={tab.id}
              onClick={() => dispatch(setActiveTab(tab.id))}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className={`relative flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-medium transition
                ${
                  isActive
                    ? "bg-purple-600 text-white shadow-lg"
                    : "text-gray-300 hover:bg-gray-800"
                }`}
            >
              <Icon className="text-lg" />
              {tab.label}

              {isActive && (
                <motion.span
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-xl bg-purple-600 -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
