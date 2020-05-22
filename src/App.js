import React from 'react';
import Homepage from './pages/HomePage/Homepage';
import ShopPage from './pages/ShopPage/ShopPage.component';

import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
