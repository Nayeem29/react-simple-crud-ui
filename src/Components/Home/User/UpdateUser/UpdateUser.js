import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../../Home.css';

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const url = `http://localhost:5000/user/${id}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setUser(data))
  }, []);
  const handleUpdateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const updatedUser = { name, email };
    const url = `http://localhost:5000/user/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUser)
    })
      .then(res => res.json())
      .then(data => {
        console.log('success', data);
        alert('user added successfully')
        e.target.reset();
        navigate('/user');
      });
  }
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Updating User: {user.name}</h2>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <form onSubmit={handleUpdateUser}>
          <input type="text" name="name" placeholder='Name' size='40' />
          <br />
          <input type="email" name="email" placeholder='Email' size='40' />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default UpdateUser;