import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'


function App() {
  const [team, setTeam] = useState([
    {
      id: Date.now(),
      username: 'Raj',
      email: 'raj@gmail.com',
      role: "Frontend Engineer"
    }
  ])

  const addUserHandler = newUser => {
    console.log("registering user", newUser);    
    setTeam([...team, newUser]);
  };

  return (
    <div className="App">
      {/* Render form and we pass addUserHandler as props*/}
      <Form addUserHandler={addUserHandler} />
      {/* Map threw regUser and return a member component passing in a team member*/}
      {team.map(newUser => {
        return <newUser member={newUser} />;
      })}
    </div>
  );
  }

export default App;