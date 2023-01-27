import React, {createContext, ReactNode, useState} from "react";

type StateContextType = {
    searchKeyCtx: string
    setSearchKeyCtx: React.Dispatch<React.SetStateAction<string>>
}

const initialState = {
    searchKeyCtx: '',
    setSearchKeyCtx:()=>{}
}

export const StateContext = createContext<StateContextType>(initialState)


function StateContextProvider({children}:{children:ReactNode}) {

    const [searchKeyCtx,setSearchKeyCtx] = useState<string>('')

    const state:StateContextType = {
        searchKeyCtx, setSearchKeyCtx
    }

    return <StateContext.Provider value={state}>
        {children}
    </StateContext.Provider>
}