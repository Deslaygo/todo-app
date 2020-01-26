const SET_TODOS = 'SET_TODOS';
function todoReducer(state, action){
    switch (action.type) {
        case SET_TODOS:
            state  =action.payload;
            break;
        default:
            return state;
            break;
    }
}
export {todoReducer,SET_TODOS};
