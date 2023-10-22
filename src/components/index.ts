import React from "react";

const Layout = React.lazy(() => import("./Layout"))
const Home = React.lazy(() => import("./Home"))
const CryptoList = React.lazy(() => import("./Crypto/CryptoList"))
const CryptoDetail = React.lazy(() => import("./Crypto/CryptoDetail"))
const News = React.lazy(() => import("./CryptoNews"))

export {
  CryptoDetail, CryptoList, Home, Layout, News
};

