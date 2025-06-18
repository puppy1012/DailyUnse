import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";

import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";
import PageFive from "./PageFive";
import styled from "styled-components";
import Header from "../Header";

const HeaderSection = styled.div`
    display: flex;
    position: absolute;
    max-width: calc(480px - 48px);
    height: 40px;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 10px 24px 0;
    box-Shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    background-color: #fff;
    top:0;
    left:0;
    right:0;
    z-index: 100;
`


export const FullpageSlides=()=> {
    return (
        <>
        <HeaderSection>
            <Header />    
        </HeaderSection>
        <Swiper 
            direction="vertical"
            slidesPerView={1}
            mousewheel={{ forceToAxis: true }}
            modules={[Mousewheel]}
            style={{ 
                width: "100vw",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: 0,
                right:0,
                // zIndex: 1,       
                backgroundColor:"#f9f9f9", 
      
            }} 
            >
            {[PageOne, PageTwo, PageThree, PageFour, PageFive].map((Component, i) => (
                <SwiperSlide key={i}>
                <div style={{
                    maxWidth: "480px",
                    margin: "50px auto 0 ",
                    height: "100%",
                    paddingTop:"10px",
                    overflow: "hidden",
                    backgroundColor:"#fff",
                    boxShadow: "0 0 10px rgba(0, 0, 0, 0.05)"
                }}>
                    <Component />
                </div>
                </SwiperSlide>
            ))}
        </Swiper>
        </>
        );
}

export default FullpageSlides;