import React, {Component} from 'react';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import { withStyles } from '@material-ui/core/styles';

import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import InputLabel from '@material-ui/core/InputLabel';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


import RoomPanel from './RoomPanel';
import WindowPanel from './WindowPanel';
import OutlinedDropdown from './OutlinedDropdown';


import WidthHeightTextInput from './WidthHeightTextInput';
import AddValanceOption from './AddValanceOption'


import {downloadFormRequested, selectWorksheet, setForm} from '../actions/form';
import {parseTableFromRange} from '../methods';
import shortid from 'shortid';



//import officegen from 'officegen';


//UNIT CONVERSION
const CM_TO_INCH=0.393701;

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  root:{
    padding:'1rem'
  },
  column:{
    display:'flex',
    flexDirection:'column',
    margin:'1rem 0'
  },
  row:{
    display:'flex',
    flexDirection:'row',
    margin:'1rem 0',
    //alignItems:'center'
  },
  typography:{
    margin:'0.5rem 0 0.5rem 0'
  },
  wide:{
    width:'16rem'
  },
  chip: {
    margin: theme.spacing.unit,
  },
  marginBetween: {
    margin: '0 0.5rem'
  }
})

class TextileForm extends Component {
  constructor(){
    super();
    this._handleChange = this._handleChange.bind(this)
    this._calculateWindowTotal = this._calculateWindowTotal.bind(this)
    this._calculateRoomTotal = this._calculateRoomTotal.bind(this)
    this._calculateGrandTotal = this._calculateGrandTotal.bind(this)
    this._printForm = this._printForm.bind(this)

  }
  _handleChange(e, v) {
    console.log(e.target.id)
    console.log(e.target.value)
    console.log(v)
    let formCopy = {...this.props.form}
    //let thisWindow = formCopy.rooms[formCopy.selectedRoom].windows[formCopy.selectedWindow];
    switch(e.target.id) {
      case "selectedsomfypoweroption":
        formCopy.rooms[formCopy.selectedRoom].selectedSomfyPowerOption = e.target.value;
          this.props.setForm(formCopy)
        break;
      case "selectedsomfycontrolsensoroption":
        console.log("b4:")
        console.log(formCopy)
        formCopy.rooms[formCopy.selectedRoom].selectedSomfyControlSensorOption = e.target.value;
        formCopy.rooms[formCopy.selectedRoom].extras.push(formCopy.SomfyControlSensorOptions.find(cso=>cso.type === e.target.value))
        console.log("setform w ")
        console.log(formCopy)
          this.props.setForm(formCopy)
        break;
      case "selectedsomfymotorizationoption":
        let code = formCopy.SomfyMotorOptions.find(mo=>mo.type === e.target.value).code;
        console.log("got product code: " + code)
        formCopy.rooms[formCopy.selectedRoom].selectedSomfyMotorizationOption = e.target.value;
        formCopy.rooms[formCopy.selectedRoom].selectedSomfyPowerOption = formCopy.SomfyPowerOptions[code][0].type;
          this.props.setForm(formCopy)
        break;
      case "selectedhemcolor":
        formCopy.rooms[formCopy.selectedRoom].windows[formCopy.selectedWindow].selectedHemColor = e.target.value;
          this.props.setForm(formCopy)
        break;
      case "selectedsunglopowercontrol":
        formCopy.rooms[formCopy.selectedRoom].selectedSunGloPowerControl = e.target.value;
          this.props.setForm(formCopy)
        break;
      case "selectedsungloremote":
        formCopy.rooms[formCopy.selectedRoom].selectedSunGloRemote = e.target.value;
          this.props.setForm(formCopy)
        break;
      case "selectedsungloconnectionhub":
        formCopy.rooms[formCopy.selectedRoom].selectedSunGloConnectionHub = e.target.value;
          this.props.setForm(formCopy)
        break;

      case "selectedmotorizationseries":
        formCopy.rooms[formCopy.selectedRoom].selectedMotorizationSeries = e.target.value;
          this.props.setForm(formCopy)
        break;
      case "show-motorization":
        formCopy.rooms[formCopy.selectedRoom].showMotorization = !formCopy.rooms[formCopy.selectedRoom].showMotorization;
        if(formCopy.rooms[formCopy.selectedRoom].showMotorization) {
          //no cordplacement when motorization is true
          formCopy.rooms[formCopy.selectedRoom].selectedCordPlacement = 'None';
        } else {
          formCopy.rooms[formCopy.selectedRoom].selectedCordPlacement = 'Left';
        }
          this.props.setForm(formCopy)
        break;
      case "selectedendcap":
        formCopy.rooms[formCopy.selectedRoom].windows[formCopy.selectedWindow].selectedEndCap = e.target.value;
          this.props.setForm(formCopy)
        break;
      case "cordplacement":
        formCopy.rooms[formCopy.selectedRoom].selectedCordPlacement = e.target.value;
          this.props.setForm(formCopy)
        break;
      case "project-id":
        formCopy.projectId = e.target.value
          this.props.setForm(formCopy)
        break;
      case "client-name":
        formCopy.clientName = e.target.value
          this.props.setForm(formCopy)
        break;
      case "window-name":
        formCopy.rooms[formCopy.selectedRoom].windows[formCopy.selectedWindow].name = e.target.value;
          this.props.setForm(formCopy)
        break;
      case "window-description":
        formCopy.rooms[formCopy.selectedRoom].windows[formCopy.selectedWindow].description = e.target.value;
          this.props.setForm(formCopy)
        break;
      case "room-name":
        formCopy.rooms[formCopy.selectedRoom].name = e.target.value;
          this.props.setForm(formCopy)
        break;
      case "room-description":
        formCopy.rooms[formCopy.selectedRoom].description = e.target.value;
          this.props.setForm(formCopy)
        break;
      case "selectedRoom":
        formCopy.selectedRoom = v;
        formCopy.selectedWindow = 0; //must reset incase out of index of new windows array!
          this.props.setForm(formCopy)
        break;
      case "selectedWindow":
        formCopy.selectedWindow = v;
          this.props.setForm(formCopy)
        break;
      case "selectedhem":
        formCopy.rooms[formCopy.selectedRoom].windows[formCopy.selectedWindow].selectedHem = e.target.value
          this.props.setForm(formCopy)
        break;
      case "blindtype":
        formCopy.rooms[formCopy.selectedRoom].windows[formCopy.selectedWindow].selectedBlindType = e.target.value
          this.props.setForm(formCopy)
        break;
      case "fabric":
        formCopy.rooms[formCopy.selectedRoom].windows[formCopy.selectedWindow].selectedFabric = e.target.value;
        formCopy.rooms[formCopy.selectedRoom].windows[formCopy.selectedWindow].selectedPriceGroup = formCopy.fabricToPriceGroupMapping[e.target.value];
          this.props.setForm(formCopy)
        break;
      case "pricegroup":
        formCopy.rooms[formCopy.selectedRoom].windows[formCopy.selectedWindow].selectedPriceGroup = e.target.value;
          this.props.setForm(formCopy)
        break;
      case "toggle-valance":
        formCopy.rooms[formCopy.selectedRoom].windows[formCopy.selectedWindow].showValance = !formCopy.rooms[formCopy.selectedRoom].windows[formCopy.selectedWindow].showValance
          this.props.setForm(formCopy)
        break;
      case "valance":
        formCopy.rooms[formCopy.selectedRoom].windows[formCopy.selectedWindow].selectedValanceOption = e.target.value;
          this.props.setForm(formCopy)
        break;
      case "units":
        formCopy.rooms[formCopy.selectedRoom].windows[formCopy.selectedWindow].dimensions[e.target.id] = e.target.value;
          this.props.setForm(formCopy)
        break;
      case "width":
      case "height":
        formCopy.rooms[formCopy.selectedRoom].windows[formCopy.selectedWindow].dimensions[e.target.id] = parseInt(e.target.value);
          this.props.setForm(formCopy)
        break;
      default:
        console.log("unhandled ")
        console.log(e.target)
        break;
    }


  }
  _handleClick(e, v){
    console.log(e.target.id)
    console.log(v)
    let formCopy = {...this.props.form}

    switch(e.target.id) {
      case "removeExtra":
        let i = formCopy.rooms[formCopy.selectedRoom].extras.findIndex(ext=>ext.type === v);
        formCopy.rooms[formCopy.selectedRoom].extras.splice(i,1);
        this.props.setForm(formCopy)
        break;
      case "download-form":
        this.props.downloadFormRequested(this._printForm(formCopy));
        break;
      case "remove-room":
        formCopy.rooms.splice(formCopy.selectedRoom,1);
        formCopy.selectedRoom = 0;
        formCopy.selectedWindow = 0;
        this.props.setForm(formCopy)

        break;
      case "remove-window":
        formCopy.rooms[formCopy.selectedRoom].windows.splice(formCopy.selectedWindow,1);
        formCopy.selectedWindow = 0;
        this.props.setForm(formCopy)

        break;
      case "add-room":
        formCopy.selectedRoom = parseInt(formCopy.selectedRoom) + 1;
        formCopy.selectedWindow = 0;
        formCopy.rooms.push({
          id:shortid.generate(),
          name:`Room ${formCopy.rooms.length+1}`,
          description: ``,
          windows:[{
            id:shortid.generate(),
            name:`Window 1`,
            description: ``,
            dimensions: {
              units: 'inches',
              width:30,
              height:30
            },
            selectedValanceOption:'Decora 8',
            selectedBlindType:'Roller',
            selectedFabric: 'Cottonwood',
            selectedHem:'Plain Hem',
            selectedHemColor:'White',
            selectedEndCap:'Grey',
            selectedPriceGroup:'PG1',
            showValance:false,
            total:155.95
          }],
          showMotorization:false,
          selectedCordPlacement: 'Left',
          selectedSomfyMotorizationOption: `Roller Shade, Interlude, Illusions - R28`,
          selectedSomfyPowerOption: `12V Reloadable Lithium Battery Tube`,
          selectedSomfyControlSensorOption: `Telis 1 Channel RTS Remote Pure`,
          selectedMotorizationSeries:'Sun Glo',
          selectedSunGloMotorizationOption: `Default`,
          selectedSunGloConnectionHub:'SG Connector Control Hub',
          selectedSunGloPowerControl:'SG DC Charger',
          selectedSunGloRemote:'SG 1 Channel Standard',
          extras:[],
          total: 0
        })
        this.props.setForm(formCopy)
        break;
      case "add-window":
      //adding windows within the room maintains the previous windows' props
      console.log("adding window")
      formCopy.selectedWindow += 1;
      console.log(formCopy.selectedWindow)
        formCopy.rooms[formCopy.selectedRoom].windows.push({
          id:shortid.generate(),
          name:`Window ${formCopy.rooms[formCopy.selectedRoom].windows.length+1}`,
          description: ``,
          dimensions: {
            units: formCopy.rooms[formCopy.selectedRoom].windows[formCopy.rooms[formCopy.selectedRoom].windows.length-1].dimensions.units,
            width:formCopy.rooms[formCopy.selectedRoom].windows[formCopy.rooms[formCopy.selectedRoom].windows.length-1].dimensions.width,
            height:formCopy.rooms[formCopy.selectedRoom].windows[formCopy.rooms[formCopy.selectedRoom].windows.length-1].dimensions.height
          },
          selectedValanceOption:formCopy.rooms[formCopy.selectedRoom].windows[formCopy.rooms[formCopy.selectedRoom].windows.length-1].selectedValanceOption,
          selectedBlindType:formCopy.rooms[formCopy.selectedRoom].windows[formCopy.rooms[formCopy.selectedRoom].windows.length-1].selectedBlindType,
          selectedFabric: formCopy.rooms[formCopy.selectedRoom].windows[formCopy.rooms[formCopy.selectedRoom].windows.length-1].selectedFabric,
          selectedHem:formCopy.rooms[formCopy.selectedRoom].windows[formCopy.rooms[formCopy.selectedRoom].windows.length-1].selectedHem,
          selectedHemColor:formCopy.rooms[formCopy.selectedRoom].windows[formCopy.rooms[formCopy.selectedRoom].windows.length-1].selectedHemColor,
          selectedEndCap:formCopy.rooms[formCopy.selectedRoom].windows[formCopy.rooms[formCopy.selectedRoom].windows.length-1].selectedEndCap,
          selectedPriceGroup:formCopy.rooms[formCopy.selectedRoom].windows[formCopy.rooms[formCopy.selectedRoom].windows.length-1].selectedPriceGroup,
          showValance:formCopy.rooms[formCopy.selectedRoom].windows[formCopy.rooms[formCopy.selectedRoom].windows.length-1].showValance,
          total:formCopy.rooms[formCopy.selectedRoom].windows[formCopy.rooms[formCopy.selectedRoom].windows.length-1].total
        })

        this.props.setForm(formCopy)
        break;
      default:
        console.log("unhandled " + e.target.id)
        break;
    }

  }
  _calculateRoomTotal(room) {
    let roomTotal = 0.00;

    // //add per room motorization and extras costs
    if(room.showMotorization) {
      if(room.selectedMotorizationSeries === 'Sun Glo') {
        roomTotal += 360.00 //default sunglo rechargeable motor  this should be its own object in the form state
        roomTotal += this.props.form.connectionHubOptions.find(ch=>ch.type === room.selectedSunGloConnectionHub).price;
        roomTotal += this.props.form.remoteOptions.find(ro=>ro.type === room.selectedSunGloRemote).price;
        roomTotal += this.props.form.powerControlOptions.find(pc=>pc.type === room.selectedSunGloPowerControl).price;
      }
      if(room.selectedMotorizationSeries === 'Somfy') {
        let motorCode = this.props.form.SomfyMotorOptions.find(mo=>mo.type === room.selectedSomfyMotorizationOption).code

        roomTotal += this.props.form.SomfyMotorOptions.find(mo=>mo.type === room.selectedSomfyMotorizationOption).price;
        roomTotal += this.props.form.SomfyPowerOptions[motorCode].find(po=>po.type === room.selectedSomfyPowerOption).price;
        /* Control Sensor Options & Extra Items -- Should adapt and abstract this! */
        room.extras.forEach(extra=>{
          roomTotal += extra.price;
        })
      }
    }

    return roomTotal.toFixed(2);
  }
  _calculateWindowTotal(dim, at, vt) {

    //UNIT CONVERSION
    let textileWidthInInches;
    let textileHeightInInches;
    if(dim.units === 'centimetres') {
      textileWidthInInches = parseFloat(CM_TO_INCH*dim.width)
      textileHeightInInches = parseFloat(CM_TO_INCH*dim.width)
    } else {
      textileWidthInInches = parseFloat(dim.width)
      textileHeightInInches = parseFloat(dim.height)
    }
    console.log(`Calcuating for textile of width ${textileWidthInInches}x${textileHeightInInches}`)

    //LOOKUP TABLES
    let findRow = -1;
    let findCol = -1;
    let findVRow = -1;
    let findVCol = -1;

    let windowTotal = -1;

    //EXCEL TABLE LOOKUP METHOD
    if(at.length > 0 && at[0].length > 0 ) {
      const tableHeight = at.length;  //rows
      const tableWidth = at[0].length; //

      for(var i=0; i<tableHeight; i++){
        //ignore 0,0
        if(i===0) {
          //scan header row on fir st iteration
          findCol = at[i].slice(1).findIndex(c=>parseInt(c)>=textileWidthInInches)+1;
        } else {
          //scans first element of each row on subsequent
          if( parseInt(at[i][0])>=textileHeightInInches && findRow < 0) {
            //parseInt(at[i][0])
            findRow=i
          }
        }
      }

      if(findRow < 0) {
        console.log("No table match!")
        return -1
      }

      if(vt.length > 0) {
        //we know it will be in the same ColNumber, we just need to match the row
        const tableHeight = vt.length;  //rows
        const tableWidth = vt[0].length; //
        //console.log("Parsing header row of valance table")
        //console.log(vt)
        let tempOptions = []

        //TODO: dont do this!
        //if(this.props.form.rooms[this.props.form.selectedRoom].windows[this.props.form.selectedWindow].selectedValanceOption === '') this.props.form.rooms[this.props.form.selectedRoom].windows[this.props.form.selectedWindow].selectedValanceOption = vt[1][0]
        console.log("constructing allowable valance tables for option")
        for(var i =1; i< tableHeight; i++ ) {
          //console.log()
          //console.log(vt[i][0] + " compared to " + this.props.form.selectedValanceOption)
          tempOptions.push(vt[i][0])
          if(vt[i][0] === this.props.form.rooms[this.props.form.selectedRoom].windows[this.props.form.selectedWindow].selectedValanceOption){
            //console.log("found col match: " + i)
            findVRow = i;
          }
        }
        this.props.form.valanceOptions = tempOptions  //SETS THE NEWLY PARSED valanceOptions on the form
        //may not find row match if new worksheet
        if(findVRow < 0) return -1
        //width is assumed, same findCol

        windowTotal = (parseFloat(at[findRow][findCol])+parseFloat(vt[findVRow][findCol]))
      } else {

        windowTotal = (parseFloat(at[findRow][findCol]));
      }
    }

    return windowTotal.toFixed(2);
  }
  _calculateGrandTotal(){

    let windows = []
    let rooms = [...this.props.form.rooms]
    let grandTotal = 0.00;

    //destructure all windows into one array
    if(this.props.form.rooms.length > 1) {
      windows = this.props.form.rooms.reduce((w,r2)=>{
        return [...w, ...r2.windows];
      }, []);
    } else {
      windows = this.props.form.rooms[0].windows;
      //grandTotal = windowTotal
    }

    grandTotal += parseFloat(windows.reduce((sum,w)=>sum+w.total, 0)) + parseFloat(rooms.reduce((sum,r)=>sum+r.total,0))

    return grandTotal.toFixed(2);
  }

