import axios, {AxiosError} from "axios";
import {ReturnTypeUseThrowAsyncError} from "../hooks";
const GOOGLE_KEY = import.meta.env.VITE_GOOGLE_KEY

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3/search",
    params:{ key:GOOGLE_KEY , part:"snippet", maxResult:"5"  }
})

export function AxiosYoutubeErrorHandling (error:AxiosError,ThrowAsyncError:ReturnTypeUseThrowAsyncError) {

    console.log(error)

    if(error.code === 'ERR_NETWORK'){
        console.error('You Are Probably Offline Check That Then Try Again ')
        ThrowAsyncError('You Are Probably Offline Check That Then Try Again... ')
    }

    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log('The request was made and the server responded with a status code');
        console.log('Error =>');
        console.log(error);
        console.log('Error Message =>');
        console.log(error.message);
        ThrowAsyncError(error.message)
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log('The request was made but no response was received');
        console.log('Error =>');
        console.log(error);
        console.log('Error Message =>');
        console.log(error.message);
        ThrowAsyncError(error.message)
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Something happened in setting up the request that triggered an Error');
        console.log('Error =>');
        console.log(error);
        console.log('Error Message =>');
        console.log(error.message);
        ThrowAsyncError(error.message)
    }
    console.log('error.config =>');
    console.log(error.config);
}