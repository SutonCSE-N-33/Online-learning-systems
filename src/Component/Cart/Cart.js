import React from 'react';
import { Button } from 'react-bootstrap';
import './Cart.css'
const Cart = props => {
    const courses = props.cart;
    const total = courses.reduce((total,course) => total + Number(course.CoursePrice),0)
    return (
        <div className='cart'>
            <h1 style={{textAlign:"center"}}>Order Details</h1>
            <p>Total Courses: {courses.length} </p>
            <p><small>Total Price: {total} TK</small></p>
            <Button style={{backgroundColor:"gray"}}>Order Now</Button>
        </div>
    );
};

export default Cart;