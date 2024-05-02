import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const MyAsyncRedux = lazy(() => import("../pages/MyAsyncRedux"));
const MyForm = lazy(() => import("../pages/MyForm"));
const MyRedux = lazy(() => import("../pages/MyRedux"));
const MyEseEffect = lazy(() => import("../pages/MyEseEffect"));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>loading ...</div>}>
        <Routes>
          <Route path="/myasync" element={<MyAsyncRedux />} />;
          <Route path="/myform" element={<MyForm />} />;
          <Route path="/myredux" element={<MyRedux />} />;
          <Route path="/myuse" element={<MyEseEffect />} />;
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
