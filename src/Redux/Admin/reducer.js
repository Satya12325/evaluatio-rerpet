const initialState = {
    details: [],
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "REMOVE_DETAILS": {
            return {
                ...state,
                details: state.details.filter((item) => item.id !== payload?.id)
            };
        }
        case "TOGGLE_DETAILS":{
            return {
                ...state,
                details: 
                state.details.id === payload.id
            ? { ...state.details, status: !state.details.status }
            : state.details
            }
        }
        case "SETLED_DETAILS": {
            return {
                ...state,
                details: 
                state.details.id === payload.id
            ? { ...state.details, status: !state.details.status }
            : state.details
            }
        }
        default: return state
    }
};

export { reducer}