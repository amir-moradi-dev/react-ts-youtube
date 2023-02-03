import classes from './index.module.css'
import {useYoutube} from "../../hooks";
import {useContext, useEffect} from "react";
import {StateContext} from "../../store/StateContext";
import Loading from "../Loading";
import SelectedVideo from "../SelectedVideo";
import VideosList from "../VideosList";

function App() {
    const {searchKeyCtx:searchKey,selectedVideoCtx,setSelectedVideoCtx} = useContext(StateContext)
    const videosList = useYoutube(searchKey)

    useEffect(()=>{
        if(videosList)
            setSelectedVideoCtx(videosList[0])
    },[searchKey,videosList,setSelectedVideoCtx,selectedVideoCtx])

    return <>
        {!videosList && !selectedVideoCtx && <Loading className={classes.loading} message={'Loading Videos...'} />}
        {videosList && selectedVideoCtx && (
            <div className={classes.containerMain}>
                <section className={classes.containerLeft}>
                    <SelectedVideo video={selectedVideoCtx} />
                </section>
                <aside className={classes.containerRight}>
                    <VideosList videos={videosList}/>
                </aside>
            </div>
        )}

    </>
}

export default App