import React from "react";
import NavPane from "./SchedulePanes";

const EventSchedule = () => {
    return (
        <div>
            <div class="container">
                <div class="row me-row schedule" id="schedule">
                    <h2 class="row-title content-ct">Event Schedule</h2>
                    <div class="col-md-12">
                        <NavPane/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventSchedule;