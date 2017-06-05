/*
function requireAll(r) {
   r.keys().forEach(r);
}
*/

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import 'script-loader!jquery';
import 'script-loader!bootstrap/dist/js/bootstrap.js';

/*
import './css/style.scss';*/

require.context('./css', true, /\.scss$/);
