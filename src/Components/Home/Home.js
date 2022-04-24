// import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  // const [user, setUser] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const name = e.currentTarget.name.value;
    const email = e.currentTarget.email.value;
    // console.log(email, pass);
    const user = { name, email };
    fetch('http://localhost:5000/user',
      {
        'method': 'POST',
        'headers': {
          'Content-Type': 'application/json',
        },
        'body': JSON.stringify(user),
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        e.target.reset();
      })
      .catch(error => console.log('error: ', error));

  }
  return (
    <div className='form'>
      <section>
        <h1>This is Home page</h1>
        <form onSubmit={handleFormSubmit}>
          <input type="text" name="name" placeholder='Name' size='40' />
          <br />
          <input type="email" name="email" placeholder='Email' size='40' />
          <br />
          <button>Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Home;