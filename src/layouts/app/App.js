/**
 * 
 * 
 * 
 * 
 * 
 * 
 */

import { useState } from 'react'
import './App.css';

function Login() {
  return <div>Register</div>;
}

function Register() {
  return <div>Login</div>;
}

function App() {
  let pathname = window.location.pathname
  let initUI = pathname === '/login' ? 'login' : 'register'

  let [ui, setUI] = useState(initUI);
  let onClickLogin = () => {
    setUI('Login')
    window.history.pushState(null, '', '/login')
  }
  let onClickRegister = () => {
    setUI('Register')
    window.history.pushState(null, '', '/register')
  }

  let showUI = () => {
    switch (ui) {
      case 'Login':
        return <Login />
      case 'Register':
        return <Register />
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={onClickLogin}>Login</button>
        <button onClick={onClickRegister}>Register</button>
        <div>
          {showUI()}
        </div>
      </header>
    </div>
  );
}

export default App;
