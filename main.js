

import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TabsExampleSimple from './Material1.jsx';

const App = () => (
  <MuiThemeProvider>
    <TabsExampleSimple />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
