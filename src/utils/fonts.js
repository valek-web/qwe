import localFont from "next/font/local";

export const tiktokSans = localFont({
  src: [
    { path: "./../../public/fonts/TikTokSans_Light.ttf", weight: "300" },
    { path: "./../../public/fonts/TikTokSans_Regular.ttf", weight: "400" },
    { path: "./../../public/fonts/TikTokSans_Medium.ttf", weight: "500" },
  ],
});

export const montserrat = localFont({
  src: [
    { path: "./../../public/fonts/Montserrat_Light.ttf", weight: "300" },
    { path: "./../../public/fonts/Montserrat_Regular.ttf", weight: "400" },
  ],
});