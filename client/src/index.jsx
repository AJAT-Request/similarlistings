import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './components/Carousel.jsx';

ReactDOM.render(<Carousel roomId={window.location.pathname.slice(7)} />, document.getElementById('app'));