import styled from "styled-components";
import fee1 from "../../../acsset/slice/fee1.png"
import fee2 from "../../../acsset/slice/fee2.png"
import fee3 from "../../../acsset/slice/fee3.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Freeshapping = () => {
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
        <Wapper data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
            <Container>
                {
                    arr?.map((item,index)=>{
                        return(
                            <ContainerAll>
                            <img src={item.img}/>
                            <TotleConten>
                                <h1>{item.title}</h1>
                                <p>{item.conten}</p>
                            </TotleConten>
                            </ContainerAll>
                        )
                    })
                }
            </Container>
        </Wapper>
    )
}

export default Freeshapping;
const arr = [
   {
     img: fee1,
    title: "Free Shipping",
    conten: "No charge for each delivery"
   },
   {
    img: fee2,
   title: "Quick Payment",
   conten: "100% secure payment"
  },
  {
    img: fee3,
   title: "24/7 Support",
   conten: "Quick support"
  },
]
const Wapper = styled.div`
width: 100%;
max-width: 1440px;
margin: 0px auto;
@media screen and (min-width: 320px) and (max-width: 1024px) {
    display: none;
}
`;
const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
`;
const ContainerAll = styled.div`
width: calc((100% - 84px) / 3);
display: flex;
gap: 10px;
align-items: center;
justify-content: center;
img{
width: 40px;
height: 40px;
}
@media screen and (min-width: 320px) and (max-width: 460px) {
    width: 100%;
img{
    width: 40px;
    height: 40px;
}
}

`;
const TotleConten = styled.div`
h1{
color: var(--font, #081323);
font-family: "Work Sans";
font-size: 27.373px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
p{
color: var(--Gray-3, #828282);
font-family: "Work Sans";
font-size: 17.108px;
font-style: normal;
font-weight: 500;
line-height: normal;
}
@media screen and (min-width: 320px) and (max-width: 460px) {
    h1{
        font-size: 18px;
    }
    p{
        font-size: 14px;
    }
}
`;