import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown';
import Highlight from 'reveal.js/plugin/highlight';
import Search from 'reveal.js/plugin/search';
import Notes from 'reveal.js/plugin/notes';
import Math from 'reveal.js/plugin/math';
import Zoom from 'reveal.js/plugin/zoom';

import 'reveal.js/reveal.css';
import 'reveal.js/theme/black.css';

let deck = new Reveal({
  plugins: [Markdown, Highlight, Search, Notes, Math, Zoom],
});

deck.initialize({ 
  center: false,
  slideNumber: "h.v"
});