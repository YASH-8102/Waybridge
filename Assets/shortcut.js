import { Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const bannerWidth = windowWidth;
const bannerHeight = (windowWidth * 9) / 7;
const top = bannerHeight - Math.floor((windowHeight * 60) / 100);
const topup = bannerHeight - Math.floor((windowHeight * 25) / 100);
const actualBannerHeight = bannerHeight - top;

let logoHeight, logotop;
if (windowWidth < 485) {
  if (windowHeight < 668) {
    logoHeight = bannerHeight * 0.42;
    logotop = actualBannerHeight - actualBannerHeight * 0.6 - logoHeight * 0.5;
  } else {
    logoHeight = bannerHeight * 0.52;
    logotop = actualBannerHeight - actualBannerHeight * 0.55 - logoHeight * 0.5;
  }
} else {
  logoHeight = bannerHeight * 0.4;
  logotop = actualBannerHeight - actualBannerHeight * 0.6 - logoHeight * 0.5;
}

const logoWidth = (logoHeight * 5) / 4;

const Values = {
  windowHeight,
  windowWidth,
  bannerHeight,
  bannerWidth,
  actualBannerHeight,
  top,
  topup,
  logoWidth,
  logoHeight,
  logotop,
};
export default Values;
