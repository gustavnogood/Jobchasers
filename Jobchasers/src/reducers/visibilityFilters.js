const visibilityFilter = (state = "Rensa", action) => {
    switch (action.type) {
        case "SET_VISIBILITY_FILTER":
            return action.filter;
        default:
            return state;
    }
}

export default visibilityFilter;