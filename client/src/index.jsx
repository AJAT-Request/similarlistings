import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

ReactDOM.render(<App roomId={window.location.pathname.slice(7)} />, document.getElementById('app'));