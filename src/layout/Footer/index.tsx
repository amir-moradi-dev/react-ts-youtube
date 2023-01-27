import classes from './index.module.css'
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
    return <>
        <footer className={classes.footer}>
            <CopyrightIcon style={{paddingRight:'3px'}} />
            <p>React-Ts-Youtube All Rights Received</p>
        </footer>
    </>
}

export default Footer