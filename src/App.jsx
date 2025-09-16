import { Route, Routes } from "react-router-dom";
import { Fragment, lazy, Suspense } from "react";
import Header from "./components/heder/header";

const Home = lazy(() => import("./page/Home"));

function App() {
  return (
    <Fragment>
      <Header />
      <Suspense fallback={null}>
        <main>
          <img
            className="absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-5 h-[550px]"
            src="/bg.png"
            alt="bg"
          />
          <div className="mx-auto max-w-7xl px-5 2xl:px-8 mt-6 2xl:mt-[62px] 3xl:mt-[85px]">
            {" "}
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="*" element={} /> */}
            </Routes>
          </div>
        </main>
      </Suspense>
    </Fragment>
  );
}

export default App;
