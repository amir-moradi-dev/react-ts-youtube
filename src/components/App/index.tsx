import {useYoutube} from "../../hooks";
import {YoutubeVideoItemsType} from "../../types";

function App() {

    const movieList = useYoutube()

    console.log('movieList => ')
    if(movieList)
        movieList.map( (video:YoutubeVideoItemsType) => {
            console.log('video=>')
            console.log(video.snippet.title)
        })

    return <>
        <h1>Youtube Movies</h1>
    </>
}

export default App