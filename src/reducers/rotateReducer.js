export default (state, action) => {
    switch (action.type) {
        case 'rotate':
            return {
                rotating: action.payload
            };
            //break;

        default:
            return state;
            // break;
    }
};