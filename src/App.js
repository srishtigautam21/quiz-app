import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { MainPage, JsPage, ReactPage, HtmlPage, CssPage } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      {/* <MainPage /> */}
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/jsquestions' element={<JsPage />} />
        <Route path='/cssquestions' element={<CssPage />} />
        <Route path='/reactquestions' element={<ReactPage />} />
        <Route path='/htmlquestions' element={<HtmlPage />} />
      </Routes>
    </>
  );
}

export default App;
