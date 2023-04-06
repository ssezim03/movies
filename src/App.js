import './App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import Popular from "./page/Popular";
import Top from "./page/Top";
import Details from "./components/Details";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Person from "./page/Person";
import Search from "./page/Search";

function App() {
    return (
        <div id="app">
            <Header/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/popular"} element={<Popular/>}/>
                <Route path={"/top"} element={<Top/>}/>
                <Route path={`/movie/details/:id`} element={<Details/>}/>
                <Route path={`/movie/person/:id`} element={<Person/>}/>
                <Route path={`/movie/search/:movieName`} element={<Search/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
