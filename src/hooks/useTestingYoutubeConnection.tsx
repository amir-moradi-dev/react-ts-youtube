import {useThrowAsyncError} from "./useThrowAsyncError";
import {useCallback, useEffect} from "react";

// this will wait for 30 second for fetching the videos from youtube if none was fetched it will throw an Error
function useTestingYoutubeConnection() {
    const throwAsyncError = useThrowAsyncError()
    const timer = useCallback( ()=> {
        return setTimeout(()=>{
            console.log(" ### IM RUNNING ### ")
            const res = document.getElementById('player')
            if(!res)
                throwAsyncError('Some Shitty Kiram To Kose Khare Rahbary Just Happened ... ')
        },30000)
    },[])

    useEffect(()=>{
        timer()
    },[])
}

export {useTestingYoutubeConnection}