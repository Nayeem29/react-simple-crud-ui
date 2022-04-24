import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setUsers(data)
      });
  }, []);
  const handleDeleteUser = id => {
    const proceed = window.confirm('Please confirm if you want to delete permanently');
    if (proceed) {
      const url = `http://localhost:5000/users/${id}`
      fetch(url, {
        method: 'Delete',
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) { //deletedCount is a default method
            const remainingUsers = users.filter(user => user._id !== id);
            setUsers(remainingUsers);
          }
        })
    }
  }
  return (
    <div>
      <h2>All users Information here!!!</h2>
      <ul>
        {
          users.map(user =>
            <li key={user._id}>

              {user.name}::{user.email}
              <Link to={`update/${user._id}`}><button>update</button></Link>
              <button onClick={() => handleDeleteUser(user._id)}>X</button>
            </li>

          )

        }

      </ul>
    </div>
  );
};

export default User;