import { Fragment } from "react";

export default function Hero() {
  return (
    <Fragment>
      <div className="flex ">
        <h1 className="flex flex-wrap gap-x-3 font-semibold text-6xl 2xl:2xl:w-3/4 2xl:text-5xl 3xl:text-[90px] font-family-second">
          The yield-backed stablecoin protocol boosting DeFi{" "}
          <span className="2xl:hidden">
            <picture>
              <source srcSet="/logo_x1.webp x1, /logo_x2.webp x2" />

              <img width={60} height={60} src="/logo_x2.webp" alt="logo" />
            </picture>
          </span>{" "}
          liquidity
        </h1>{" "}
        <picture className="max-2xl:hidden 2xl:w-1/4">
          <source srcSet="/hero/hero_x1.webp x1, /hero/hero_x2.webp x2" />

          <img
            className="3xl:w-[286px] 3xl:h-[297px]"
            width={152}
            height={152}
            src="/hero/hero_x2.webp"
            alt="logo"
          />
        </picture>
      </div>
      <p className="text-gray-300 text-xl font-semibold mt-3 2xl:mt-4 2xl:text-base 3xl:mt-0 3xl:text-2xl">
        Keep your yield working for you — we keep your liquidity accessible
      </p>
      <div className="font-semibold flex items-center gap-2 mt-9 2xl:mt-8 3xl:mt-[79px]">
        <button className="bg-black-800 rounded-full text-white w-1/2 py-[18px] 3xl:w-1/4 cursor-pointer hover:bg-black-800-hover transition-colors">
          Join Whitelist
        </button>
        <button className="bg-gray-100 rounded-full text-black-800 w-1/2 sm:max-w-1/3 py-[18px] flex items-center justify-center gap-2.5 3xl:w-1/5 cursor-pointer hover:bg-gray-100-hover transition-colors">
          Learn more{" "}
          <svg width={11} height={10} className="stroke-black-800">
            <use href="/icon.svg#icon-arrow"></use>
          </svg>
        </button>
      </div>
    </Fragment>
  );
}
