import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
             <a href="#"><h1>Nazrul Academy</h1></a>
            </div>
            <div className='item-li'>
               <a href="#">All Courses</a>
               <a href="#">About Us</a>
               <a href="#">Contact Us</a>
               <button className='rg-btn'>Registration</button>
            </div>
        </div>
    );
};

export default Header;