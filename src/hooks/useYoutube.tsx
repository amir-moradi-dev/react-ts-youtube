import { useEffect, useState } from "react";
import { AxiosError, AxiosResponse } from "axios";
import youtube, { AxiosYoutubeErrorHandling } from "../api/youtube";
import { YoutubeResponseType } from "../types";
import { VideosListType } from "../types";
import { useThrowAsyncError } from "./useThrowAsyncError";

function useYoutube(searchKey: string) {
  const [videosList, setVideosList] = useState<VideosListType>(null);
  const ThrowAsyncError = useThrowAsyncError();

  function handleSuccess(response: AxiosResponse<YoutubeResponseType>) {
    setVideosList(response.data.items);
    console.log(response);
  }

  useEffect(() => {
    if (searchKey)
      youtube({ params: { q: searchKey } })
        .then(handleSuccess)
        .catch((e: AxiosError) =>
          AxiosYoutubeErrorHandling(e, ThrowAsyncError)
        );
  }, [searchKey]);

  return videosList;
}

export { useYoutube };
