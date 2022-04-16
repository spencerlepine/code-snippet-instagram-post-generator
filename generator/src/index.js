import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import "bulma/css/bulma.css"

import metadata from './tmp/metadata.json';
import code from './tmp/snippet.js';
const { language } = metadata

const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render
root.render((
  <App metadata={metadata}
    code={code}
    language={language}
  />
));