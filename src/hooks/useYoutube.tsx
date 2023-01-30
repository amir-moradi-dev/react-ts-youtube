import {useEffect, useState} from "react";
import {AxiosResponse} from "axios";
import youtube, {AxiosYoutubeErrorHandling} from "../api/youtube";
import {YoutubeResponseType} from "../types";
import {VideoListsType} from "../types";

function useYoutube(searchKey:string) {
    const [videoLists,setVideoLists] = useState<VideoListsType>(null)

    function handleSuccess(response:AxiosResponse<YoutubeResponseType>) {
        setVideoLists(response.data.items)
        console.log(response)
    }

    useEffect(()=>{
        if(searchKey)
           youtube({params:{ q:searchKey }})
               .then(handleSuccess)
               .catch(AxiosYoutubeErrorHandling)

    },[searchKey])

    return videoLists
}

export {useYoutube}