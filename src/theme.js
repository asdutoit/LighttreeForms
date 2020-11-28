import { yellow } from "@material-ui/core/colors";

const theme = {
  colors: {
    white: "#FFF",
    whiteTrans: "rgba(255, 255, 255, 0.11)",
    white2: "#f6f7f8",
    black: "#000",
    blackTrans: "rgba(40, 40, 40, 0.11)",
    black2: "#282828",
    gray2: "#37465c",
    red: "#e5375e",
    orange: "#ed6c4d",
    yellow: "#fdcd39",
    green: "#73c59e",
    teal: "#238ea4",
    blue: "#27a7df",
    blue2: "#15aae6",
    blue3: "#1980ba",
    blueTrans: "rgba(74, 144, 226, 0.21)"
  },
  gradients: {},
  breakpoints: {
    xs: "(min-width: 26em)", //            416                    Big Phones
    sm: "(min-width: 48em)", //            768 x 576      Tablet
    md: "(min-width: 64em)", //           1024 x 768      Laptop
    lg: "(min-width: 85.375em)", //  1366 x 768      Laptop Large
    fhd: "(min-width: 120em)", //         1920 x 1080    Desktop 1080p
    qhd: "(min-width: 160em)", //     2560 x 1440     Desktop 1440p
    uhd: "(min-width: 240em)" //     3840 x 2560    Desktop 4K
  }
  // palette: {
  //   primary: {
  //     light: yellow[600],
  //     main: yellow[700],
  //     dark: yellow[800],
  //     contrastText: yellow[700]
  //   },
  //   text: {
  //     primary: yellow[700]
  //   }
  // }
};

export default theme;
