export const SELECT_WORKSHEET = 'SELECT_WORKSHEET';
export const SET_FORM = 'SET_FORM';
export const DOWNLOAD_FORM_REQUESTED = 'DOWNLOAD_FORM_REQUESTED';

export const downloadFormRequested = (form) => {
    return {
        type: DOWNLOAD_FORM_REQUESTED,
        payload: form
    }
}

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
