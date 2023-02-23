import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function UpdatePlayer(props) {
  const [player, setPlayer] = useState({
    name: '',
    initiative: '',
    hit_points: '',
    description: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/players/${id}`)
      .then((res) => {
        setPlayer({
          name: res.data.name,
          initiative: res.data.initiative,
          hit_points: res.data.hit_points,
          description: res.data.description,
        });
      })
      .catch((err) => {
        console.log('Error from UpdatePlayer');
      });
  }, [id]);

  const onChange = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: player.name,
      initiative: player.initiative,
      hit_points: player.hit_points,
      description: player.description,
    };

    axios
      .put(`http://localhost:8082/api/players/${id}`, data)
      .then((res) => {
        navigate(`/show-player/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdatePlayer!');
      });
  };

  return (
    <div className='UpdatePlayer'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Player List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Player</h1>
            <p className='lead text-center'>Update Player's Info</p>
          </div>
        </div>
        // just for a change
        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='title'>Name</label>
              <input
                type='text'
                placeholder='Name of Player'
                name='name'
                className='form-control'
                value={player.name}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='isbn'>Initiative</label>
              <input
                type='text'
                placeholder='initiative'
                name='initiative'
                className='form-control'
                value={player.initiative}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='author'>Hit Points</label>
              <input
                type='text'
                placeholder='Hit_Points'
                name='hit_points'
                className='form-control'
                value={player.hit_points}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='description'>Description</label>
              <textarea
                type='text'
                placeholder='Description of the Player'
                name='description'
                className='form-control'
                value={player.description}
                onChange={onChange}
              />
            </div>
            <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Player
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdatePlayer;