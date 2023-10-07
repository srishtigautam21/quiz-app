import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { MainPage, ReactPage, HtmlPage, CssPage } from "./pages";
import { QuestionsPage } from "./pages/QuestionsPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/questions' element={<QuestionsPage />} />
        {/* <Route path='/cssquestions' element={<CssPage />} />
        <Route path='/reactquestions' element={<ReactPage />} />
        <Route path='/htmlquestions' element={<HtmlPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
