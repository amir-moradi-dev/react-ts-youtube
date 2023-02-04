import React, { createContext, ReactNode, useState } from "react";
import { YoutubeVideoItemsType } from "../types";

type StateContextType = {
  searchKeyCtx: string;
  setSearchKeyCtx: React.Dispatch<React.SetStateAction<string>>;
  selectedVideoCtx: YoutubeVideoItemsType | null;
  setSelectedVideoCtx: React.Dispatch<
    React.SetStateAction<YoutubeVideoItemsType | null>
  >;
};

const initialState: StateContextType = {
  searchKeyCtx: "",
  setSearchKeyCtx: () => {},
  selectedVideoCtx: null,
  setSelectedVideoCtx: () => {},
};

export const StateContext = createContext<StateContextType>(initialState);

function StateContextProvider({ children }: { children: ReactNode }) {
  const [searchKeyCtx, setSearchKeyCtx] = useState<string>("tommy shelby");
  const [selectedVideoCtx, setSelectedVideoCtx] =
    useState<YoutubeVideoItemsType | null>(null);

  const state: StateContextType = {
    searchKeyCtx,
    setSearchKeyCtx,
    selectedVideoCtx,
    setSelectedVideoCtx,
  };

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
}

export default StateContextProvider;
