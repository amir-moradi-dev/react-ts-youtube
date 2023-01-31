import classes from './index.module.css'
import {YoutubeVideoItemsType} from "../../types";

type VideoDetailsType = {
    video:YoutubeVideoItemsType
}

function VideoDetails({video}:VideoDetailsType) {

    return <>
        <iframe
            className={classes.videoIframe}
            frameBorder={'0'}
            height={'100%'}
            width={'100%'}
            title={'Video Player'}
            src={'https://www.youtube.com/embed/' + video.id.videoId}
        />
    </>
}

export default VideoDetails