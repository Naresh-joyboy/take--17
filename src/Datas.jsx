import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';

function Datas() {
  return (
    <div className='imgg3'>
    <div className='imggs'>
      <img src='./img/imaged1.jpeg' alt=''></img>
      <div><Link className="link1" to='https://www.guvi.in/blog/certification-impact-on-hiring-data-scientists/'>Hiring Data Scientists</Link> </div>
      </div>
      <div className='imggs'>
      <img src='./img/imaged2.jpeg' alt=''></img>
      <div><Link className="link1" to='https://www.guvi.in/blog/product-based-companies-for-data-science-freshers/'>Companies for Data Science Freshers</Link> </div>
      </div>
      <div className='imggs'>
      <img src='./img/imaged3.jpeg' alt=''></img>
      <div><Link className="link1" to='https://www.guvi.in/blog/difference-between-data-science-and-data-engineering/'>Data Science and Data Engineering?</Link> </div>
      </div>
    </div>
  );
}

export default Datas