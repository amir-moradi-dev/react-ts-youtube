import axios, {AxiosError} from "axios";
const GOOGLE_KEY = import.meta.env.VITE_GOOGLE_KEY

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3/search",
    params:{ key:GOOGLE_KEY , part:"snippet", maxResult:"5"  }
})

export function AxiosYoutubeErrorHandling (error:AxiosError) {

    console.log(error)

    if(error.code === 'ERR_NETWORK')
        console.error('You Are Probably Offline Check That Then Try Again ')

    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
    }
    console.log(error.config);
}