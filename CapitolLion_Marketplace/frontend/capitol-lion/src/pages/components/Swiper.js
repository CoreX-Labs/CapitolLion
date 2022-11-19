import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Swipe() {
  return (
    <>
      <div className="orbitron-light font-[500] text-[1.75rem] leading-[3rem] px-[24px] md:px-[70px] 2xl:px-[300px] pt-[30px] pb-[20px]">
        <h1>Upcoming Drops</h1>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        slidesPerGroup={3}
        loop={false}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-[235.26] h-[128px] object-contain" src="https://user-images.githubusercontent.com/40435826/202501718-5a650fcd-5e28-4fa5-87ae-8077a1e370fd.jpeg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-[235.26] h-[128px] object-contain" src="https://user-images.githubusercontent.com/40435826/202504572-ea51783e-49c3-4ee6-a046-1bdf57728f28.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-[235.26] h-[128px] object-contain" src="https://user-images.githubusercontent.com/40435826/202502613-a6a5316c-707e-492f-9f7b-743ca8d3b96c.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-[235.26] h-[128px] object-contain" src="https://user-images.githubusercontent.com/40435826/202502841-cccfd03f-f59e-4334-aa9d-ebc5eff1c304.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className="w-[235.26] h-[128px] object-contain" src="https://user-images.githubusercontent.com/40435826/202503173-1033c233-a7c4-41f2-900c-056883dd8284.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[235.26] h-[128px] object-contain" src="https://user-images.githubusercontent.com/40435826/202503412-689f0914-0218-4b2c-bc9a-c48ff8be763b.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[235.26] h-[128px] object-contain" src="https://user-images.githubusercontent.com/40435826/202504090-4d5bb4aa-2c36-422f-a671-9ca18c5fdffd.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[235.26] h-[128px] object-contain" src="https://user-images.githubusercontent.com/40435826/202504210-7e640414-d408-4bc2-9c63-2b250af00655.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[235.26] h-[128px] object-contain" src="https://user-images.githubusercontent.com/40435826/202504362-4cc112ec-7b69-4da8-bf35-b2f9e2333559.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[235.26] h-[128px] object-contain" src="https://user-images.githubusercontent.com/40435826/202502175-f8129e24-8162-465e-9952-aaa79bd1e0e1.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
