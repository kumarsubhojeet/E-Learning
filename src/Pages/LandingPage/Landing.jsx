import React from "react";
import Jumbo from '../../Components/LandingPage/Jumbo.jsx'
import '../../Pages/LandingPage/Landing.css'
import YoutubeChannels from '../../Components/LandingPage/YoutubeChannels.jsx'
import RoadMAps from '../../Components/LandingPage/RoadMap.jsx'
import Courses from '../../Components/LandingPage/Courses.jsx'
import Community from '../../Components/LandingPage/Community.jsx'

export default function Landing() {
  return (
    <>
      <Jumbo />
      <YoutubeChannels />
      <RoadMAps />
      <Courses />
      <Community />
    </>
  );
}
