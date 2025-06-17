import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/mousewheel";

import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

export const FullpageSlides=()=> {
    return (
        <Swiper
            direction="vertical"
            slidesPerView={1}
            mousewheel
            modules={[Mousewheel]}
            style={{ height: "100vh" }}
        >
            <SwiperSlide>
                <PageOne />
            </SwiperSlide>

            <SwiperSlide>
                <PageTwo />
            </SwiperSlide>
        </Swiper>
    );
}

export default FullpageSlides;

// import React from "react";
// import SlidePage from "./SlidePage.tsx";
//
// // import "./FullpageSlides.css"; // 업로드하신 CSS 사용
// import slide1 from "../../../public/assets/slide/slide-1.png";
// import slide2 from "../../../public/assets/slide/slide-2.png";
// import slide3 from "../../../public/assets/slide/slide-3.png";
// export default function FullpageSlides() {
//     return (
//         <div className="container" style={{ height: '100vh', background: '#fff'}} >
//             <h1>Fullpage 슬라이드 단독 페이지</h1>
//             <SlidePage
//                 className="slide1"
//                 title="첫 번째 슬라이드"
//                 imageSrc={slide1}
//             />
//             <SlidePage
//                 className="slide2"
//                 title="두 번째 슬라이드"
//                 imageSrc={slide2}
//             />
//             <SlidePage
//                 className="slide3"
//                 title="세 번째 슬라이드"
//                 imageSrc={slide3}
//             />
//         </div>
//     );
// }