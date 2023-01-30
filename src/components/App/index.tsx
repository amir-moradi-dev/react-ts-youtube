import {useYoutube} from "../../hooks";
import {useContext} from "react";
import {StateContext} from "../../store/StateContext";

function App() {
    const {searchKeyCtx:searchKey} = useContext(StateContext)
    const movieList = useYoutube(searchKey)

    return <>
        <h1>Youtube Movies</h1>
    </>
}

export default App