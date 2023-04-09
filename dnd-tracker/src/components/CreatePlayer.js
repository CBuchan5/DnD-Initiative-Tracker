import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreatePlayer = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [player, setPlayer] = useState({
    name: '',
    initiative: '',
    hit_points: '',
    description: ''
  });

  const onChange = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8082/api/players', player)
      .then((res) => {
        setPlayer({
          name: '',
          initiative: '',
          hit_points: '',
          description: ''
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in CreatePlayer!');
      });
  };

  return (
    <div className='CreatePlayer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Player List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Player</h1>
            <p className='lead text-center'>Create new player</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Player name'
                  name='name'
                  className='form-control'
                  value={player.name}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Initiative'
                  name='initiative'
                  className='form-control'
                  value={player.initiative}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Hit Points'
                  name='hit_points'
                  className='form-control'
                  value={player.hit_points}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Player Description'
                  name='description'
                  className='form-control'
                  value={player.description}
                  onChange={onChange}
                />
              </div>

              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePlayer;