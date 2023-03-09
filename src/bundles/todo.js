export const ADD_TODO = 'ADD_TODO'
export const DELETE_ALL = 'DELETE_ALL'
export const REMOVE_TODO = 'REMOVE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const UPDATE_CHECKBOX = 'UPDATE_CHECKBOX'

export default {
    name: 'todo',

    reducer: (state = [
        { id: 1, todo: 'Buy Laptop', completed: false },
        { id: 2, todo: 'Master Redux', completed: false },
        { id: 3, todo: 'Watering Plants', completed: true },
    ], action) => {
        switch (action.type) {
            case ADD_TODO:
                return [...state, action.payload]
            case DELETE_ALL:
                return []
            case REMOVE_TODO:
                return state.filter((todo) => todo.id !== action.payload)
            case UPDATE_TODO:
                let data = action.payload;
                const updatedArray = []
                state.map((item) => {
                    if (item.id === data.id) {
                        item.id = data.id;
                        item.todo = data.todo;
                        item.completed = data.completed;
                    }
                    updatedArray.push(item);
                })
                return updatedArray;
            case UPDATE_CHECKBOX:
                let todoArray = [];
                state.map((item) => {
                    if (item.id === action.payload) {
                        item.completed = !item.completed;
                    }
                    todoArray.push(item);
                })
                return todoArray;
            default:
                return state;
        }
    },
    selectId: state => state.id,
    selectTodo: state => state.todo,
    selectCompleted: state => state.completed
}