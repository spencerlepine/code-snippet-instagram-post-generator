import React from "react"
import socials from "../../constants/socials.json"

const SyntaxHighlight = (props) => {
  const {
    languageSelected,
    codeInput,
    SyntaxHighlighter,
    style,
    logo,
  } = props;

  const {
    blog
  } = socials

  return (
    <div className="syntaxHighlighter">
      {logo && <img className="boxLogo" src={logo}></img>}

      <SyntaxHighlighter
        className="codeHighlight"
        language={languageSelected}
        style={{ ...style, ...style }}
        showLineNumbers={false}
      >
        {codeInput}
      </SyntaxHighlighter>
    </div>
  );
};

export default SyntaxHighlight;