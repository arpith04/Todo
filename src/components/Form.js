import React, { useEffect, useState } from 'react';

const Form = ({ editFormVisibility, editTodo, cancelUpdate, doAdd, doUpdate }) => {

    const [todoValue, setTodoValue] = useState('')

    const [editValue, setEditValue] = useState('')
    useEffect(() => {
        setEditValue(editTodo.todo)
    }, [editTodo])

    const handleSubmit = (e) => {
        e.preventDefault();
        let date = new Date();
        let time = date.getTime();
        let todoObj = {
            id: time,
            todo: todoValue,
            completed: false
        }
        setTodoValue('')
        doAdd(todoObj)
    }

    const editSubmit = e => {
        e.preventDefault();
        let editObj = {
            id: editTodo.id,
            todo: editValue,
            completed: false
        }
        doUpdate(editObj)
    }

    return (
        <div>
            {editFormVisibility === false ? (
                <form className='form-group custom-form' onSubmit={handleSubmit}>
                    <label>Add your todo item</label>
                    <div className='input-and-btn'>
                        <input type="text" className='form-control' required value={todoValue}
                            onChange={e => setTodoValue(e.target.value)} />
                        <button type='submit' className='btn btn-secondary btn md'>ADD</button>
                    </div>
                </form>
            ) : (
                <form className='form-group custom-form' onSubmit={editSubmit}>
                    <label>Update your todo item</label>
                    <div className='input-and-btn'>
                        <input type="text" className='form-control' required
                            value={editValue || ""} onChange={e => setEditValue(e.target.value)} />
                        <button type='submit' className='btn btn-secondary btn md'>Update</button>
                    </div>
                    <button type='button' className='btn btn-primary btn-md back-btn'
                        onClick={cancelUpdate}>BACK</button>
                </form>
            )}
        </div>
    );
}

export default Form;
