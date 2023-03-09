import React, { useState } from 'react';
import Form from './components/Form';
import Todo from './components/Todo';
import './index.css'
// import { useDispatch, useSelector } from 'react-redux';
import { deleteAll } from './redux/todoapp/actions/Actions';
import { connect } from 'redux-bundler-react';


const App = (props) => {
    const { todoList } = props;
    console.log(props)
    const [editFormVisibility, setEditFormVisibility] = useState(false)

    const [editTodo, setEditTodo] = useState('')

    const handleEditClick = (todo) => {
        setEditFormVisibility(true)
        setEditTodo(todo)
    }

    const cancelUpdate = () => {
        setEditFormVisibility(false)
    }

    // const todos = useSelector((state) => state.operationsReducer)
    // const dispatch = useDispatch();
    return (
        <div className='wrapper'>
            <h1 className='text-center'>TODO APP USING REACT-REDUX</h1>
            <Form
                editFormVisibility={editFormVisibility}
                editTodo={editTodo}
                cancelUpdate={cancelUpdate}
                doAdd={props.doAdd}
                doUpdate={props.doUpdate}
            />
            <Todo
                todoList={props.todoList}
                doRemove={props.doRemove}
                doCheckBox={props.doCheckBox}
                handleEditClick={handleEditClick}
                editFormVisibility={editFormVisibility}
            />
            {todoList?.length > 1 && (
                <button className='btn btn-danger btn-md delete-all'
                    onClick={() => { props.doDelete() }}>DELETE ALL</button>
            )}
        </div>
    );
}

export default connect(
    'selectTodoList',
    'selectTodo',
    'selectCompleted',
    'doAdd',
    'doRemove',
    'doDelete',
    'doUpdate',
    'doCheckBox',
    App
)
