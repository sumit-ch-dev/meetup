import React from "react";
import Header from './components/header/Header';
import Navigation from './components/header/Navigation';
import Description from './components/body/Description';
import Footer from './components/footer/Footer';
import SpeakerList from "./components/body/SpeakerList";
import Tickets from "./components/body/Tickets";


const MainComponent = () => {
    return (
        <div>
            <Navigation/>
            <Header/>
            <Description/>
            <SpeakerList/>
            <Tickets/>
            <Footer/>
        </div>
    )
}


export default MainComponent;