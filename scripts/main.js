import Reveal from 'reveal.js';
import Highlight from 'reveal.js/plugin/highlight';
import Search from 'reveal.js/plugin/search';
import Notes from 'reveal.js/plugin/notes';
import Math from 'reveal.js/plugin/math';
import Zoom from 'reveal.js/plugin/zoom';

const deck = new Reveal({
  plugins: [Highlight, Search, Notes, Math, Zoom],
});

deck.initialize({
  center: false,
  slideNumber: 'h.v',
});

