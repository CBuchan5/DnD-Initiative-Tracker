import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PlayerPicture from './PlayerPicture';

function ShowPlayerList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios
      .get('https://dnd-tracker.onrender.com/api/players')
      .then((res) => {
        setPlayers(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowPlayerList');
      });
  }, []);

  const playerList =
    players.length === 0
      ? 'there is no player record!'
      : players.sort((a,b) => b.initiative - a.initiative).map((player, k) => <PlayerPicture player={player} key={k}/>);
      
  return (
    <div className='ShowPlayerList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            
            <h3 className='display-4 text-center'>Initiative Tracker</h3>
          </div>
         
          <div className='col-md-11'>
            <Link
              to='/create-player'
              className='btn btn-outline-warning float-center'
            >
              
             + Add New Character
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>
        <div className='list'>{playerList}</div>
      </div>
    </div>
  );
}

export default ShowPlayerList;