import React from'react';
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.css";
const Home =() =>{
    return(<div>      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          alt="First slide"
          style={{opacity:"0.5 black" ,height:'600px'}}
        />
        <Carousel.Caption  >
        <h1 >Welcome</h1>
      <h1>To Learning Diva </h1>
      <button>Know More</button>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>
        </div>
    );
};
export default Home;