import React from "react";
import Header from './components/header/Header';
import Navigation from './components/header/Navigation';
import Description from './components/body/Description';
import Footer from './components/footer/Footer';
import SpeakerList from "./components/body/SpeakerList";
import Tickets from "./components/body/Tickets";
import EventSchedule from "./components/body/EventSchedule";


const MainComponent = () => {
    return (
        <div>
            <Navigation/>
            <Header/>
            <Description/>
            <SpeakerList/>
            <Tickets/>
            <EventSchedule/>
            <Footer/>
        </div>
    )
}


export default MainComponent;