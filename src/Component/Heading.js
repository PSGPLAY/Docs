import React from 'react';
import logo from '../image/logo.svg';
import './Heading.css';

export default function Heading() {
  return (
    <div className='container'>
      <div className="leftside-nav">
         <img src={logo} />
         <p className='title'>Title of the docs</p>
      </div>
      <div className="middle-side-nav">
         <div className="buttons">
            <button className='bold'>B</button>
            <button className='italic'>I</button>
            <button className='text-color'>T</button>
            <button className='underline'>U</button>
         </div>
      </div>
      <div className="right-side-nav">
         <p>Profile</p>
      </div>
    </div>
  )
}
