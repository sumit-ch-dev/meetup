import React from "react";
import Event from "./Event";
import NavTabs from "./ScheduleTabs";


const NavPane = () => {
    return (
        <div>
            <NavTabs/>
            <div class="tab-content">
                <div role="tabpanel" class="tab-pane fade in active" id="day-1">
                    <div class="row">
                        <Event/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavPane;