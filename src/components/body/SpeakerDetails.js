import React from "react";

const SpeakerDetails = (props) => {
    return (
        <div>
            <div class="col-md-4 col-sm-6 feature">
                <img src={props.speaker.image} class="speaker-img" />
                <h3>{props.speaker.name}</h3>
                <p>
                    {props.speaker.description}
                </p>
                <ul class="speaker-social">
                    <li>
                        <a href="#"><span class="ti-facebook"></span></a>
                    </li>
                    <li>
                        <a href="#"><span class="ti-twitter-alt"></span></a>
                    </li>
                    <li>
                        <a href="#"><span class="ti-linkedin"></span></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SpeakerDetails