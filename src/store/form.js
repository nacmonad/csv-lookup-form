const initialState = {
    dimensions: {
      units: 'inches',
      height: 30,
      width: 30
    },
    selectedWorksheet:'',
    worksheets:[],
    selectedPriceGroup: "PG1",
    priceGroups:["PG1","PG2","PG3","PG4","PG5","PG6","PG7","PG8","PG9","PG10"]
}

const form = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
      case "SET_FORM":
        return action.payload;
      case 'WORKBOOK_IMPORT_SUCCESS':
        return {
            ...state,
            selectedWorksheet:action.payload.SheetNames[0],
            worksheets:action.payload.SheetNames
        }
      case 'SELECT_WORKSHEET':
        return {
            ...state,
            selectedWorksheet:action.payload,
            activeSheet:state.worksheets.find(ws=>ws)
        }
      default:
        return state
    }
  }
  export default form
