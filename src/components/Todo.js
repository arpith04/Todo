import React from 'react';
import Icon from 'react-icons-kit';
import { trash } from 'react-icons-kit/feather/trash'
import { edit2 } from 'react-icons-kit/feather/edit2'

const Todo = ({ handleEditClick, editFormVisibility, todoList, doRemove, doCheckBox }) => {
    // const dispatch = useDispatch()
    // const todos = useSelector((state) => state.operationsReducer)

    localStorage.setItem("Todos", JSON.stringify(todoList))

    return todoList.map((todo) => (
        <div key={todo.id} className='todo-box'>
            <div className='content'>
                {editFormVisibility === false && (
                    <input type="checkbox" className='actions-box' checked={todo.completed}
                        onChange={() => { doCheckBox(todo.id) }} />
                )}
                <p style={todo.completed === true ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>{todo.todo}</p>
            </div>
            <div className='actions-box'>
                {editFormVisibility === false && (
                    <div>
                        <span onClick={() => handleEditClick(todo)}><Icon icon={edit2} /></span>
                        <span onClick={() => doRemove(todo.id)}><Icon icon={trash} /></span>
                    </div>
                )}
            </div>
        </div>
    ))
}

export default Todo;
