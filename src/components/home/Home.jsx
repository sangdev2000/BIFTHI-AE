import React from "react"
import Hero from "./hero/Hero"
import styled from "styled-components"
import Freeshapping from "./freeShapping"
import RecentCard from "./recent/RecentCard"
import DecorPaner from "./decor"
import Sampledesign from "./samdesin"
import Ourteam from "./ourteam"

const Home = () => {
  return (
    <Wapper>
      <Hero />
      <Freeshapping/>
      <RecentCard />
      <DecorPaner/>
      <Sampledesign/>
      <Ourteam/>
      {/* <Awards /> */}
      {/* <Location /> */}
      {/* <Team /> */}
      {/* <Price /> */}
    </Wapper>
  )
}

export default Home
const Wapper = styled.div`
width: 100%;
max-width: 1440px;
margin: 0px auto;

`;