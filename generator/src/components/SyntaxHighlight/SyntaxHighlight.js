const SyntaxHighlight = (props) => {
  const {
    languageSelected,
    codeInput,
    SyntaxHighlighter,
    style,
  } = props;

  return (
    <div className="syntaxHighlighter">
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