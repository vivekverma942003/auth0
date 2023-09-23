import './App.css';
import React from 'react';
import LoginButton from './component/loginButton';
import LogoutButton from './component/logutButton';
import Profile from "./component/profile"
function App() {
  return (
    <div className="App">
      <LoginButton/> 
      <LogoutButton/> 
      <Profile/>  
    </div>
  );
}

export default App;
