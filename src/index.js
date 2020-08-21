// ????????????????????????????????????????????????????????????????
// ???????????????????????? Minesweeper ???????????????????????????
// ????????????????????????????????????????????????????????????????

// ?? A url shortener web app
// ?? 
// ?? Created on Aug , 2020
// ?? Published on 
// ??
// ?? run yarn start to run server
// ??
// ?? Using Better Comments for color coding
// ?? The following is the color key for app commenting
// ??  Key   Meaning   Hex 
//     ??    Titles    (#24c5ff)
//     ~~    Notes     (#ff9900)
//     ^^    Requests  (#ff69b4)
//     !!    Errors    (#ff0011)
//     ##    DataBase  (#78f022)
//     **    Security  (#9822f2)


// ??????????????????????? Vendor Modules ?????????????????????????
import React from 'react';
import ReactDOM from 'react-dom';

// ???????????????????????? File Modules ??????????????????????????
// ?? Components
import App from './App'

// ?? Styles
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
