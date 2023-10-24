import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

const PlayerPicture = (props) => {
  const player = props.player;

  return (
    <div className='card-container'>
      <img
        src= {player.imgUrl}
        alt='Players'
        height={200}
       
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-player/${player._id}`}>{player.name}</Link>
        </h2>
        <h3>Initiative: {player.initiative}</h3>
        <h3>Hit Points: {player.hit_points}</h3>
        <h3>Description: {player.description}</h3>
      </div>
    </div>
  );
};
export default PlayerPicture;