import uuid from 'uuid/dist/v1'

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {
                title: action.task.title,
                author: action.task.author,
                id: uuid()
            }]
        case 'REMOVE_TODO':
            return state.filter(task => task.id !== action.id)
        default:
            return state
    }
}