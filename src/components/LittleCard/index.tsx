import classes from './index.module.css'
import {ReactNode} from "react";

type LittleCardPropsType = {
    children: ReactNode
    className?: string
}
function LittleCard({children,className}:LittleCardPropsType) {
    const editedClassName = className ? className : ''

    return <>
        <div className={classes.littleCard +' '+ editedClassName}>
            {children}
        </div>
    </>
}

export default LittleCard