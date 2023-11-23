import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';

function All() {
  return (
    <div className='imgg1'>
      <div className='imggs'>
      <img src='./img/imagea1.jpeg' alt='' /> 
      <div><Link className="link1" to='https://www.guvi.in/blog/mechanical-engineering-resume-tips/'>Mechanical Engineering Resume</Link> </div> 
      </div>   
      <div className='imggs'>
      <img src='./img/imagea2.png' alt='' />
      <div><Link className="link1" to='https://www.guvi.in/blog/motion-graphics-designer-resume-tips/'>Motion Graphic DesignerResume:13 Tips</Link> </div>
      </div>
      <div className='imggs'>
      <img src='./img/imagea3.jpeg' alt='' />
      <div><Link className="link1" to='https://www.guvi.in/blog/continuous-integration-vs-continuous-deployment/'>Continuous Integration vs Continuous </Link> </div>
      </div>
    </div>
  );
}

export default All