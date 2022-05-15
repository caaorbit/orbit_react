const isLoggedReducer = (state = false, action) => {
    console.log('me just here no worries');
    switch (action.type) {
        case 'IS_LOGIN':
            return !state;
        default:
            return state;
    }
}
export default isLoggedReducer;