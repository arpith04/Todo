import React, { useState } from 'react';
import Form from './components/Form';
import Todo from './components/Todo';
import './index.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteAll } from './redux/todoapp/actions/Actions';


const App = () => {
    const [editFormVisibility, setEditFormVisibility] = useState(false)

    const [editTodo, setEditTodo] = useState('')

    const handleEditClick = (todo) => {
        setEditFormVisibility(true)
        setEditTodo(todo)
    }

    const cancelUpdate = () => {
        setEditFormVisibility(false)
    }

    const todos = useSelector((state) => state.operationsReducer)
    const dispatch = useDispatch();
    return (
        <div className='wrapper'>
            <h1 className='text-center'>TODO APP USING REACT-REDUX</h1>
            <Form editFormVisibility={editFormVisibility} editTodo={editTodo} cancelUpdate={cancelUpdate} />
            <Todo handleEditClick={handleEditClick} editFormVisibility={editFormVisibility} />
            {todos.length > 1 && (
                <button className='btn btn-danger btn-md delete-all'
                    onClick={() => dispatch(deleteAll())}>DELETE ALL</button>
            )}
        </div>
    );
}

export default App;
