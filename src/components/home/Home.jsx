import React from "react"
import Awards from "./awards/Awards"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import Price from "./price/Price"
import Team from "./team/Team"
import styled from "styled-components"
import Freeshapping from "./freeShapping"
import RecentCard from "./recent/RecentCard"
import DecorPaner from "./decor"
import Sampledesign from "./samdesin"

const Home = () => {
  return (
    <Wapper>
      <Hero />
      <Freeshapping/>
      <RecentCard />
      <DecorPaner/>
      <Sampledesign/>
      <Awards />
      <Location />
      <Team />
      <Price />
    </Wapper>
  )
}

export default Home
const Wapper = styled.div`
width: 100%;
max-width: 1440px;
margin: 0px auto;
`;