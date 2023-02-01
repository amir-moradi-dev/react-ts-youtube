import classes from './index.module.css'
import {ReactNode} from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({children}:{children:ReactNode}) {
    return <>
        <Header />
        <main className={classes.contentContainer}>
            {children}
        </main>
        <Footer />
    </>
}

export default Layout