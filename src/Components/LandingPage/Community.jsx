import React from "react";
import {Card , Button} from "antd";

import {Teachers} from '../../Data/Teachers.js'
import Carousel from "react-elastic-carousel";

export default function Community() {
    const { Meta } = Card;

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 4 },
        { width: 1200, itemsToShow: 4 },
      ];

  return (
    <div>
      <div className="Community_main">

        <div className="Community_heading">
          <h2 style={{color:" #6c3483 " , fontWeight:"bold"}}>From the ADYPU Learning Community</h2>
        </div>

        <div className="community_right">
            <h6 style={{color:" #000 " , fontWeight:"bold"}}>1000+ Happy and satisfied Student Learning from our website Completed courses of their choises.
            Our teaches and the best in the industry and clear all dought of students.</h6>
        </div>

        <div className="community_left">
            <h2 style={{color: '#000' , fontWeight: 'bold'}}>Our Teachers</h2>
            <Carousel
             breakPoints={breakPoints}
             pagination={false}
             itemPadding={[10, 20]}
            >
            {Teachers.map((data) => (
           
                <Card
                  hoverable
                  className="RM_card"
                  style={{ width: "18rem", margin: "10px auto" }}
                  cover={<img alt="example" src={data.img} />}
                >
                  <Meta 
                  style={{fontWeight:'bold' , textAlign:"justify"}}
                  title={data.name} 
                  description={data.desc} 
                  />
                
                <div className="RM_Btn">
                <Button style={{fontWeight:'bold'}}>Explore</Button>
                </div>

                </Card>
     
            
            ))}
        
        </Carousel>
        </div>

     


      </div>
    </div>
  );
}
