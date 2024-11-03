import React from "react";
import PlayVideo from "../../Components/PlayVideo/PlayVideo";
import Recommended from "../../Components/Recommended/Recommended";
import { useParams } from "react-router-dom";

const Video = () => {
  const { videoId, categoryId } = useParams();
  return (
    <div className="flex flex-row h-[100vh]">
      <div className="w-[100%] h-full">
        <PlayVideo videoId={videoId} />
      </div>
      <div className="w-[40%] h-full ">
        <Recommended categoryId={categoryId} />
      </div>
    </div>
  );
};

export default Video;
