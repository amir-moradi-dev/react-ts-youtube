import axios from "axios";
const GOOGLE_KEY = import.meta.env.VITE_GOOGLE_KEY

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3"
})