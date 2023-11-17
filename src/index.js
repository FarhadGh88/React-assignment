import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import './index.css';
import Home from '../src/view/Home';
import Contacts from '../src/view/Contacts'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode className="wrapper-grid">
  <BrowserRouter>

    <Routes>
      <Route path='/' element= {<Home />}/>
      <Route path='/Contacts' element= {<Contacts />}/>

    </Routes>
  </BrowserRouter>
</React.StrictMode>
);

