import classes from './index.module.css'
import {ReactNode} from "react";
import Header from "./Header";

function Layout({children}:{children:ReactNode}) {
    return <>
        <Header />
        {children}
        {/*<Footer />*/}
    </>
}

export default Layout