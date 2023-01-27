import classes from './index.module.css'
import {useContext, useEffect} from "react";
import {StateContext} from "../../store/StateContext";
import youtube from "../../api/youtube";

function App() {

    const {searchKeyCtx} = useContext(StateContext)

    useEffect(()=>{
        if(searchKeyCtx)
        (async ()=>{
            try {
                const response = await youtube.get('search',{
                    params:{ part:"snippet", maxResult:"5", q:searchKeyCtx }
                })
                console.log(response)
            }
            catch (e) {
                throw new Error('Some Shit Happened')
            }

        })()
    },[searchKeyCtx])

    return <>
        <h1>Youtube Movies</h1>
    </>
}

export default App