export const SELECT_WORKSHEET = 'SELECT_WORKSHEET';
export const SET_FORM = 'SET_FORM';

export const setForm = (newForm) => {
    return {
        type: SET_FORM,
        payload: newForm
    }
}
export const selectWorksheet = (worksheet) => {
    return {
        type: SELECT_WORKSHEET,
        payload: worksheet
    }
}
