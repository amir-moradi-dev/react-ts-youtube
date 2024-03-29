import classes from "./index.module.css";
import { YoutubeVideoItemsType } from "../../types";
import { useState } from "react";
import Loading from "../Loading";

type VideoPropsType = {
  video: YoutubeVideoItemsType;
};

function Video({ video }: VideoPropsType) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <Loading
          className={classes.loading}
          message={"Video Is Not Ready Yet..."}
        />
      )}
      <iframe
        className={classes.videoIframe + "  " + (!loading && classes.show)}
        frameBorder={"0"}
        height={"100%"}
        width={"100%"}
        title={"Video Player"}
        allowFullScreen={true}
        onLoad={() => setLoading(false)}
        src={"https://www.youtube.com/embed/" + video.id.videoId}
      />
    </>
  );
}

export default Video;
