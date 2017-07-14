import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/containers/App';

var isMobile = require('ismobilejs');
var THREE = require('three');
require('three.fbo-helper');


// require('script-loader!./src/lib/OrbitControls.js');
// require('script-loader!./src/lib/Simulation.js');
// require('script-loader!./src/lib/dat.gui.min.js');
// require('script-loader!./src/lib/Detector.js');
// require('script-loader!./src/lib/main-boxels.js');


ReactDOM.render(<App/>, document.getElementById('app'));
