import React from "react"
import Icon from '../../assets/icons'

const LanguageIcon = ({ language }) => {
  return (
    <div className="languageIcon">
      <Icon language={language} />
    </div>
  );
};

export default LanguageIcon;