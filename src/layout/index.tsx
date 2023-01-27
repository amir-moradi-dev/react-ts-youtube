import classes from './index.module.css'
import {ReactNode} from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({children}:{children:ReactNode}) {
    return <>
        <Header />
        <div className={classes.contentContainer}>
            {children}
        </div>
        <Footer />
    </>
}

export default Layout