const initialState = {
    SheetNames:[],
    Sheets:[],
}

const workbook = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'WORKBOOK_IMPORT_SUCCESS':
      return {
          ...state,
          ...action.payload
      }
    case 'WORKBOOK_IMPORT_FAIL':
      console.log("WORKBOOK_IMPORT_FAIL")
      console.log(action.payload)
      return state;
    default:
      return state
  }
}
export default workbook
