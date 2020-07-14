import React from "react";
const todoStyle={
    height: 'auto',
    width: '100%',
    background: 'rgb(42, 72, 107)',
    background: '-moz-linear-gradient(left, rgba(42, 72, 107, 1) 0%, rgba(80, 122, 167, 1) 100%)',
    background: '-webkit-linear-gradient(left, rgba(42, 72, 107, 1) 0%, rgba(80, 122, 167, 1) 100%)',
    background: 'linear-gradient(to right, rgba(42, 72, 107, 1) 0%, rgba(80, 122, 167, 1) 100%)',
    filter: 'progid: DXImageTransform.Microsoft.gradient( startColorstr="#2a486b", endColorstr="#507aa7", GradientType=1)',
}

function ToDoList(props) {
    
    return (
        <div className="saisie" style={todoStyle}>{props.handler}</div>
    )
}
export default ToDoList;