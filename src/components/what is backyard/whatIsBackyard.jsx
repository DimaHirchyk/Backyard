import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function WhatIsBackyard() {
  const dataBackyard = [
    {
      id: 1,
      name: "Yield Aggregator",
      action: "One-click yield aggregation",
      desc: "Choose multiple stablecoin strategies, diversify in seconds, and optimize your yield without complexity",
      imgX1: "/What_is_Backyard/Aggregator_x1.webp",
      imgX2: "/What_is_Backyard/Aggregator_x2.webp",
    },
    {
      id: 2,
      name: "Yield-backed Stablecoin ",
      action: "Unlock liquidity with BYD",
      desc: "Mint BYD against your yield-generating LP tokens to stay liquid and productive at the same time",
      imgX1: "/What_is_Backyard/Stablecoin_x1.webp",
      imgX2: "/What_is_Backyard/Stablecoin_x2.webp",
    },
    {
      id: 3,
      name: "Boost DeFi Liquidity",
      action: "Boost protocols, earn more",
      desc: "Your liquidity empowers DeFi — vote for pools, earn bribes, and maximize your rewards.",
      imgX1: "/What_is_Backyard/Boost_x1.webp",
      imgX2: "/What_is_Backyard/Boost_x2.webp",
    },
  ];
  return (
    <div className="mt-[119px] mb-20">
      <h2 className="font-bold text-3xl font-family-second">
        What is Backyard?
      </h2>
      <Swiper
        className="space-y-4 flex flex-col"
        modules={[Pagination]}
        speed={1000}
        pagination={{
          clickable: true,
          el: ".my-custom-pagination",
        }}
        spaceBetween={15}
        resistanceRatio={0}
        watchOverflow={true}
        slidesPerView={1}
        breakpoints={{
          1392: {
            // 3xl
            slidesPerView: dataBackyard.length, // всі елементи в ряд
            spaceBetween: 45,
            allowTouchMove: false, // відключає свайп
          },
        }}>
        {dataBackyard.map(({ id, name, action, desc, imgX1, imgX2 }) => (
          <SwiperSlide key={id}>
            <div className="flex flex-col items-center max-2xl:max-w-[550px] max-2xl:mx-auto 2xl:flex-row-reverse 2xl:mt-11 2xl:justify-between 3xl:flex-col ">
              <picture className="block ">
                <source srcSet={`${imgX1} x1, ${imgX2} x2`} />
                <img
                  className="mx-auto 2xl:mx-0 2xl:w-[245px]"
                  width={179}
                  height={179}
                  src={imgX2}
                  alt="Aggregator"
                />
              </picture>
              <div className="2xl:w-2/3 3xl:w-[360px]">
                <div className="bg-gray-white rounded-full p-3 flex items-center justify-center relative h-14 ">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black w-8 h-8 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">{id}</span>{" "}
                  </div>

                  <h3 className="text-center text-xl font-semibold">{name} </h3>
                </div>
                <div className="p-8 bg-gray-white rounded-4xl mt-4 ">
                  <h4 className="text-black-850 font-extrabold text-lg text-center 3xl:text-xl font-family-second">
                    {action}{" "}
                  </h4>
                  <p className="font-medium text-sm text-gray-250 mt-3 3xl:text-base">
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}{" "}
      </Swiper>{" "}
      <div className="my-custom-pagination 3xl:hidden"></div>
    </div>
  );
}
