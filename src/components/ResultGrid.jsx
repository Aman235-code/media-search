/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import { fetchPhotos, fetchVideos, fetchGif } from "../api/mediaApi";
import {
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, results, loading, activeTab, error } = useSelector(
    (store) => store.search
  );

  useEffect(
    function () {
      if (!query) return;
      const getData = async () => {
        try {
          dispatch(setLoading());
          let data = [];
          if (activeTab === "photos") {
            let res = await fetchPhotos(query);

            data = res.results.map((item) => ({
              id: item.id,
              type: "photo",
              thumbnail: item.urls.small,
              src: item.urls.full,
              title: item.alt_description,
              url: item.links.html,
            }));
          }
          if (activeTab === "videos") {
            let res = await fetchVideos(query);

            data = res.videos.map((item) => ({
              id: item.id,
              type: "video",
              title: item.user.name || "video",
              thumbnail: item.image,
              src: item.video_files[0].link,
              url: item.url,
            }));
          }
          if (activeTab === "gif") {
            let res = await fetchGif(query);
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
        } catch (error) {
          dispatch(setError(error.message));
        }
      };

      getData();
    },
    [query, activeTab]
  );

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading....</h1>;

  return (
    <div className="flex flex-wrap w-full justify-between gap-5 overflow-auto px-5">
      {results.map((item, idx) => {
        return (
          <div key={idx}>
            <a href={item.url} target="_blank">
              <ResultCard item={item} />
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
