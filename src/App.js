import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './App.css';
import Home from "./component/Home/Home";
import Footer from "./component/shared/Footer";
import Header from "./component/shared/NavBar";
import BannerAd from "./component/views/Nesting/BannerAd";
import Native from "./component/views/Nesting/Native";
import PopUnder from "./component/views/Nesting/PopUnder";
import Skim from "./component/views/Nesting/Skim";

function App() {
  return (
    <div className="App">
      <Header/>
       <Routes>
        <Route path="/" element={<Home />}> 
            <Route path="" element={<BannerAd />} /> 
            <Route path="/bannerAd" element={<BannerAd />} /> 
            <Route path="/native" element={<Native />} />
            <Route path="/skim" element={<Skim />} />
            <Route path="/popUnder" element={<PopUnder />} /> 
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
