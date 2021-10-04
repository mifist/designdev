import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

// import FA last, to kick off the process of finding <i> tags and
// replacing with <svg> tags, after importing all components.
import './lib/slick.min';
import './lib/fancybox';
import './lib/jquery.sticky-kit.min';

// other
import './components/custom';
import './components/sticky-aside';
