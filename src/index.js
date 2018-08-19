import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';

import './stylesheets/app.sass';

const baseComponent = (
<Router>
  <App />
</Router>);

render(baseComponent, document.getElementById('root'));