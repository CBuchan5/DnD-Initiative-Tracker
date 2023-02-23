import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreatePlayer from './components/CreatePlayer';
import ShowPlayerList from './components/ShowPlayerList';
import ShowPlayerDetails from './components/ShowPlayerDetails';
import UpdatePlayer from './components/UpdatePlayer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Routes>
        <Route exact path='/' element={<ShowPlayerList />} />
          <Route path='/create-player' element={<CreatePlayer />} />
          <Route path='/update-player/:id' element={<UpdatePlayer />} />
          <Route path='/show-player/:id' element={<ShowPlayerDetails />} />
       </Routes>
       </div>
       
      </Router>

  )}
}

export default App;

