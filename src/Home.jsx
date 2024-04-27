import React from 'react';
import './styles/home.css'
import { useNavigate } from 'react-router';
const Home = () => {
    let navigate=useNavigate()
  return (
    <div className="mcontainer">
      <h1 className="mtitle">Welcome to My React App</h1>
      <p className="description">Link for the respective pages</p>
      <button className="button" onClick={()=>navigate('/login')}>Login</button>
      <button className="button" onClick={()=>navigate('/graphForm')}>Graph Form</button>
      <button className="button" onClick={()=>navigate('/lineGraph')}>View Graph</button>
    </div>
  );
};

export default Home;
