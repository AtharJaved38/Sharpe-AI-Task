import React from 'react'
import './Home.css';

const Home = () => {
  return (
    <div className='home'><h1 className='title'>Welcome to Sharpe AI</h1>
    <form action="/transaction">
    <button type='submit' className='btn btn-primary '>Get Started</button>
    </form>
    </div>
    
  )
}

export default Home