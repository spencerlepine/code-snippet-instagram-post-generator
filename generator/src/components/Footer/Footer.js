import React from "react"
import socials from "../../constants/socials.json"

import { ReactComponent as LinkedInIcon } from '../../assets/icons/linkedin.svg';
import { ReactComponent as GitHubIcon } from '../../assets/icons/github.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icons/twitter.svg';


const Footer = ({ themeColorSecondary }) => {
  const {
    blog,
    other,
    linkedin,
  } = socials

  const styles = {
    backgroundColor: `#${themeColorSecondary}`,
  }

  return (
    <div className="socialsFooter" style={styles}>
      {/* <div className="column is-inline">
        <LinkedInIcon />
        <h3 className="is-inline">{linkedin}</h3>
      </div> */}
      <div className="column is-inline">
        <h3 className="is-inline">{blog}</h3>
      </div>

      <div className="column">
        <GitHubIcon className="is-inline" />
        <TwitterIcon className="is-inline" />
        <h3 className="is-inline">{other}</h3>
      </div>
    </div>
  );
};

export default Footer;