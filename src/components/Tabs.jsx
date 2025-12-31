import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "gif", "videos"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);
  return (
    <div className="flex gap-5 p-10">
      {tabs.map(function (elem, idx) {
        return (
          <button
            className={`${
              activeTab === elem ? "bg-blue-700" : "bg-gray-600"
            } transition px-5 py-2 rounded cursor-pointer active:scale-95 uppercase`}
            key={idx}
            onClick={() => {
              dispatch(setActiveTab(elem));
            }}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
