import "./styles.css";
import { ReactComponent as GithubIcon } from "assets/img/github.svg";

const Navbar = (): JSX.Element => {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a
            href="https://github.com/pclaudio"
            target="_blank"
            rel="noreferrer"
          >
            <div className="dsmovie-contact-container">
              <GithubIcon />
              <p className="dsmovie-contact-link">/pclaudio</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
