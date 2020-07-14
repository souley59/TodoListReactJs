
import React from 'react';

const bouttonsStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    height: 'auto',
    width: '100%',
    background: 'rgb(42, 72, 107)',
    background: '-moz-linear-gradient(left, rgba(42, 72, 107, 1) 0%, rgba(80, 122, 167, 1) 100%)',
    background: '-webkit-linear-gradient(left, rgba(42, 72, 107, 1) 0%, rgba(80, 122, 167, 1) 100%)',
    background: 'linear-gradient(to right, rgba(42, 72, 107, 1) 0%, rgba(80, 122, 167, 1) 100%)',
    filter: 'progid: DXImageTransform.Microsoft.gradient( startColorstr="#2a486b", endColorstr="#507aa7", GradientType=1)',
    color: 'whitesmoke',
    paddingTop: '5%',
    paddingBottom: '5%',
    
}
const boutSyle = {
    width: '33%',
    paddingLeft:'0',
    paddingRight:'0',
    borderRadius:'15px'
}

function Commander(props) {
    

    return (

        <div id="bouttons" style={bouttonsStyle}>
            <button type="button" className="btn btn-light" id="valider" value="insert list" style={boutSyle} onClick={props.handler} >insert list</button>
            <button type="button" className="btn btn-light" id="reset" value="reset selected" style={boutSyle} onClick={props.handlerReset}>reset selected</button>
            <button type="button" className="btn btn-light" id="resetAll" value="reset all" style={boutSyle} onClick={props.handlerResetAll}>reset all</button>
        </div>
    );

}

export default Commander;