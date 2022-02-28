import { useState } from 'react';
import './App.css';
import allCourses from './Data/data';
import Cart from './Component/Cart/Cart';
import Courses from './Component/Courses/Courses';
import Header from './Component/Header/Header';



function App() {

  const [allData,setAllData] = useState(allCourses)
  const [cart,setCart] = useState([]);
  const handleCourse = course => {
          const newCart = [...cart,course];
          setCart(newCart);
  }
  return (
    
    <div>
         <Header></Header>
         <h1 style={{textAlign:"center"}}><u>Our All Course Here</u></h1>
        <div className="parent">
        <div className="course-list">
           {
             allData.map(data => <Courses handleCourse={handleCourse} data={data}></Courses>)
           }
        </div>
        <div className="order-cart">
        <Cart cart={cart}></Cart>
        </div>
        </div>
    </div>
  );
}

export default App;
