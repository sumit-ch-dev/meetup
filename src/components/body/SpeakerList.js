import React, { Component } from "react";
import SPEAKERS from "../../data/speaker";
import SpeakerDetails from "./SpeakerDetails";

class SpeakerList extends Component {
    render() {
        const speaker = SPEAKERS.map(item => {
            return <SpeakerDetails
                speaker={item} key={item.id} />
        })
        return (
            <div>
                <div className="container container-fluid">
                    <div className="row me-row content-ct speaker" id="speakers">
                        <h2 className="row-title">Meet the Speakers</h2>
                        {speaker}
                    </div>
                </div>
            </div>
        )
    }
}

export default SpeakerList;