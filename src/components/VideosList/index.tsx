import classes from "./index.module.css";
import { YoutubeVideoItemsType } from "../../types";
import React from "react";
import Video from "../Video";
import { useTestingYoutubeConnection } from "../../hooks";

type VideosListPropsType = {
  videos: YoutubeVideoItemsType[];
};

function VideosList({ videos }: VideosListPropsType) {
  //
  useTestingYoutubeConnection();

  return (
    <>
      {videos.map((video) => (
        <div className={classes.videoItem} key={video.id.videoId}>
          <Video video={video} />
        </div>
      ))}
    </>
  );
}

export default VideosList;
