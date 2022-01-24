export const toggleDetails = (id) => ({
    type: "TOGGLE_DETAILS",
    payload:{
        id:id
    }
});
export const removeDetails = (id) => ({
    type: "REMOVE_DETAILS",
    payload: {
        id: id
    }
});
export const setledDetails = (id) => ({
    type : "SETLED_DETAILS",
    payload: {
        id: id
    }
});