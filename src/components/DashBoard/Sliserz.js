import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.css";

import './Sliderz.css';
const Sliderz =()=>{
return(
<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1576400883215-7083980b6193?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2013&q=80"
      alt="First slide"
    />
    <Carousel.Caption>
      <h2>Ethical Hacking</h2>
      <p>Is the current trend and have a great usage in future.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1542315192-1f61a1792f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Web Development</h3>
      <p>Is the current trend and have a great usage in future.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Machine Learning & AI</h3>
      <p>Is the current trend and have a great usage in future.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

);

};
export default Sliderz;