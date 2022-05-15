const counterReducer = (state = 6, action) => {
    switch (action.type) {
        case 'ASCENDING':
            return state + action.payload;
        case 'DESCENDING':
            return state - 1;
        default:
            return state;
    }
}
export default counterReducer