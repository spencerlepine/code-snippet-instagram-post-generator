

import React, { useRef, useEffect } from 'react';
import useHighlightOptions from './SyntaxHighlight/useHighlightOptions';
import SyntaxHighlight from './SyntaxHighlight/SyntaxHighlight';
import LanguageIcon from './LanguageIcon/LanguageIcon';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import logo from '../assets/images/logo.png';

import ColorScheme from 'color-scheme';
import './App.css';

// import html2canvas from "html2canvas";

// const exportAsImage = async (el, imageFileName) => {
//   const canvas = await html2canvas(el);
//   const image = canvas.toDataURL("image/png", 1.0);
//   // download the image
//   downloadImage(image, imageFileName)
// };

// const downloadImage = (blob, fileName) => {
//   const fakeLink = window.document.createElement("a");
//   fakeLink.style = "display:none;";
//   fakeLink.download = fileName;

//   fakeLink.href = blob;

//   document.body.appendChild(fakeLink);
//   fakeLink.click();
//   document.body.removeChild(fakeLink);

//   fakeLink.remove();
// };

// import Socials from './Socials/Socials';
// import config from '../config';

const generateColorTheme = () => {
  const scm = new ColorScheme;
  const hue = Math.floor(Math.random() * (100 - 0 + 1) + 0)
  scm.from_hue(hue)
    .scheme('triade')
    .distance(0.1)
    .add_complement(false)
    .variation('pastel')
    .web_safe(true);
  const colors = scm.colors();
  const [themeMainPrimary, , , themeColorSecondary] = colors
  return [themeMainPrimary, themeColorSecondary]
}

const App = ({
  metadata,
  code
}) => {
  const {
    name,
    description,
    hashtags,
    language,
    slug,
    header: { supertitle, title },
    image_file,
    date
  } = metadata

  const snippetRef = useRef();

  // useEffect(() => {
  //   if (snippetRef.current) {
  //     exportAsImage(snippetRef.current, "slug")
  //   }
  // }, [snippetRef])

  const highlighterOptions = useHighlightOptions({ language });

  const shouldRenderHeader = (title || supertitle)

  const [themeMainPrimary, themeColorSecondary] = generateColorTheme()
  const styles = {
    backgroundColor: `#${themeMainPrimary}`,
  }

  return (
    <div className="App">
      <div className="tidbit" ref={snippetRef} style={styles}>
        <LanguageIcon language={language} />
        {shouldRenderHeader && (
          <Header
            supertitle={supertitle}
            title={title}
            logo={logo}
          />
        )}
        <SyntaxHighlight {...highlighterOptions} codeInput={code} logo={shouldRenderHeader ? '' : logo} />
        <Footer themeColorSecondary={themeColorSecondary} />
      </div>
    </div>
  );
};

export default App;