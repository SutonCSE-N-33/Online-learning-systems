import React from 'react';
import './Courses.css';
import { Button } from 'react-bootstrap';
const Courses = props => {
    const handleCourse = props.handleCourse;
    const{courseName, CoursePrice, img} =props.data;
    return (
        <div className='courseCard'>
            <img src={img} alt="" />
            <h4>{courseName}</h4>
            <p><small>{CoursePrice} TK</small></p>
            <Button onClick={()=>handleCourse(props.data)}>Enroll Now</Button>
        </div>
    );
};

export default Courses;