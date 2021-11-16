import React from "react";
import { Row, Col, Card , Button} from "antd";

import { RoadMaps } from "../../Data/RoadMap.js";

export default function RoadMap() {
  const { Meta } = Card;
  return (
    <div>
      <div className="RoadMap_main">
        <div className="RM_heading">
          <h4 style={{color:" #6c3483 " , fontWeight:"bold"}}>Start With Our Professional Roadmaps</h4>
          <h2 style={{color:" #000 " , fontWeight:"bold"}}>Get job-ready for an in-demand career</h2>
          <h6 style={{color:" #000 " , fontWeight:"bold"}}>
            Break into a new field like information technology or data science.
            No prior experience necessary to get started.
          </h6>
        </div>

     

        <div className="RM_cards">
          <Row >
            {RoadMaps.map((data) => (
              <Col  md={6} xs={24} sm={12} lg={32}>
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
                ,
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}
