import React from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
import Price from "./price/Price"
import Recent from "./recent/Recent"
import Team from "./team/Team"
import styled from "styled-components"

const Home = () => {
  return (
    <Wapper>
      <Hero />
      <Featured />
      <Recent />
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