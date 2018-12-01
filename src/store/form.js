const initialState = {
    dimensions: {
      units: 'inches',
      height: 30,
      width: 30
    },
    selectedWorksheet:'',
    worksheets:[],
    selectedPriceGroup: "PG1",
    priceGroups:["PG1","PG2","PG3","PG4","PG5","PG6","PG7","PG8","PG9","PG10"],
    priceGroupMap:["A5:S24", "A30:S49", "A55:S74", "A80:S99","A105:S124", "A130:S149", "A155:S174","A180:S199","A205:S224","A230:S249"],
    showValance: false,
    selectedValance: 'R Valance',
    valances:["R Valance", "V Valance", "I Valance"],
    valanceMap:["A1:S13","A1:S7","A1:S4"],
    selectedValanceOption:"",
    valanceOptions: [],
}

const form = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
      case "SET_FORM":
        return {
          ...state,
          ...action.payload
        };
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
            selectedValance: `${action.payload.charCodeAt(0).toUpperCase()} Valance`,
            activeSheet:state.worksheets.find(ws=>ws)
        }
      default:
        return state
    }
  }
  export default form
