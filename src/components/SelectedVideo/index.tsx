import classes from './index.module.css'
import {YoutubeVideoItemsType} from "../../types";
import TitleIcon from '@mui/icons-material/Title';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import DescriptionIcon from '@mui/icons-material/Description';
import Video from "../Video";
import LittleCard from "../LittleCard";

type SelectedVideoPropsType = {
    video:YoutubeVideoItemsType
}

function SelectedVideo({video}:SelectedVideoPropsType) {
    return <>
        <div className={classes.selectedVideoContainer}>

            <Video video={video} />

            <div className={classes.videoDetailsContainer}>
                <LittleCard>
                    <TitleIcon style={{color:'darkgoldenrod'}}/>
                    <h2>{video.snippet.title}</h2>
                </LittleCard>
                <LittleCard>
                    <VideoCameraFrontIcon style={{color:'darkgoldenrod'}}/>
                    <h3>{video.snippet.channelTitle}</h3>
                </LittleCard>
                <LittleCard>
                    <DescriptionIcon style={{color:'darkgoldenrod'}} />
                    <h3>{video.snippet.description}</h3>
                </LittleCard>
            </div>

        </div>

    </>
}


export default SelectedVideo