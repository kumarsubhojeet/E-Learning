import React from 'react'
import girl_img from "../../images/Girl_img.png";
import { Button } from "antd";

export default function Jumbo() {
    return (
        <div>
            <div className="Jumbo_main">
        <div className="Jumbo_left">
          <div className="Jumbo_left_Jumbo_text1">
            <h2>
            
              University and college students, learn job-ready skills for free
              with Coursera for Campus
            </h2>
          </div>

          <div className="Jumbo_left_Jumbo_text2">
            <h5>
             
              Our free Coursera for Campus Student plan helps you build skills
              to add to your resume with unlimited Guided Projects and 1 free
              course per year
            </h5>
          </div>

          <div className="Jumbo_left_btns">
            <Button type="primary" style={{fontWeight:'bold'}} >Join Free</Button>
            <Button danger style={{fontWeight:'bold'}}>Try Mooc Course</Button>
          </div>
        </div>

        <div className="Jumbo_right">
          <div className="right_img">
            <img src={girl_img} className="girl_img" alt="error" />
          </div>
        </div>
      </div>
        </div>
    )
}
