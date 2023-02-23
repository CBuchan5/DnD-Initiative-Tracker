import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const PlayerPicture = (props) => {
  const player = props.player;

  return (
    <div className='card-container'>
      <img
        src='https://images.unsplash.com/photo-1495446815901-a7297e633e8d'
        alt='Players'
        height={200}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-player/${player._id}`}>{player.name}</Link>
        </h2>
        <h3>{player.initiative}</h3>
        <h3>{player.hit_points}</h3>
        <p>{player.description}</p>
      </div>
    </div>
  );
};
export default PlayerPicture;