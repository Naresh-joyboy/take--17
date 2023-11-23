import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';

function Cyber() {
  return (
    <div className='imgg4'>
      <div className='imggs'>
        <img src='./img/images1.jpeg' alt=''></img>
        <div><Link className="link1" to='https://www.guvi.in/blog/mechanical-engineering-resume-tips/'>What Is Hacking? Types of Hacking</Link> </div>
      </div>
      <div className='imggs'>
        <img src='./img/images2.jpeg' alt=''></img>
        <div><Link className="link1" to='https://www.guvi.in/blog/mechanical-engineering-resume-tips/'>Cybersecurity Vs Ethical Hacking:Top10 Diff</Link> </div>
      </div>
      <div className='imggs'>
        <img src='./img/images3.jpeg' alt=''></img>
        <div><Link className="link1" to='https://www.guvi.in/blog/mechanical-engineering-resume-tips/'>What is Cybersecurity? Importance and uses!</Link> </div>
      </div>
    </div>
  );
}

export default Cyber