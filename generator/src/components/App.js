

import React, { useRef, useEffect } from 'react';
import useHighlightOptions from './SyntaxHighlight/useHighlightOptions';
import SyntaxHighlight from './SyntaxHighlight/SyntaxHighlight';

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
import './App.css';

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

  return (
    <div className="App">
      <div className="tidbit" ref={snippetRef}>
        <SyntaxHighlight {...highlighterOptions} codeInput={code} />
      </div>
    </div>
  );
};

export default App;