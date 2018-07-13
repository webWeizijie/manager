module.exports = {
    redurce
}

function redurce(state = {}, action) {
    switch (action.type) {
        case 'changeNavTitle':
            return {
                ...state,
                navTitle: action.NavTitle
            }
        default:
            break;
    }
}