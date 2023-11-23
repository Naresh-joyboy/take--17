import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';

function Fsd() {
  return (
    <div className='imgg2'>
      <div className='imggs'>
        <img src='./img/imagef1.png' alt=''></img>
        <div><Link className="link1" to='https://www.guvi.in/blog/mechanical-engineering-resume-tips/'>Full Stack Developers in 2023</Link> </div>
      </div>       
      <div className='imggs'>
        <img src='./img/imagef2.png' alt=''></img>
        <div><Link className="link1" to='https://www.guvi.in/blog/mechanical-engineering-resume-tips/'>Full Stack Developer vs Software Engineer </Link> </div>
      </div>
      <div className='imggs'>
        <img src='./img/imagef3.jpeg' alt=''></img>
        <div><Link className="link1" to='https://www.guvi.in/blog/mechanical-engineering-resume-tips/'>Horizontal vs Vertical Scaling Design</Link> </div>
      </div>
    </div>
  );
}

export default Fsd