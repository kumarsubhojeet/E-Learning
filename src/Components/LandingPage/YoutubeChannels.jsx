import React from "react";
import { Row, Col } from "antd";
import {YoutubeData} from  '../../Data/Youtubechannel.js'

export default function YoutubeChannels() {
  return (
    <div className="YM">
        <div className="Youtubechannel_heading">
            <h2>We are collecting from </h2>
            <h3 style={{color:" #3498db "}}>100+ trusted YOUTUBE channels</h3>
        </div>
      <div className="YoutubeChannels_main">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          {
              YoutubeData.map(data => (
                <Col className="gutter-col" md={6} xs={24} sm={12} lg={32}>
                    <img src={data.img} className="YoutubeData_img" alt="Error" />
                    <h6 style={{fontWeight:'bold'}} className="YoutubeData_h6">{data.name}</h6>
                </Col>
              ))
          }
        </Row>
      </div>
    </div>
  );
}
