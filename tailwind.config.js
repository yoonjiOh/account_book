/** @type {import('tailwindcss').Config} */

/**
 * 스타일링 코드 생산성을 위해 Tailwind CSS 를 사용합니다.
 * TailwindCSS 의 기본 단위는 Rem 인데, figma 기준으로 pixel 단위로 작업을 하기 때문에 pixel 단위로 변경해주는 작업이 필요합니다.
 */
 const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
 const px0_500 = { ...Array.from(Array(501)).map((_, i) => `${i}px`) };
 const px0_1000 = { ...Array.from(Array(1001)).map((_, i) => `${i}px`) };
 const px0_2000 = { ...Array.from(Array(2001)).map((_, i) => `${i}px`) };
 
/* eslint-disable */
module.exports = {
  // Tailwind class name 을 사용하는 모든 파일 경로를 담는다. 경로에 있는 파일들을 기준으로 최종 css 파일이 생성된다.
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontSize: px0_500,
      spacing: px0_2000,
      lineHeight: px0_100,
      width: px0_1000,
      maxWidth: px0_2000,
      height: px0_1000,
      borderRadius: px0_100,
      backdropBlur: px0_100,
      textDecorationThickness: px0_100,
      margin: px0_100,

      // color name 은 https://colorbada.com/colorname/ 를 기준으로 하였습니다.
      // figma 에 나와있는 Hex code 를 가지고 위 사이트에서 검색한 후
      // 해당하는 name 이 없으면 유사한 color 의 name 으로 사용하였습니다.
      // color name 을 tailwilnd.config.js 에서 하나의 source 로 관리합니다.
      // 해당 프로젝트에서 사용되는 모든 color 는 tailwind.config.js 에서 관리합니다.
      colors: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
