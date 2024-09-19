import styled from "styled-components";
import avatar  from "../../../acsset/slice/paner1.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Ourteam = () => {
    useEffect(() => {
        AOS.init({ duration: 1000});
        const handleScroll = () => {
            AOS.refresh();
          };
          window.addEventListener('scroll', handleScroll);
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
      }, []);
    return(
        <Wapper>
            <Container>
                <ContainerLeft data-aos="fade-up">
                    <p>OUR TEAM</p>
                    <h1>Our talent team</h1>
                    <span>Feugiat sed lectus vestibulum mattis ullamcorper.</span>
                    <span>Duis at consectetur lorem donec massa</span>
                    <ViewMoreX data-aos="fade-up"
     data-aos-anchor-placement="center-center">
                        <h2>VIEW MORE</h2>
                    </ViewMoreX>
                </ContainerLeft>
                <ContainerRight data-aos="fade-left">
                {image?.map((item,index)=>{
                    return(
                        <RightImage  data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                            <img src={item}/>
                        </RightImage>
                    )
                })}
                </ContainerRight>
            </Container>
        </Wapper>
    )
}
export default Ourteam;
const image = [
    avatar,avatar,avatar,avatar,avatar,avatar
]
const Wapper = styled.div`
width: 1005;
max-width: 1440px;
margin: 90px auto;
padding: 20px;
`;
const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
@media screen and (min-width: 320px) and (max-width: 760px) {
    flex-wrap: wrap;
    gap: 16px;
}
`;
const ContainerLeft = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 20px;
h1{
color: #000;
text-align: left;
font-family: "Work Sans";
font-size: 32px;
font-style: normal;
font-weight: 600;
line-height: normal;
text-transform: uppercase;
}
p{
    color: #C5862B;
font-family: "Work Sans";
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
span{
color: #000;
font-family: "Work Sans";
font-size: 18px;
font-style: normal;
font-weight: 600;
line-height: normal;
}
`;

const ContainerRight = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
gap: 20px;
`;
const RightImage = styled.div`
width: calc((100% - 84px) / 3);
display: flex;
align-items: center;
@media screen and (min-width: 320px) and (max-width: 460px) {
    width: 100%;
}
@media screen and (min-width: 460px) and (max-width: 760px) {
    width: calc((100% - 64px) / 2);
}
`;
const ViewMoreX = styled.div`
width: 200px;
border: 1px solid #000;
h2{
color: #ccc;
text-align: center;
font-family: "Work Sans";
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: normal;
text-transform: uppercase;
padding: 10px;
&:hover{
    transform: scale(1.2);
    cursor: pointer;
}
}
`;