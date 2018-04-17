import React from 'react';
import ReactDOM from 'react-dom';

import ToggleButton from './components/ToggleButton';
import Address from './components/Address';

ReactDOM.render(
  <div>
  <ToggleButton/>
   <Address street='mystreet' city='Edinburgh'/>
  </div>,
  document.getElementById('root')
)