  _printForm(form) {
    var text = ``;
    var copy = {...form};

    var preppedRooms = [];

    copy.rooms.forEach((r,i)=>{
      var motorAndControl = {}
      var preppedWindows = [];
      //per room details
      r.MotorizationOption = r.selectedMotorizationSeries;

      if(r.showMotorization && r.selectedMotorizationSeries === 'Sun Glo') {
        motorAndControl["MotorizationSeries"] = r.selectedMotorizationSeries
        motorAndControl["Sun Glo Motorization"] = r.selectedSunGloMotorizationOption;
        motorAndControl["Sun Glo Connection Hub"] = r.selectedSunGloConnectionHub;
        motorAndControl["Sun Glo Power Control"] = r.selectedSunGloPowerControl;
        motorAndControl["Sun Glo Remote"] = r.selectedSunGloRemote;
      } else if (r.showMotorization && r.selectedMotorizationSeries === 'Somfy') {
        motorAndControl["MotorizationSeries"] = r.selectedMotorizationSeries
        motorAndControl["Somfy Motorization"] = r.selectedSomfyMotorizationOption;
        motorAndControl["Somfy Power Option"] = r.selectedSomfyPowerOption;
        //add the somfy extras
        r.extras = r.extras.map(e=> ({
          ...e,
          Price:`$${parseFloat(e.price).toFixed(2)}`

        }))
      }
      r.motorsAndControlTotal = `$${r.total.toFixed(2)}`;

        r.windows.forEach(w=> {
          preppedWindows.push({
            Id: w.id,
            Name:`${r.name}-${w.name}`,
            Description:w.description,
            Fabric:w.selectedFabric,
            "Price Group":w.selectedPriceGroup,
            "Valance": w.showValance ? w.selectedValanceOption : 'None',
            "Window Total":`$${w.total.toFixed(2)}`,
          });
        })

      preppedRooms.push({
        Id:r.id,
        Name:`${r.name}`,
        Description:r.description,
        windows:preppedWindows,
        "Cord Placement": r.selectedCordPlacement,
        ...motorAndControl,
        "Motor, Sensor and Controls Total": `$${r.total}`,
        "Room Subtotal": `$${( r.total + r.windows.reduce((sum,w)=>sum=sum+w.total,0) ).toFixed(2)}`
      })

    });

    return {
      "Project ID": form.projectId,
      "Client Name": form.clientName,
      Rooms:preppedRooms,
      "Project Total":`$${this._calculateGrandTotal()}`,
    }
  }

