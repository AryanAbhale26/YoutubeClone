import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_KEY, valueConverter } from "../../Data/Api";
import moment from "moment";
import { CgProfile } from "react-icons/cg";

const Feed = ({ category, sidebar }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const videoList_url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&videoCategoryId=${category}&maxResults=48&key=${API_KEY}`;

    await fetch(videoList_url)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div
      className={`grid gap-5 pt-12 transition-all duration-1000 ${
        sidebar ? "grid grid-cols-4" : "grid grid-cols-3"
      }`}
    >
      {data.map((video, index) => (
        <Link
          to={`video/${video.snippet.categoryId}/${video.id}`}
          key={index}
          className="block"
        >
          <div className="rounded-lg overflow-hidden shadow-lg transition-shadow duration-200 text-black flex flex-col w-full h-[20rem]">
            <img
              src={video.snippet.thumbnails.medium.url}
              className="w-full h-48 object-cover"
              alt={video.snippet.title}
              style={{ objectFit: "cover" }}
            />
            <div className="p-4 flex-grow">
              <div className="flex flex-col h-full">
                <h3 className="text-black font-bold leading-tight overflow-hidden line-clamp-2 mb-2">
                  {video.snippet.title}
                </h3>
                <p className="font-semibold flex items-center gap-2">
                  <CgProfile />
                  {video.snippet.channelTitle}
                </p>
                <div className="flex flex-row justify-between items-center mt-auto">
                  <p className="text-black text-sm">
                    {valueConverter(video.statistics.viewCount)} views
                  </p>
                  <p className="text-sm">
                    {moment(video.snippet.publishedAt).fromNow()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Feed;
