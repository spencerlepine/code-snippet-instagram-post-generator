import React, { useState, useEffect } from 'react';

// below works with ".../dist/esm/languages/prism"
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import * as languageImports from 'react-syntax-highlighter/dist/esm/languages/prism';
import * as themeImports from 'react-syntax-highlighter/dist/esm/styles/prism';

// below works with ".../dist/esm/languages/hljs"
// import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// import * as languageImports from 'react-syntax-highlighter/dist/esm/languages/hljs';

const useHighlightOptions = ({ language }) => {
  const languageSelected = language
  const themeSelected = 'a11yDark'

  SyntaxHighlighter.registerLanguage(
    languageSelected,
    languageImports[languageSelected],
  );

  return {
    languageSelected,
    themeSelected,
    themeImports,
    languageImports,
    SyntaxHighlighter,
    style: themeImports[themeSelected],
  };
};

export default useHighlightOptions;