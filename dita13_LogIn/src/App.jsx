import React, { useState } from 'react'
import './App.css'

function App() {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [error,setError] = useState('');
  const [success,setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!username || !password) {
      setError('Te dy fushat jane detyrueshme');
      setSuccess(false);
      return;
    }

    if(username === 'admin' && password === 'password'){
      setSuccess(true);
      setError('');

    }
    else{
      setError('Invalid username or password');
      setSuccess(false)
    }
  }
  return (
    <div className='App'>
      <div className='login-container'>
        <h2>Login</h2>

        {error && <div className='error-message'>{error}</div> }
        {success && <div className='success-message'>You loged in succsessfully</div>}

       <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <label htmlFor="">Username</label>
          <input 
          type="text" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder='Write your username'
          />
          </div>

          <div className='input-group'>
          <label htmlFor="">Password</label>
          <input 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Write your password'
          />

          </div>
          <button type='submit' className='submit-button'>Log In</button>
       </form>
      </div>

    </div>
  )
}

export default App