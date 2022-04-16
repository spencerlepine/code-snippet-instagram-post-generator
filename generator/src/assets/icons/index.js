import React from "react"
import { ReactComponent as CIcon } from './c.svg';
import { ReactComponent as CSharpIcon } from './csharp.svg';
import { ReactComponent as CssIcon } from './css.svg';
import { ReactComponent as HtmlIcon } from './html.svg';
import { ReactComponent as JavaIcon } from './java.svg';
import { ReactComponent as JavascriptIcon } from './javascript.svg';
import { ReactComponent as PythonIcon } from './python.svg';
import { ReactComponent as RubyIcon } from './ruby.svg';
import { ReactComponent as GoIcon } from './go.svg';

const Icon = ({ language }) => {
  if (language === 'go') {
    return <GoIcon />
  } else if (language === 'go') {
    return <GoIcon />
  } else if (language === 'c') {
    return <CIcon />
  } else if (language === 'csharp') {
    return <CSharpIcon />
  } else if (language === 'css') {
    return <CssIcon />
  } else if (language === 'html') {
    return <HtmlIcon />
  } else if (language === 'java') {
    return <JavaIcon />
  } else if (language === 'javascript') {
    return <JavascriptIcon />
  } else if (language === 'python') {
    return <PythonIcon />
  } else if (language === 'ruby') {
    return <RubyIcon />
  }

  return <></>
}

export default Icon