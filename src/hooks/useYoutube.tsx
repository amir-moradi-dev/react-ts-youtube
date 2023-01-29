import {useContext, useEffect, useState} from "react";
import {StateContext} from "../store/StateContext";
import {AxiosResponse} from "axios";
import youtube, {AxiosYoutubeErrorHandling} from "../api/youtube";
import {YoutubeResponseType} from "../types";
import {VideoListsType} from "../types";

function useYoutube() {
    // Dependencies
    const {searchKeyCtx} = useContext(StateContext)
    const [videoLists,setVideoLists] = useState<VideoListsType>(null)

    function handleSuccess(response:AxiosResponse<YoutubeResponseType>) {
        setVideoLists(response.data.items)
        console.log(response)
    }

    useEffect(()=>{
        if(searchKeyCtx)
           youtube({params:{ q:searchKeyCtx }})
               .then(handleSuccess)
               .catch(AxiosYoutubeErrorHandling)

    },[searchKeyCtx])

    return videoLists
}

export {useYoutube}