import React, { useEffect, useState } from "react";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import { API_KEY, valueConverter } from "../../Data/Api";
import moment from "moment";

function PlayVideo({ videoId }) {
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState({ items: [] });

  const fetchVideoById = async (videoId) => {
    const videoUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;

    try {
      const res = await fetch(videoUrl);
      if (!res.ok) {
        throw new Error("Failed to fetch video");
      }
      const data = await res.json();
      setApiData(data);
    } catch (error) {
      console.error(error);
      setApiData(null);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchVideoById(videoId);
  }, [videoId]);

  const channelId = apiData?.items?.[0]?.snippet?.channelId;

  const fetchChannel = async () => {
    if (!channelId) return;

    const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${API_KEY}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch channel data");
      }
      const data = await response.json();

      setChannelData(data);
    } catch (error) {
      console.error(error);
      setChannelData(null);
    }
  };

  useEffect(() => {
    fetchChannel();
  }, [channelId]);

  const fetchComments = async () => {
    const url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      setCommentData(data);
    } catch (error) {
      console.error(error);
      setCommentData({ items: [] });
    }
  };

  useEffect(() => {
    fetchComments();
  }, [videoId]);

  return (
    <div className="text-black ml-[4rem] mt-[5rem] w-[90%]">
      <div className="rounded-md overflow-hidden">
        <iframe
          width="100%"
          height="550"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <h3 className="font-sans text-2xl font-bold leading-tight mt-3">
        {apiData?.items?.[0]?.snippet?.title}
      </h3>

      <div className="Publisher flex justify-between py-4">
        <div className="Channel_credentials flex items-center gap-3">
          <img
            src={channelData?.items?.[0]?.snippet?.thumbnails?.high?.url}
            className="h-14 rounded-full"
            alt="Channel"
          />
          <div className="flex flex-col px-3">
            <p className="text-xl">
              {apiData?.items?.[0]?.snippet?.channelTitle}
            </p>

            <p className="text-sm text-black">
              {valueConverter(
                channelData?.items?.[0]?.statistics?.subscriberCount
              )}
            </p>
          </div>
          <button className="bg-grayCustom px-6 py-0 rounded-3xl h-10">
            Join
          </button>
          <button className="bg-black border border-white px-4 py-0 rounded-3xl h-10 text-white hover:text-black hover:bg-white hover:border-black">
            Subscribe
          </button>
        </div>

        <div className="flex flex-row gap-5">
          <span className="flex items-center gap-1">
            <img className="h-7 w-7" src={like} alt="like" />
            <span>
              {valueConverter(apiData?.items?.[0]?.statistics?.likeCount)}
            </span>
          </span>
          <span className="flex items-center gap-1">
            <img className="h-7 w-7" src={dislike} alt="dislike" />
          </span>
          <span className="flex items-center gap-1">
            <img className="h-7 w-7" src={share} alt="share" />
            <span>Share</span>
          </span>
          <span className="flex items-center gap-1">
            <img className="h-7 w-7" src={save} alt="save" />
            <span>Save</span>
          </span>
        </div>
      </div>

      <div className="Description mt-4 border-black rounded-md bg-grayCustom px-3 pb-4">
        <div className="flex justify-between gap-4 py-3">
          <p className="flex">
            {valueConverter(apiData?.items?.[0]?.statistics?.viewCount)}
          </p>
          <p className="text-center">
            {moment(apiData?.items?.[0]?.snippet?.publishedAt).fromNow()}
          </p>
          <span className="flex-1">
            {apiData?.items?.[0]?.snippet?.tags?.map((tag, index) => (
              <span
                key={index}
                className="text-blue-500 hover:underline text-sm"
              >
                #{tag}{" "}
              </span>
            ))}
          </span>
        </div>

        <p>{apiData?.items?.[0]?.snippet?.description?.slice(0, 250)}</p>
      </div>

      <div className="py-4">
        <hr />
      </div>
      <div className="Comments Section">
        <span className="flex gap-1">
          {valueConverter(apiData?.items?.[0]?.statistics?.commentCount)}
          <p>Comments</p>
        </span>

        {commentData.items.length > 0 ? (
          commentData.items.map((element, index) => (
            <div
              key={index}
              className="Comment mt-4 flex flex-row gap-3 items-start"
            >
              <div className="comment_image w-[8%]">
                <img
                  src={
                    element.snippet.topLevelComment.snippet
                      .authorProfileImageUrl
                  }
                  className="cursor-pointer h-12 w-12 rounded-full"
                  alt="User Profile"
                />
              </div>
              <div className="w-full">
                <h1 className="font-bold">
                  <span className="text-gray-500">
                    {element.snippet.topLevelComment.snippet.authorDisplayName}
                  </span>
                </h1>
                <p>{element.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="Comment-action flex py-2 items-center gap-2">
                  <img
                    src={like}
                    className="h-5 w-5 cursor-pointer"
                    alt="like"
                  />
                  <span>
                    {element.snippet.topLevelComment.snippet.likeCount}
                  </span>
                  <img
                    src={dislike}
                    className="h-5 w-5 cursor-pointer"
                    alt="dislike"
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No comments available.</p>
        )}
      </div>
    </div>
  );
}

export default PlayVideo;
