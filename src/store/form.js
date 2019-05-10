 import shortid from 'shortid';

const id = shortid.generate();
const initialState = {
    projectId: id,
    clientName: `client-${id}`,
    selectedBlindType:'',
    worksheets:[],
    cordPlacements:['Left', 'Right'],
    endCapOptions:['White', 'Linen', 'Grey', 'Brown', 'Black', 'Blue' ],
    hemColorOptions:['White', 'Linen', 'Anodized', 'Dark Bronze', 'Black'],
    motorizationSeries:['Sun Glo','Somfy'],
    SomfyControlSensorOptions:[{type:`Telis 1 Channel RTS Remote Pure`, description:`Pure`, code:`T1P`, price:189.00},
    {type:`Telis 1 Channel RTS Remote Silver`, description:`Silver`, code:`T1S`, price:252.00},
    {type:`Telis 1 Channel RTS Remote Lounge`, description:`Lounge`, code:`T1L`, price:295.00},
    {type:`Telis 4 Channel RTS Remote Pure`, description:`Pure`, code:`T5P`, price:245.00},
    {type:`Telis 4 Channel RTS Remote Silver`, description:`Silver`, code:`T5S`, price:315.00},
    {type:`Telis 4 Channel RTS Remote Lounge`, description:`Lounge`, code:`T5L`, price:358.00},
    {type:`Telis 4 Modulis Channel RTS Remote w/ Scroll Wheel Pure`, description:`Pure`, code:`TM5P`, price:446.00},
    {type:`Telis 4 Modulis Channel RTS Remote w/ Scroll Wheel Silver`, description:`Silver`, code:`TM5S`, price:513.00},
    {type:`Telis 4 Modulis Channel RTS Remote w/ Scroll Wheel Lounge`, description:`Lounge`, code:`TM5L`, price:513.00},
    {type:`Telis 16 Channel RTS Remote w/ Scroll Wheel Pure`, description:`Pure`, code:`T16P`, price:641.00},
    {type:`Telis 16 Channel RTS Remote w/ Scroll Wheel Silver`, description:`Silver`, code:`T16S`, price:705.00},
    {type:`Telis 1 Chronis RTS Pure`, description:`Pure`, code:`T1CP`, price:655.00},
    {type:`Telis 1 Chronis RTS Silver`, description:`Silver`, code:`T1CS`, price:732.00},
    {type:`Decoflex 1 Channel Wall Switch`, description:`1 Channel`, code:`D1W`, price:358.00},
    {type:`Decoflex 5 Channel Wall Switch`, description:`5 Channel`, code:`D5W`, price:375.00},
    {type:`Smoove 1 Wall Switch`, description:`White`, code:`S1W`, price:190.00},
    {type:`Somfy myLink WiFi to RTS`, description:`White`, code:`SML`, price:621.00},
    {type:`Z-Wave to RTS Interface`, description:`White`, code:`ZRI`, price:1002.00},
    {type:`Universal RTS 16 Channel Interface`, description:`Beige`, code:`URI`, price:1187.00},
    {type:`RTS Repeater`, description:`Beige`, code:`RTSR`, price:531.00},
  ],
    SomfyPowerOptions:{
      SMB3:[{type:`12V Reloadable Lithium Battery Tube`, code:`WF8`, description:`Pre-loaded with 8 AA Batteries`, price:124.00}, {type:`12V DC 1.25A Transformer (Wall Type)`, code:`WFT`, description:`Wall Type`, price:350.00}, {type:`12V Solar Pack Kit`, code:`SPK`, description:`Includes solar panel, 10AA battery tube & batteries, connections harness wire, mounting brackets & glass mount adhesive.`, price:318.00}],
      CL32:[{type:`12V Reloadable Lithium Battery Tube`, code:`WF8`, description:`Pre-loaded with 8 AA Batteries`, price:124.00},
        {type:`12V DC 1.25A Transformer (Wall Type)`, code:`WFT`, description:`Wall Type`, price:350.00},
        {type:`12V Solar Pack Kit`, code:`SPK`, description:`Includes solar panel, 10AA battery tube & batteries, connections harness wire, mounting brackets & glass mount adhesive.`, price:318.00}],
      SMB4:[{
        type: `Sonesse 30 Wirefree Plug-in Charger`,
        code: `WF9`,
        description: ``,
        price: 53.80
      }],
      SMB5:[{type:`12V Reloadable Lithium Battery Tube`, code:`WF8`, description:`Pre-loaded with 8 AA Batteries`, price:124.00},
        {type:`12V DC 1.25A Transformer (Wall Type)`, code:`WFT`, description:`Wall Type`, price:350.00},
        {type:`12V Solar Pack Kit`, code:`SPK`, description:`Includes solar panel, 10AA battery tube & batteries, connections harness wire, mounting brackets & glass mount adhesive.`, price:318.00 }],
      SMB1:[ { type: `24V DC 1.66A Transformer (Wall Type)`, code:`DCW`, description:`1 Motor`, price:138.00}, { type:`24V DC 2.5A Transformer (Table Type)`, code:`DCT`, description:`1 Motor`, price:352.00}, { type:`24V DC 5A (Table Type)`, code:`DC3`, description:`3 Motors`, price:871.00}, { type:`24V DC 10A (Table Type)`, code:`DC6`, description:`6 Motors`, price:1353.00}, { type:`24V DC 15A (Table Type)`, code:`DC9`, description:`9 Motors`, price:1767.00}, { type:`Power/Control Distribution Enclosure Kit 5 Motors`, code:`PCD5`, description:`5 Motors`, price:2027.00}, { type:`Power/Control Distribution Enclosure Kit 10 Motors`, code:`PCD10`, description:`10 Motors`, price:2920.00}, { type:`Power/Control Distribution Enclosure Kit 15 Motors`, code:`PCD15`, description:`15 Motors`, price:4079.00}, { type:`Power/Control Distribution Enclosure Kit 20 Motors`, code:`PCD20`, description:`20 Motors`, price:4695.00} ],
        A6U: [{type:`3' Plug-In Cable`, code:`AC03`, description:null, price:67.00}, {type:`6' Plug-In Cable`, code:`AC06`, description:null, price:77.00},{type:`12' Plug-In Cable`, code:`AC12`, description:null, price:81.00},{type:`18' Plug-In Cable`, code:`AC18`, description:null, price:81.00},{type:`24' Plug-In Cable`, code:`AC24`, description:null, price:116.00}],
        A6: [{type:`3' Plug-In Cable`, code:`AC03`, description:null, price:67.00},{type:`6' Plug-In Cable`, code:`AC06`, description:null, price:77.00},{type:`12' Plug-In Cable`, code:`AC12`, description:null, price:81.00},{type:`18' Plug-In Cable`, code:`AC18`, description:null, price:81.00},{type:`24' Plug-In Cable`, code:`AC24`, description:null, price:116.00}],
        A10: [{type:`3' Plug-In Cable`, code:`AC03`, description:null, price:67.00},{type:`6' Plug-In Cable`, code:`AC06`, description:null, price:77.00},{type:`12' Plug-In Cable`, code:`AC12`, description:null, price:81.00},{type:`18' Plug-In Cable`, code:`AC18`, description:null, price:81.00},{type:`24' Plug-In Cable`, code:`AC24`, description:null, price:116.00}]
    },
    SomfyMotorOptions:[
    {
      type:`Roller Shade, Interlude, Illusions - R28`,
      code: `SMB3`,
      description:`R28 Motor 12V (48 dBA - 56 dBA).  12lbs.`,
      price: 485.00
    },
    {
      type:`Roman Shade - Cord Lift WireFree CL32 RTS`,
      code: `CL32`,
      description:`Cord Lift Motor 12 V (53 dBA).8lbs.`,
      price: 619.00
    },{
      type:`Roller Shade, Interlude, Illusions - Sonesse 30 Wirefree`,
      code: `SMB4`,
      description:`Sonesse 30 Wirefree Motor 12V (44dBA).  17.7 lbs`,
      price: 717.00
    },
    {
      type:`Roller Shade, Interlude, Illusions - Somfy R30 (Junior)`,
      code: `SMB5`,
      description:`Somfy R30 (Junior) (56 dBA).  3.1lbs.`,
      price: 369.00
    },
    {
      type:`Roller Shade, Interlude, Illusions - Sonesse 30`,
      code: `SMB1`,
      description:`Sonesse 30 (Quiet Motor) for Roller Shade (<44dBA).  17.7 lbs`,
      price: 854.00
    },
    {
      type:`Roller Shade - Sonesse Ultra 50 RTS (Ultra Quiet)`,
      code: `A6U`,
      description:`Sonesse Ultra 50 RTS (<38dBA).  52 lbs`,
      price: 1410.00
    },
    {
      type:`Roller Shade - Sonesse 50 RTS (<45dBA)`,
      code: `A6`,
      description:`Sonesse 50 RTS (<45dBA).  52 lbs`,
      price: 1234.00
    },
    {
      type:`Roller Shade - Sonesse 50 RTS (<47dBA)`,
      code: `A10`,
      description:`Sonesse 50 RTS (<47dBA).  88 lbs`,
      price: 1488.00
    }],
    powerControlOptions:[{type:'None', price:0.00}, {type:'SG DC Charger', price:36.00}, {type:'SG Solar Panel', price:84.00}],
    remoteOptions:[{type:'None', price:0.00}, {type:'SG 1 Channel Standard', price:60.00}, {type:'SG 15 Channel Standard', price:74.00},{type:'SG 1 Channel Touch', price:91.00},{type:'SG 15 Channel Touch', price:105.00}],
    connectionHubOptions:[{type:'None', price:0.00}, {type:'SG Connector Control Hub', price:393.00}],
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
      "DX 203":"PG3",
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
          description:``,
          dimensions: {
            units: 'inches',
            height: 30,
            width: 30
          },
          selectedValanceOption:'Decora 8',
          selectedBlindType:'Roller',
          selectedFabric:'Cottonwood',
          selectedHem:'Plain Hem',
          selectedHemColor:'White',
          selectedEndCap:'Grey',
          selectedPriceGroup:'PG1',
          showValance:false,
          total:155.95
        }
      ],
      selectedCordPlacement: 'Left',
      showMotorization:false,
      selectedSomfyMotorizationOption: `Roller Shade, Interlude, Illusions - R28`,
      selectedSomfyPowerOption: `12V Reloadable Lithium Battery Tube`,
      selectedSomfyControlSensorOption: `Telis 1 Channel RTS Remote Pure`,
      selectedSomfyListControls:[],
      selectedMotorizationSeries:'Sun Glo',
      selectedSunGloMotorizationOption: `Default`,
      selectedSunGloConnectionHub:'SG Connector Control Hub',
      selectedSunGloPowerControl:'SG DC Charger',
      selectedSunGloRemote:'SG 1 Channel Standard',
      extras:[],
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
