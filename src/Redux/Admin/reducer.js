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
                details: state.details.map((item)=> 
                item.id === payload.id ? {...item, status:(item.status==="IN PROGRESS")?("PENDING"):"IN PROGRESS"} : item
                )
            }
        }
        case "SETLED_DETAILS": {
            return {
                ...state,
                details: state.details.map((item)=> 
                item.id === payload.id ? {...item, status:(item.status==="SETTLED")?("IN PROGRESS"):"SETTLED"} : item
                )
            }
        }
        case "GET_DETAIL":{
            return {
                ...state,
                details:payload.details,

            }
        }
        case "FILTRE_DATE_WISE": {
            return {
                ...state,
                details: state.details.sort((a, b) => Date.parse(new Date(a.initialRegistration.split("/").reverse().join("-"))) - Date.parse(new Date(b.initialRegistration.split("/").reverse().join("-"))))
            
            }
        }
        default: return state
    }
};

export { reducer}