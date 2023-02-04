import classes from "./index.module.css";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchForm from "../../components/SearchForm";

function Header() {
  return (
    <>
      <header className={"header"}>
        <nav className={classes.navContainer}>
          <div className={classes.navLeft}>
            <span className={classes.navLeftSpan}>
              <YouTubeIcon />
              <h2>Youtube</h2>
            </span>
          </div>
          <div className={classes.navRight}>
            <SearchForm />
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
