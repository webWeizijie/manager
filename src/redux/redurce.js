function redurce(state = {navTitle:'首页'}, action) {
    console.log(action)
    switch (action.type) {
        case 'changeNavTitle':
            return {
                ...state,
                navTitle: action.payload.navTitle
            }
        default:
            return state;
    }
}

module.exports = redurce
