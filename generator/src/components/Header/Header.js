import React from "react"
import socials from "../../constants/socials.json"

const Header = (props) => {
  const {
    supertitle,
    title,
    logo
  } = props

  return (
    <div className="snippetHeader">
      <img src={logo} className="logo"></img>

      <div className="ml-6 is-inline headerTitle">
        <h5 className="pt-2">{supertitle}</h5>
        <h2 className={`${supertitle ? 'pt-3' : ''} has-text-weight-semibold	`}>{title}</h2>
      </div>
    </div>
  );
};

export default Header;