import { Suspense } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  CryptoDetail,
  CryptoList,
  ErrorBoundary,
  Home,
  Layout,
  News,
} from "../components";
import GlobalLoader from "../components/Common/Loader";

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Suspense fallback={<GlobalLoader />}>
          <Layout />
        </Suspense>
      }
      errorElement={<ErrorBoundary />}
    >
      <Route
        index
        element={
          <Suspense fallback={<GlobalLoader />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="currencies"
        element={
          <Suspense fallback={<GlobalLoader />}>
            <CryptoList />
          </Suspense>
        }
      />
      <Route
        path="currency/:cId"
        element={
          <Suspense fallback={<GlobalLoader />}>
            <CryptoDetail />
          </Suspense>
        }
      />
      <Route
        path="news"
        element={
          <Suspense fallback={<GlobalLoader />}>
            <News />
          </Suspense>
        }
      />
      {/* <Route path="*" element={} /> */}
    </Route>
  )
);