  render () {
    console.log('RW: ' + this.props.form.selectedRoom + ', ' + this.props.form.selectedWindow)
    const {classes,  workbook} = this.props
    let activeTable = []
    let valanceTable = []

    if(typeof workbook.Sheets[this.props.form.rooms[this.props.form.selectedRoom].windows[this.props.form.selectedWindow].selectedBlindType] !== 'undefined' && this.props.form.priceGroups.findIndex(pg=>this.props.form.rooms[this.props.form.selectedRoom].windows[this.props.form.selectedWindow].selectedPriceGroup) > -1) {
      const index = this.props.form.priceGroups.findIndex(pg=>pg===this.props.form.rooms[this.props.form.selectedRoom].windows[this.props.form.selectedWindow].selectedPriceGroup);
      const rangeString = this.props.form.priceGroupMap[index]

      activeTable = parseTableFromRange(rangeString, workbook.Sheets[this.props.form.rooms[this.props.form.selectedRoom].windows[this.props.form.selectedWindow].selectedBlindType])

      if(this.props.form.rooms[this.props.form.selectedRoom].windows[this.props.form.selectedWindow].showValance) {
        console.log("fetching valance table...")
        console.log(this.props.form.selectedValance)
        const vindex = this.props.form.valances.findIndex(v=>v===this.props.form.selectedValance)
        console.log(vindex)
        const valanceRangeString = this.props.form.valanceMap[vindex]
        console.log(valanceRangeString)
        valanceTable = parseTableFromRange(valanceRangeString, workbook.Sheets[this.props.form.selectedValance]);
      }

    }

    //THIS SHOULD BE HANDLED IN REDUCER, AS THIS SETS THE TOTALS IN THE PROP
    const windowTotal = this._calculateWindowTotal(this.props.form.rooms[this.props.form.selectedRoom].windows[this.props.form.selectedWindow].dimensions, activeTable, valanceTable);
    this.props.form.rooms[this.props.form.selectedRoom].windows[this.props.form.selectedWindow].total = parseFloat(windowTotal);  //hardset formstate


    const roomTotal = this._calculateRoomTotal(this.props.form.rooms[this.props.form.selectedRoom]) //the extras
    this.props.form.rooms[this.props.form.selectedRoom].total = parseFloat(roomTotal);

    const roomSubTotal = (parseFloat(roomTotal) + this.props.form.rooms[this.props.form.selectedRoom].windows.reduce((sum,w)=>sum=sum+w.total,0)).toFixed(2)  ;  //room extras + windo totals

    const grandTotal = this._calculateGrandTotal();

    let currentWindow = this.props.form.rooms[this.props.form.selectedRoom].windows[this.props.form.selectedWindow];
    console.log('motorcode fetch')
    console.log(this.props.form.SomfyMotorOptions)
    let motorCode = 'SMB3'; //default dummy to avoid error
    if(this.props.form.rooms[this.props.form.selectedRoom].showMotorization && this.props.form.rooms[this.props.form.selectedRoom].selectedMotorizationSeries === 'Somfy') {
      motorCode = this.props.form.SomfyMotorOptions.find(mo=>mo.type === this.props.form.rooms[this.props.form.selectedRoom].selectedSomfyMotorizationOption).code
    }



    return (
        <div className={classes.root}>
          <Typography className={classes.typography} variant="title">Interactive Pricing Form</Typography>
          <div><TextField id="project-id" label="Project ID" value={this.props.form.projectId} onChange={this._handleChange.bind(this)}/></div>
          <div><TextField id="client-name" label="Client Name" value={this.props.form.clientName} onChange={this._handleChange.bind(this)}/></div>

          <div className={classes.column}>
            <RoomPanel handleClick={this._handleClick.bind(this)} handleChange={this._handleChange.bind(this)} rooms={this.props.form.rooms} selectedRoom={this.props.form.selectedRoom}/>
            <WindowPanel handleClick={this._handleClick.bind(this)} handleChange={this._handleChange.bind(this)} windows={this.props.form.rooms[this.props.form.selectedRoom].windows} selectedWindow={this.props.form.selectedWindow}/>

          </div>
          <div>
            <Typography variant="display1">Window Properties</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.typography} variant="subtitle1">Dimensions and Units</Typography>
            <div className={classes.row} >
              <WidthHeightTextInput
                maxWidth={activeTable[0] ? ( currentWindow.dimensions.units==='inches' ? activeTable[0][activeTable[0].length-1] : activeTable[0][activeTable[0].length-1]/CM_TO_INCH) : 0}
                maxHeight={activeTable[0] ? ( currentWindow.dimensions.units==='inches' ? activeTable[activeTable.length-1][0] : activeTable[activeTable.length-1][0]/CM_TO_INCH) : 0}
                dimensions={currentWindow.dimensions}
                handleChange={this._handleChange.bind(this)}
                />
              <OutlinedDropdown
                title="Units"
                helperText="Please select measurement unit"
                items={["inches", "centimetres"]}
                selectedItem={currentWindow.dimensions.units}
                handleChange={this._handleChange.bind(this)}/>
            </div>
          </div>

          <Typography className={classes.typography} variant="subtitle1">Fabric</Typography>

          {/*Work Sheets Select*/
            (<div className={classes.row}>
                <OutlinedDropdown
                  title="BlindType"
                  helperText="Select a Blind Type"
                  items={workbook.SheetNames.filter(((a,i)=>i%2===0))}
                  selectedItem={currentWindow.selectedBlindType}
                  handleChange={this._handleChange.bind(this)}/>
                <OutlinedDropdown
                  title="Fabric"
                  helperText="Select a Fabric"
                  items={/*this.props.this.props.form.selectedBlindType === 'Interlude' ? this.props.this.props.form.priceGroups.slice(0,4) : this.props.this.props.form.priceGroups*/
                    Object.keys(this.props.form.fabricToPriceGroupMapping)
                  }
                  selectedItem={currentWindow.selectedFabric}
                  handleChange={this._handleChange.bind(this)}/>
                <OutlinedDropdown
                  title="PriceGroup"
                  helperText="Select a Price Group"
                  hidden={true}
                  items={currentWindow.selectedBlindType === 'Interlude' ? this.props.form.priceGroups.slice(0,4) : this.props.form.priceGroups}
                  selectedItem={currentWindow.selectedPriceGroup}
                  handleChange={this._handleChange.bind(this)}/>
              </div>)
          }
          {/* HEM + END CAP OPTIONS */}
          <div style={{display:'flex', flexDirection:'row'}}>
            <div>
              <Typography variant="subtitle1">Hem Options </Typography>
                <OutlinedDropdown
                  title="SelectedHem"
                  helperText="Select a Hembar type"
                  items={this.props.form.hembars}
                  selectedItem={currentWindow.selectedHem}
                  handleChange={this._handleChange.bind(this)}/>
            </div>
            <div>
              <Typography variant="subtitle1">Hem Bar Colour </Typography>
                <OutlinedDropdown
                  title="SelectedHemColor"
                  helperText="Select a Hem Bar Colour"
                  items={this.props.form.hemColorOptions}
                  selectedItem={currentWindow.selectedHemColor}
                  handleChange={this._handleChange.bind(this)}/>
            </div>
            <div>
              <Typography variant="subtitle1">End Cap Colour </Typography>
                <OutlinedDropdown
                  title="SelectedEndCap"
                  helperText="Select an End Cap colour"
                  items={this.props.form.endCapOptions}
                  selectedItem={currentWindow.selectedEndCap}
                  handleChange={this._handleChange.bind(this)}/>
            </div>
        </div>
        {/* Valance Panel */}

        <AddValanceOption
          form={this.props.form}
          disabled={currentWindow.selectedBlindType === 'Vision' ? true : false}
          window={currentWindow}
          handleChange={this._handleChange.bind(this)}/>

        <div>
          <Typography variant="display1"><b>Current Window Total:</b> ${windowTotal} </Typography>
        </div>


        {/* Motorization Panel*/}
        <div>
          <InputLabel>{this.props.form.rooms[this.props.form.selectedRoom].showMotorization ? `Remove Motorization` : `Add Motorization`}</InputLabel>
          <Checkbox
            id="show-motorization"
            checked={this.props.form.rooms[this.props.form.selectedRoom].showMotorization}
            onChange={this._handleChange.bind(this)}
            value={this.props.form.rooms[this.props.form.selectedRoom].selectedMotorizationSeries}
          />
        </div>

          <div className={classes.row} style={{alignItems:'baseline'}}>
            {
              this.props.form.rooms[this.props.form.selectedRoom].showMotorization && (
                <div>
                  <div>
                    <InputLabel>Room Motorization Option</InputLabel>
                    <OutlinedDropdown
                      title="selectedMotorizationSeries"
                      helperText="Select a Motorization Series"
                      items={this.props.form.motorizationSeries}
                      selectedItem={this.props.form.rooms[this.props.form.selectedRoom].selectedMotorizationSeries}
                      handleChange={this._handleChange.bind(this)}/>
                  </div>
                  { this.props.form.rooms[this.props.form.selectedRoom].selectedMotorizationSeries === 'Sun Glo' &&
                    <div>
                    <Typography variant="subtitle1">Sun Glo Options </Typography>
                    <div className={classes.row}>
                      <div className={classes.marginBetween}>
                        <Typography variant="subtitle1">Connection Hub Options </Typography>
                          <OutlinedDropdown
                            title="SelectedSunGloConnectionHub"
                            helperText="Select a Connection Hub"
                            items={this.props.form.connectionHubOptions.map(o=>o.type)}
                            selectedItem={this.props.form.rooms[this.props.form.selectedRoom].selectedSunGloConnectionHub}
                            handleChange={this._handleChange.bind(this)}/>
                      </div>

                      <div className={classes.marginBetween}>
                        <Typography variant="subtitle1">Power Control Options </Typography>
                          <OutlinedDropdown
                            title="SelectedSunGloPowerControl"
                            helperText="Select a Power control type"
                            items={this.props.form.powerControlOptions.map(o=>o.type)}
                            selectedItem={this.props.form.rooms[this.props.form.selectedRoom].selectedSunGloPowerControl}
                            handleChange={this._handleChange.bind(this)}/>
                      </div>

                      <div className={classes.marginBetween}>
                        <Typography variant="subtitle1">Remote Options </Typography>
                          <OutlinedDropdown
                            title="SelectedSunGloRemote"
                            helperText="Select a Remote type"
                            items={this.props.form.remoteOptions.map(o=>o.type)}
                            selectedItem={this.props.form.rooms[this.props.form.selectedRoom].selectedSunGloRemote}
                            handleChange={this._handleChange.bind(this)}/>
                      </div>
                    </div>
                  </div>
                  }

                  { this.props.form.rooms[this.props.form.selectedRoom].selectedMotorizationSeries === 'Somfy' &&
                    <div>
                      <Typography variant="subtitle1">Somfy Options </Typography>
                      <div className={classes.row}>
                          <OutlinedDropdown
                            title="SelectedSomfyMotorizationOption"
                            helperText="Select a Motor option"
                            handleChange={this._handleChange.bind(this)}
                            selectedItem={this.props.form.rooms[this.props.form.selectedRoom].selectedSomfyMotorizationOption}
                            items={this.props.form.SomfyMotorOptions.map(o=>o.type)}
                            />
                          <OutlinedDropdown
                            title="SelectedSomfyPowerOption"
                            helperText="Select a Power option"
                            handleChange={this._handleChange.bind(this)}
                            selectedItem={this.props.form.rooms[this.props.form.selectedRoom].selectedSomfyPowerOption}
                            items={this.props.form.SomfyPowerOptions[motorCode].map(o=>o.type)}
                            />
                          <OutlinedDropdown
                            title="SelectedSomfyControlSensorOption"
                            helperText="Add controls and sensors"
                            handleChange={this._handleChange.bind(this)}
                            selectedItem={this.props.form.rooms[this.props.form.selectedRoom].selectedSomfyControlSensorOption}
                            items={this.props.form.SomfyControlSensorOptions.map(o=>o.type)}
                            />
                      </div>
                    </div>
                  }
                </div>
              )
            }
            {
              !this.props.form.rooms[this.props.form.selectedRoom].showMotorization && (
                <div style={{paddingTop:'0.75rem'}}>
                  <InputLabel>Cord Placement</InputLabel>
                  <OutlinedDropdown
                    title="cordPlacement"
                    helperText="Select a Cord Placement"
                    items={this.props.form.cordPlacements}
                    selectedItem={this.props.form.rooms[this.props.form.selectedRoom].selectedCordPlacement}
                    handleChange={this._handleChange.bind(this)}/>
                </div>)
            }

          </div>
          {
            this.props.form.rooms[this.props.form.selectedRoom].extras.length > 0 &&
            this.props.form.rooms[this.props.form.selectedRoom].extras.map(extra=>{
              return (
                <Chip
                  id="removeExtra"
                  label={extra.type}
                  onDelete={
                    (e)=>this._handleClick({target:{id:'removeExtra'}}, extra.type)
                  }
                  className={classes.chip}
                  color="primary"
                />
              )
            })
          }


          <div>
            <Typography variant="display1"><b>Motorization/Control Totals:</b> ${roomTotal} </Typography>
            <Typography variant="display1"><b>Room Subtotal:</b> ${roomSubTotal} </Typography>
          </div>
          <div className={classes.row}>
            <Typography variant="display2"><b>Project Total:</b> {
              `$${grandTotal}`
          } </Typography>
        <IconButton id="download-form" disabled={windowTotal === -1} onClick={(e)=>{this._handleClick({target:{id:'download-form'}})}} color="primary" className={classes.button} aria-label="Add to shopping cart" size="large">
            <CloudDownloadIcon/>
          </IconButton>
          </div>
          <div className={classes.row}>
            {grandTotal.toString() === 'NaN' &&
              <div >
                <Typography variant="subtitle1" color="secondary">Error: You might have picked an unavailable dimension.</Typography>
              </div>}
            {grandTotal === -1 &&
              <div >
                <Typography variant="subtitle1" color="secondary">Error: You have an incorrect fabric or incompatible selection.</Typography>
              </div>}
          </div>
        </div>
      )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    form:state.form,
    workbook:state.workbook
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    selectWorksheet,
    setForm,
    downloadFormRequested
  }, dispatch);
}

export default withStyles(styles)(connect(
    mapStateToProps,
    mapDispatchToProps
  )(TextileForm))
