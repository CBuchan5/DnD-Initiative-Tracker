import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

function ShowPlayerDetails(props) {
  const [players, setPlayer] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://dnd-tracker.onrender.com/api/players/${id}`)
      .then((res) => {
        setPlayer(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowPlayerDetails');
      });
  }, [id]);
  const onDeleteClick = (id) => {
    axios
      .delete(`https://dnd-tracker.onrender.com/api/players/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Error form ShowPlayerDetails_deleteClick');
      });
  };

  const PlayerItem = (
    <div>
      <table className='table table-hover table-dark'>
        <tbody>
        <tr>
            <td>Image Url</td>
            <td>{players.imgUrl}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{players.name}</td>
          </tr>
          <tr>
            <td>Initiative</td>
            <td>{players.initiative}</td>
          </tr>
          <tr>
            <td>Hit Points</td>
            <td>{players.hit_points}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{players.description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  return (
    <div className='ShowPlayerDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Character List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Character's Record</h1>
            <p className='lead text-center'>View Character's Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{PlayerItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(players._id);
              }}
            >
              Delete Character
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-player/${players._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
             
              Edit Character
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowPlayerDetails;