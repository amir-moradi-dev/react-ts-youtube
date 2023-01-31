import React from "react";
import classes from './index.module.css'
import AutorenewIcon from "@mui/icons-material/Autorenew";

type LoadingPropsType = {
    message: string,
    className?: string
}

function Loading({message,className}:LoadingPropsType) {

    const classNameEdited = className || ''
    return <>
        <div className={classes.loadingContainer + ' ' + classNameEdited}>
            <h4>{message}</h4>
            <AutorenewIcon className={classes.loadingIconSpin}/>
        </div>
    </>
}

export default Loading