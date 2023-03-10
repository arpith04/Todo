export const ADD_TODO = 'ADD_TODO'
export const DELETE_ALL = 'DELETE_ALL'
export const REMOVE_TODO = 'REMOVE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const UPDATE_CHECKBOX = 'UPDATE_CHECKBOX'

export default {
    name: 'todo',

    reducer: (state = {
        todoList: localStorage.getItem("Todos")
            ? JSON.parse(localStorage.getItem("Todos"))
            : []
    }, action) => {
        switch (action.type) {
            case ADD_TODO:
                return { ...state, todoList: [...state.todoList, action.payload] }
            // return [...state, action.payload]
            case DELETE_ALL:
                return { todoList: [] }
            case REMOVE_TODO:
                return { ...state, todoList: state.todoList.filter((todo) => todo.id !== action.payload) }
            // return state.filter((todo) => todo.id !== action.payload)
            case UPDATE_TODO:
                let data = action.payload;
                return {
                    ...state, todoList:
                        state.todoList.map((item) => {
                            if (item.id === data.id) {
                                item.id = data.id;
                                item.todo = data.todo;
                                item.completed = data.completed;
                            }
                            return item;
                            // updatedArray.push(item);

                        })
                }
            // state.map((item) => {
            //     if (item.id === data.id) {
            //         item.id = data.id;
            //         item.todo = data.todo;
            //         item.completed = data.completed;
            //     }
            //     updatedArray.push(item);
            // })
            // return updatedArray;
            case UPDATE_CHECKBOX:
                return {
                    ...state, todoList:
                        state.todoList.map((item) => {
                            if (item.id === action.payload) {
                                item.completed = !item.completed;
                            }
                            return item;
                        })
                }
            // state.map((item) => {
            //     if (item.id === action.payload) {
            //         item.completed = !item.completed;
            //     }
            //     todoArray.push(item);
            // })
            // return todoArray;
            default:
                return state;
        }

        localStorage.setItem("Todos", JSON.stringify(state.todoList))
    },
    selectTodoList: state => state.todo.todoList,
    selectTodo: state => state.todo.todoList.todo,
    selectCompleted: state => state.todo.todoList.completed,

    doAdd: (payload) => ({
        type: ADD_TODO,
        payload
    }),

    doDelete: () => ({
        type: DELETE_ALL
    }),

    doRemove: (payload) => ({
        type: REMOVE_TODO,
        payload
    }),

    doUpdate: (payload) => ({
        type: UPDATE_TODO,
        payload
    }),

    doCheckBox: (payload) => ({
        type: UPDATE_CHECKBOX,
        payload
    }),
}