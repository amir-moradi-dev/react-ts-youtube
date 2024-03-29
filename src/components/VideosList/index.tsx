import classes from "./index.module.css";
import { YoutubeVideoItemsType } from "../../types";
import React from "react";
import Video from "../Video";

type VideosListPropsType = {
  videos: YoutubeVideoItemsType[];
};

function VideosList({ videos }: VideosListPropsType) {
  // this is an issue and does not catch properly it cant get div with
  // id player inside of iframe tag to insure video is there or not
  //useTestingYoutubeConnection();

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
