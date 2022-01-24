

export const addDetails = ({name,date,purpose,amount,status,id}) => {
    return {
        type: "ADD_DETAILS",
        payload: {name:name,
            date:date,
            purpose:purpose,
            status: status,
            amount: amount,
            id: id
        }
    };
}
export const getDetails = (details)=>{
    return {
        type: "GET_DETAILS",
        payload: {
            details: details
        }
    };
};

