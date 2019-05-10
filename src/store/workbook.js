const initialState = {
    SheetNames:[],
    Sheets:[],
}

const workbook = (state = initialState, action) => {

  switch (action.type) {
    case 'WORKBOOK_IMPORT_SUCCESS':
      return {
          ...state,
          ...action.payload
      }
    case 'WORKBOOK_IMPORT_FAIL':
      return state;
    default:
      return state
  }
}
export default workbook
