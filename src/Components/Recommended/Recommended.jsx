import React, { useEffect, useState } from "react";
import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";
import thumbnail9 from "../../assets/thumbnail9.png";
import { API_KEY } from "../../Data/Api";
import { Link } from "react-router-dom";

const Recommended = ({ categoryId }) => {
  const [recommendedData, setRecommendedData] = useState([]);

  const fetchRecommendedData = async () => {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}&maxResults=30`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setRecommendedData(data.items);
  };

  useEffect(() => {
    fetchRecommendedData();
  }, [categoryId]);

  return (
    <div className="recommended mt-[5rem]  flex flex-col gap-4">
      {recommendedData.map((data, i) => {
        return (
          <Link
            to={`/video/${data.snippet.categoryId}/${data.id}`}
            className="side-video-list flex gap-3"
            key={i}
          >
            <img
              src={data.snippet.thumbnails.high.url}
              className="w-[40%] rounded-md"
              alt="Thumbnail"
            />
            <div className="vid-info">
              <h1 className="font-bold">{data.snippet.title}</h1>
              <p>{data.snippet.channelTitle}</p>
              <p>{data.statistics.viewCount} views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;
