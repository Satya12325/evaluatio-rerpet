const initialstate = {
    details: [],
};

const Employreducer = (state = initialstate,{ type,payload}) => {
    switch(type) {
        case  "ADD_DETAILS":{
            return {
                ...state,
                details: [...state.details,payload.details]
            };
        }
        case "GET_DETAILS":{
            return {
                ...state,
                details:payload.details,

            }
        }
        default: return state
    }
};

export { Employreducer};
