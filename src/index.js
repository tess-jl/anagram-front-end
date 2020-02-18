import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { AnagramsProvider } from './hooks/anagrams';

render(
  <AnagramsProvider>
    <App />
  </AnagramsProvider>,
  document.getElementById('root')
);
