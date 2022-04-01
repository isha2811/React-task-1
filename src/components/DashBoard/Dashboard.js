import React from 'react';
import Sliderz from './Sliserz';
import {Card,Button} from'react-bootstrap';
import './Dashboard.css';
 
const Dashboard =() =>{
    const cardData = [
        {
            image:"https://ih1.redbubble.net/image.571913602.7102/st,small,507x507-pad,600x600,f8f8f8.u4.jpg",title:"Html",text:"For Structring"
        },
        {
            image:"https://e7.pngegg.com/pngimages/239/228/png-clipart-html-css3-cascading-style-sheets-logo-markup-language-digital-agency-miscellaneous-blue-thumbnail.png",title:"Css",text:" For styling"
        },
        {
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/1200px-Javascript-shield.svg.png",title:"Javascript",text:" For Actions"
        },
        
        {
            image:"https://www.seekpng.com/png/small/142-1424663_bootstrap-stickers-bootstrap-logo-transparent.png",title:"Bootstrap",text:" For styling"
        },
        
    ];
    const renderCard =(card,index) =>{

    
  return (
    <div className ="tbulr">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={card.image}   className="box"/>
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>
           {card.text}
          </Card.Text>
          <Button variant="primary">Click</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

    return (
        <div>
<div className="slide">
    
    <Sliderz/>
    </div>
    <div className="grid">
{cardData.map(renderCard)}
    </div>
    </div>
    )
};
export default Dashboard;