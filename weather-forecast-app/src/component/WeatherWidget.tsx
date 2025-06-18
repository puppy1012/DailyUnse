import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CurrentLocation from "./CurrentLocation";
import FetchWeather from "./FetchWeather";
import styled from "styled-components";



export default function WeatherWidget() {
  const [coords, setCoords] = useState<{ nx: number; ny: number } | null>(null);

  return (
    <Wrapper>
      <Swiper
        className="w-full"
        direction="vertical"
        autoplay={{ delay: 5000 }}
        loop={true}
        modules={[Autoplay]}
      >
        <SlideContainer>
          <SlideInner>
            <CurrentLocation onLocation={setCoords} />
            {coords ? (
              <FetchWeather location={coords} />
            ) : (
              <p></p>
            )}
          </SlideInner>
        </SlideContainer>

        <SlideContainer>
          출처 : 기상청, 한국환경공단
        </SlideContainer>
      </Swiper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: auto;
  margin-left: 0px;
  margin-right:auto;
  height: 32px;
  overflow: hidden;
  display: flex;
  font-family: 'Pretendard', sans-serif;
  font-size: 12px;
  gap: 4px;
`;

const SlideContainer = styled(SwiperSlide)`
  display: flex;

  text-align: left;
  align-items: center;
  height: 32px;
  width: 100%;
`;

const SlideInner = styled.div`
  display: flex;
  width: 100%;
`;