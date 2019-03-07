import shortid from 'shortid';

const id = shortid.generate();
const initialState = {
    projectId: id,
    clientName: `client-${id}`,
    selectedBlindType:'',
    worksheets:[],
    cordPlacements:['Left', 'Right'],
    endCapOptions:['Gray', 'Blue', 'White'],
    powerControlOptions:[{type:'SG DC Charger', price:36.00},{type:'SG Solar Panel', price:84.00}],
    remoteOptions:[{type:'SG 1 Channel Standard', price:60.00},{type:'SG 15 Channel Standard', price:74.00},{type:'SG 1 Channel Touch', price:91.00},{type:'SG 15 Channel Touch', price:105.00},{type:'SG Connector Control Hub', price:393.00}],
    fabricToPriceGroupMapping: {
      "Cottonwood":"PG1",
      "Linen":"PG1",
      "Vinyl 4 Ply":"PG1",
      "Bali":"PG2",
      "Boardwalk":"PG2",
      "CS 103":"PG2",
      "CS 105":"PG2",
      "Gabardine":"PG2",
      "Merino":"PG2",
      "Petals":"PG2",
      "Satin Privacy":"PG2",
      "Wool Privacy":"PG2",
      "York_solid":"PG2",
      "CS 101":"PG3",
      "Denim Privacy":"PG3",
      "DX 201":"PG3",
      "EZ 900":"PG3",
      "Glow":"PG3",
      "Lattice Translucent":"PG3",
      "Matisse":"PG3",
      "Water Colour":"PG3",
      "Berber":"PG4",
      "Bling":"PG4",
      "Earth 2":"PG4",
      "Flicker Translucent":"PG4",
      "Lavish":"PG4",
      "Reed":"PG4",
      "Vinyl Wideshade":"PG4",
      "Lattice Opaque":"PG5",
      "Mist":"PG5",
      "Wool Opaque":"PG5",
      "Apex View 4-5%":"PG6",
      "Denim Opaque":"PG6",
      "ELT 303":"PG6",
      "EPT 301":"PG6",
      "Rococo":"PG6",
      "Satin Opaque":"PG6",
      "Apex View 2-3%":"PG7",
      "Apex Reflect 2-3%":"PG7",
      "Basket Privacy":"PG7",
      "Matrix 2%":"PG7",
      "Z Splendor":"PG7",
      "Summit Privacy":"PG7",
      "Wave":"PG7",
      "Flicker Opaque":"PG8",
      "Summit Reflect":"PG8",
      "Paper":"PG9",
      "Trilogy":"PG9",
      "Apex Opaque":"PG10",
      "Basket Opaque":"PG10",
      "Bubble":"PG10",
      "CSR 103":"PG10",
    },
    hembars:['Plain Hem', 'Slim Bar', 'Wrapped Accubar Hem Bar & Wrapped Hem Bar'],
    motorizations:['Sun Glo','Somfy'],
    priceGroups:["PG1","PG2","PG3","PG4","PG5","PG6","PG7","PG8","PG9","PG10"],
    priceGroupMap:["A5:S24", "A30:S49", "A55:S74", "A80:S99","A105:S124", "A130:S149", "A155:S174","A180:S199","A205:S224","A230:S249"],
    priceGroupToValenceMapping: {
      "PG1":[],
      "PG2":[],
      "PG3":[],
      "PG4":[],
      "PG5":[],
      "PG6":[],
      "PG7":[],
      "PG8":[],
      "PG9":[],
      "PG10":[]
    },
    rooms:[{
      id:shortid.generate(),
      name:'Room 1',
      description:'',
      windows:[
        {
          id:shortid.generate(),
          name: 'Window 1',
          dimensions: {
            units: 'inches',
            height: 30,
            width: 30
          },
          selectedValanceOption:'Decora 8',
          selectedBlindType:'Roller',
          selectedFabric:'Cottonwood',
          selectedHem:'Plain Hem',
          selectedEndCap:'Gray',
          selectedMotorization:'Sun Glo',
          selectedPriceGroup:'PG1',
          showMotorization:false,
          selectedCordPlacement: 'Left',
          selectedPowerControl:'SG DC Charger',
          selectedRemote:'SG 1 Channel Standard',
          showValance:false,
          total:155.95
        }
      ]
    }],
    selectedRoom: 0,
    selectedWindow: 0,
    selectedValance: 'R Valance',
    valances:["R Valance", "V Valance", "I Valance"],
    valanceMap:["A1:S13","A1:S7","A1:S4"],
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
            selectedBlindType:action.payload.SheetNames[0],
            worksheets:action.payload.SheetNames
        }
      case 'SELECT_WORKSHEET':
        return {
            ...state,
            selectedBlindType:action.payload,
            selectedValance: `${action.payload.charCodeAt(0).toUpperCase()} Valance`,
            activeSheet:state.worksheets.find(ws=>ws)
        }
      default:
        return state
    }
  }
  export default form
