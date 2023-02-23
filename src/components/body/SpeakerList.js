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
                <div>
                    <div class="row me-row content-ct speaker" id="speakers">
                        <h2 class="row-title">Meet the Speakers</h2>
                        {speaker}
                    </div>
                </div>
            </div>
        )
    }
}

export default SpeakerList;