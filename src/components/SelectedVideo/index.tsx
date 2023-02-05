import classes from "./index.module.css";
import { YoutubeVideoItemsType } from "../../types";
import TitleIcon from "@mui/icons-material/Title";
import Video from "../Video";
import LittleCard from "../LittleCard";

type SelectedVideoPropsType = {
  video: YoutubeVideoItemsType;
};

function SelectedVideo({ video }: SelectedVideoPropsType) {
  return (
    <>
      <div className={classes.selectedVideoContainer}>
        <Video video={video} />

        <div className={classes.videoDetailsContainer}>
          <LittleCard className={classes.cardTitle}>
            <TitleIcon style={{ color: "darkgoldenrod" }} />
            <h2>{video.snippet.title}</h2>
          </LittleCard>
        </div>
      </div>
    </>
  );
}

export default SelectedVideo;
