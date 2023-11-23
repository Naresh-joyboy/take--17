import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';

function Career() {
  return (
    <div className='imgg5'>
      <div className='imggs'>
        <img src='./img/imager1.jpeg' alt=''></img>
        <div><Link className="link1" to='https://www.guvi.in/blog/mechanical-engineering-resume-tips/'>Mechanical engineering Resume:9 tips</Link> </div>
        </div>
        <div className='imggs'>
        <img src='./img/imager2.jpeg' alt=''></img>
        <div><Link className="link1" to='https://www.guvi.in/blog/mechanical-engineering-resume-tips/'>Blockchain Developer Resume:11 Tips</Link> </div>
        </div>
        <div className='imggs'>
        <img src='./img/imager3.png' alt=''></img>
        <div><Link className="link1" to='https://www.guvi.in/blog/mechanical-engineering-resume-tips/'>A Compelling Ethical Hacker Resume:10 Tips</Link> </div>
        </div>
      </div>
      );
}
      export default Career