import React from "react";
const ErrorBoundary = React.lazy(() => import("./Common/ErrorBoundary"));
const Layout = React.lazy(() => import("./Layout"))
const Home = React.lazy(() => import("./Home"))
const CryptoList = React.lazy(() => import("./Crypto/CryptoList"))
const CryptoDetail = React.lazy(() => import("./Crypto/CryptoDetail"))
const News = React.lazy(() => import("./CryptoNews"))

export {
  CryptoDetail, CryptoList, ErrorBoundary, Home, Layout, News
};

