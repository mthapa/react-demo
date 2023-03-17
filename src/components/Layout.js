import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import MainPane from "./MainPane";
import SecondPane from "./SecondPane";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header></Header>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPane />}></Route>
            <Route path="/second" element={<SecondPane />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Layout;
