import React from 'react';

const spanStyle = {
    color: 'gray', textDecoration: 'underline'
}

const h3Styles= {    
    height:'100px',
    background:'rgb(42, 72, 107)',
    background: '-moz-linear-gradient(left, rgba(42, 72, 107, 1) 0%, rgba(80, 122, 167, 1) 100%)',
    background: '-webkit-linear-gradient(left, rgba(42, 72, 107, 1) 0%, rgba(80, 122, 167, 1) 100%)',
    background: 'linear-gradient(to right, rgba(42, 72, 107, 1) 0%, rgba(80, 122, 167, 1) 100%)',
    filter: 'progid: DXImageTransform.Microsoft.gradient( startColorstr="#2a486b", endColorstr="#507aa7", GradientType=1)',
    paddingTop:'25px',
    fontSize: 'xx-large',
    marginTop: '0',
    color: 'whitesmoke',
}



function Header() {
    return (
        <div>
            <h3 className="h3Style" style={h3Styles}><span style={spanStyle}>To do list:</span> Bootstrap & React  </h3>
        </div>
    );
}

export default Header;