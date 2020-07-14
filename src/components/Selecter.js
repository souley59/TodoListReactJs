import React from 'react';

const backgroundSelect = {
    height: 'auto',
    width: '100%',
    background: 'rgb(42, 72, 107)',
    background: '-moz-linear-gradient(left, rgba(42, 72, 107, 1) 0%, rgba(80, 122, 167, 1) 100%)',
    background: '-webkit-linear-gradient(left, rgba(42, 72, 107, 1) 0%, rgba(80, 122, 167, 1) 100%)',
    background: 'linear-gradient(to right, rgba(42, 72, 107, 1) 0%, rgba(80, 122, 167, 1) 100%)',
    filter: 'progid: DXImageTransform.Microsoft.gradient( startColorstr="#2a486b", endColorstr="#507aa7", GradientType=1)',
}
const selectStyle = {
    width: '95%',
    margin: 'auto',
}


function Selecter() {


    return (
        <div style={backgroundSelect}>
            <select id="activitySelect" className="form-control form-control-lg" style={selectStyle} /* selected={props.handlerSelect} */ >
                <option hidden selected>Select activity</option>
                <option name="shopping" value="shopping:" id="shopping"> Shopping activity</option>
                <option name="administrative" value="administrative:" id="administrative" > Administrative activity</option>
                <option name="sports" value="sports:" id="sports" > Sports activity</option>
                <option name="works" value="works:" id="works " > Works activity</option>
                <option name="works" value="works:" id="familly " > familly activity</option>
            </select>
        </div>

    );

}

export default Selecter;