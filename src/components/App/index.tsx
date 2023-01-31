import classes from './index.module.css'
import {useYoutube} from "../../hooks";
import {useContext} from "react";
import {StateContext} from "../../store/StateContext";
import Loading from "../Loading";
import VideoDetails from "../VideoDetails";

function App() {
    const {searchKeyCtx:searchKey} = useContext(StateContext)
    const videosList = useYoutube(searchKey)

    return <>
        {!videosList && <Loading className={classes.loading} message={'Loading Videos...'} />}
        {videosList && (
            <div className={classes.containerMain}>
                <div className={classes.containerLeft}>
                    <VideoDetails video={videosList[0]} />
                </div>
                <div className={classes.containerRight}>
                    {/*<VideosList />*/}
                </div>
            </div>
        )}

    </>
}

export default App