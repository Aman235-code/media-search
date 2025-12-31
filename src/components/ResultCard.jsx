import React from "react";

const ResultCard = ({ item }) => {
  console.log(item);
  return (
    <div className="w-[23vw] relative h-80 bg-white rounded">
      <div className="h-full ">
        {item.type === "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
          />
        ) : (
          ""
        )}
        {item.type === "video" ? (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            loop
            muted
            src={item.src}
          ></video>
        ) : (
          ""
        )}
        {item.type === "gif" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
          />
        ) : (
          ""
        )}
      </div>
      <div
        id="bottom"
        className=" w-full p-6 py-10 absolute bottom-0 text-white"
      >
        <h2 className="text-lg flex justify-between items-center font-semibold capitalize">{item.title}</h2>
        <button className="bg-red-600 text-white rounded px-3 py-2 font-medium">
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
