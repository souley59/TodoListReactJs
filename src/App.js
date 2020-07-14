import React, { useState } from 'react';
import './App.css';

import Header from './components/Header.js';
import Container from './components/Container.js';
import Selecter from './components/Selecter.js';
import Commander from './components/Commander.js';
import ToDoList from './components/ToDoList.js'
import Footer from './components/Footer.js';

function App() {
    const [todo, setTodo] = useState('');
    const handleValueChange = (event) => setTodo(event.target.value);

    const [todos, setTodos] = useState([]);
    const handleValider = () => {
        setTodos([...todos, todo])
        setTodo('');
        console.log(todo)
    }

    const deleteTodo = (item) => {
        const array = [...todos];
        const index = array.indexOf(item);
        array.splice(index, 1);
        setTodos(array);

    }



    const renderTodos = () => {
        return todos.map((item, index) => {
            return (

                <div key={index} className="task"><div className="activitySelect">activity</div>
                    {item} <button className="close" onClick={() => deleteTodo(item)}>X</button>
                    <input type="checkbox" className="checkboxtodo" />
                </div>
            );

        });

    }

    const resetTodosAll = () => {
        setTodos([]);
    }

/*     const [select] = useState ([
        {label: "Shopping activity", value: "Shopping activity"},
        {label: "Administrative activity", value: "Administrative activity"},
        {label: "Sports activity", value: "Sports activity"},
        {label: "Works activity", value: "Works activity"},
        {label: "familly activity", value: "familly activity"}
    ]); */

    return (
        <div className="App" col-sm-12 >

            <Header />
            <div className="TodoList">
                <Container  handler={(event) => handleValueChange(event)} val={todo} />
                <Selecter /* handlerSelect={} */ />
                <Commander handler={() => handleValider()} handlerResetAll={() => resetTodosAll()} /><br />
                <ToDoList handler={renderTodos()} />
            </div><br />
            <Footer />
        </div>

    );
}

export default App;