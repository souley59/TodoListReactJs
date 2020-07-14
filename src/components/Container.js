import React from 'react';
import './Header.css';


function Container(props) {


    const containerStyle = {
        marginTop: '10%',
        height: 'auto',
        background: 'rgb(42, 72, 107)',
        background: '-moz-linear-gradient(left, rgba(42, 72, 107, 1) 0%, rgba(80, 122, 167, 1) 100%)',
        background: '-webkit-linear-gradient(left, rgba(42, 72, 107, 1) 0%, rgba(80, 122, 167, 1) 100%)',
        background: 'linear-gradient(to right, rgba(42, 72, 107, 1) 0%, rgba(80, 122, 167, 1) 100%)',
        filter: 'progid: DXImageTransform.Microsoft.gradient( startColorstr="#2a486b", endColorstr="#507aa7", GradientType=1)',
        paddingTop: '25px',
        fontSize: 'xx-large',
        color: 'whitesmoke',
    }
    const saisieStyle = {
        textAlign: 'center'
    }


 
    return (
        <div className="container" style={containerStyle}>
            <div className="bar">
                <h3>To do list<span>  </span>
                    <i className="far fa-file-alt" id="listItem" /></h3>
            </div><br />

            <input id="saisie" value={props.val} className="form-control form-control-lg" type="text" placeholder="saisie de tâches" style={saisieStyle} onChange={props.handler} /><br></br>

        </div>


    );
}

export default Container;