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
    this._calculateTotal = this._calculateTotal.bind(this)
    this._calculateGrandTotal = this._calculateGrandTotal.bind(this)

  }
  _handleChange(e, v) {
    console.log(e.target.id)
    console.log(e.target.value)
    console.log(v)
    let formCopy = {...this.props.form}
    console.log('FORMCOPY')
    console.log(formCopy)
    //let thisWindow = formCopy.rooms[formCopy.selectedRoom].windows[formCopy.selectedWindow];
    switch(e.target.id) {
      case "selectedsomfypoweroption":
        formCopy.rooms[formCopy.selectedRoom].selectedSomfyPowerOption = e.target.value;
        break;
      case "selectedsomfycontrolsensoroption":
        formCopy.rooms[formCopy.selectedRoom].selectedSomfyControlSensorOption = e.target.value;
        formCopy.rooms[formCopy.selectedRoom].extras.push(formCopy.SomfyControlSensorOptions.find(cso=>cso.type === e.target.value))
        break;
      case "selectedsomfymotorizationoption":
        let code = formCopy.SomfyMotorOptions.find(mo=>mo.type === e.target.value).code;
        console.log("got product code: " + code)
        formCopy.rooms[formCopy.selectedRoom].selectedSomfyMotorizationOption = e.target.value;
        formCopy.rooms[formCopy.selectedRoom].selectedSomfyPowerOption = formCopy.SomfyPowerOptions[code][0].type;
        break;
      case "selectedhemcolor":
        formCopy.rooms[formCopy.selectedRoom].windows[formCopy.selectedWindow].selectedHemColor = e.target.value;
        break;
      case "selectedsunglopowercontrol":
        formCopy.rooms[formCopy.selectedRoom].selectedSunGloPowerControl = e.target.value;
        break;
      case "selectedsungloremote":
        formCopy.rooms[formCopy.selectedRoom].selectedSunGloRemote = e.target.value;

        break;
      case "selectedsungloconnectionhub":
        formCopy.rooms[formCopy.selectedRoom].selectedSunGloConnectionHub = e.target.value;
        break;

      case "selectedmotorizationseries":
        formCopy.rooms[formCopy.selectedRoom].selectedMotorizationSeries = e.target.value;
        break;
      case "show-motorization":
        formCopy.rooms[formCopy.selectedRoom].showMotorization = !formCopy.rooms[formCopy.selectedRoom].showMotorization;
        if(formCopy.rooms[formCopy.selectedRoom].showMotorization) {
          //no cordplacement when motorization is true
          formCopy.rooms[formCopy.selectedRoom].selectedCordPlacement = 'None';
        } else {
          formCopy.rooms[formCopy.selectedRoom].selectedCordPlacement = 'Left';
        }
        break;
      case "selectedendcap":
        formCopy.rooms[formCopy.selectedRoom].windows[formCopy.selectedWindow].selectedEndCap = e.target.value;
        break;
      case "cordplacement":
        formCopy.rooms[formCopy.selectedRoom].selectedCordPlacement = e.target.value;
        break;
      case "client-name":
        formCopy.clientName = e.target.value
        break;
      case "window-name":
        formCopy.rooms[formCopy.selectedRoom].windows[formCopy.selectedWindow].name = e.target.value;
        break;
      case "window-description":
        formCopy.rooms[formCopy.selectedRoom].windows[formCopy.selectedWindow].description = e.target.value;
        break;
      case "room-name":
        formCopy.rooms[formCopy.selectedRoom].name = e.target.value;
        break;
      case "room-description":
        formCopy.rooms[formCopy.selectedRoom].description = e.target.value;
        break;
      case "selectedRoom":
        formCopy.selectedRoom = v;
        formCopy.selectedWindow = 0; //must reset incase out of index of new windows array!
        break;
      case "selectedWindow":
        formCopy.selectedWindow = v;
        break;
      case "selectedhem":
        formCopy.rooms[formCopy.selectedRoom].windows[formCopy.selectedWindow].selectedHem = e.target.value
        break;
      case "blindtype":
        formCopy.rooms[formCopy.selectedRoom].windows[formCopy.selectedWindow].selectedBlindType = e.target.value
        break;
      case "fabric":
        formCopy.rooms[formCopy.selectedRoom].windows[formCopy.selectedWindow].selectedFabric = e.target.value;
        formCopy.rooms[formCopy.selectedRoom].windows[formCopy.selectedWindow].selectedPriceGroup = formCopy.fabricToPriceGroupMapping[e.target.value];
        break;
      case "pricegroup":
        formCopy.rooms[formCopy.selectedRoom].windows[formCopy.selectedWindow].selectedPriceGroup = e.target.value;
        break;
      case "toggle-valance":
        formCopy.rooms[formCopy.selectedRoom].windows[formCopy.selectedWindow].showValance = !formCopy.rooms[formCopy.selectedRoom].windows[formCopy.selectedWindow].showValance
        break;
      case "valance":
        formCopy.rooms[formCopy.selectedRoom].windows[formCopy.selectedWindow].selectedValanceOption = e.target.value;
        break;
      case "units":
        formCopy.rooms[formCopy.selectedRoom].windows[formCopy.selectedWindow].dimensions[e.target.id] = e.target.value;
        break;
      case "width":
      case "height":
        formCopy.rooms[formCopy.selectedRoom].windows[formCopy.selectedWindow].dimensions[e.target.id] = parseInt(e.target.value);
        break;
      default:
        console.log("unhandled ")
        console.log(e.target)
    }
    this.props.setForm(formCopy)

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
        formCopy.rooms.push({
          id:shortid.generate(),
          name:`Room ${formCopy.rooms.length+1}`,
          description: ``,
          windows:[{
            id:shortid.generate(),
            name:`Window ${formCopy.rooms[formCopy.selectedRoom].windows.length+1}`,
            description: ``,
            dimensions: {
              units: 'inches',
              width:30,
              height:30
            },
            extras:[],
            selectedValanceOption:'Decora 8',
            selectedBlindType:'Roller',
            selectedFabric: formCopy.rooms[formCopy.selectedRoom].windows[formCopy.rooms[formCopy.selectedRoom].windows.length-1].selectedFabric,
            selectedHem:'Plain Hem',
            selectedHemColor:'White',
            selectedEndCap:'Grey',
            selectedSomfyMotorizationOption: `Roller Shade, Interlude, Illusions - R28`,
            selectedSomfyPowerOption: `12V Reloadable Lithium Battery Tube`,
            selectedSomfyControlSensorOption: `Telis 1 Channel RTS Remote Pure`,
            selectedSomfyListControls:[],
            selectedMotorizationSeries:'Sun Glo',
            selectedSunGloMotorizationOption: `Default`,
            selectedSunGloConnectionHub:'SG Connector Control Hub',
            selectedPriceGroup:'PG1',
            showMotorization:false,
            selectedCordPlacement: 'Left',
            showValance:false,
            total:155.95
          }],
          showMotorization:false,
          selectedSomfyMotorizationOption: `Roller Shade, Interlude, Illusions - R28`,
          selectedSomfyPowerOption: `12V Reloadable Lithium Battery Tube`,
          selectedSomfyControlSensorOption: `Telis 1 Channel RTS Remote Pure`,
          selectedSomfyListControls:[],
          selectedMotorizationSeries:'Sun Glo',
          selectedSunGloMotorizationOption: `Default`,
          selectedSunGloConnectionHub:'None',
          selectedSunGloPowerControl:'SG DC Charger',
          selectedSunGloRemote:'SG 1 Channel Standard',
          extras:[],
        })
        this.props.setForm(formCopy)

        break;
      case "add-window":
        formCopy.rooms[formCopy.selectedRoom].windows.push({
          id:shortid.generate(),
          name:`Window ${formCopy.rooms[formCopy.selectedRoom].windows.length+1}`,
          description: ``,
          dimensions: {
            units: 'inches',
            width:30,
            height:30
          },
          extras:[],
          selectedValanceOption:'Decora 8',
          selectedBlindType:'Roller',
          selectedFabric: formCopy.rooms[formCopy.selectedRoom].windows[formCopy.rooms[formCopy.selectedRoom].windows.length-1].selectedFabric,
          selectedHem:'Plain Hem',
          selectedHemColor:'White',
          selectedEndCap:'Grey',
          showValance:false,
          total:155.95
        })
        this.props.setForm(formCopy)

        break;
      default:
        console.log("unhandled " + e.target.id)
    }
  }
  _calculateTotal(dim, at, vt) {
    //this is bound to the scope!
    console.log("calculatin ")
    console.log(dim)
    console.log(at)
    console.log(vt)

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
        console.log("making valance tables")
        console.log(tableHeight)
        console.log(vt)
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
    let grandTotal = 0.00;

    //get each window's total
    if(this.props.form.rooms.length > 1) {
      windows = this.props.form.rooms.reduce((w,r2)=>{
        return [...w, ...r2.windows];
      }, []);
    } else {
      windows = this.props.form.rooms[0].windows;
      //grandTotal = windowTotal
    }

    //add per room motorization costs
    this.props.form.rooms.forEach((r,i)=>{
      if(r.showMotorization) {
        if(r.selectedMotorizationSeries === 'Sun Glo') {
          grandTotal += 360.00 //default sunglo rechargeable motor  this should be its own object in the form state
          grandTotal += this.props.form.connectionHubOptions.find(ch=>ch.type === r.selectedSunGloConnectionHub).price;
          grandTotal += this.props.form.remoteOptions.find(ro=>ro.type === r.selectedSunGloRemote).price;
          grandTotal += this.props.form.powerControlOptions.find(pc=>pc.type === r.selectedSunGloPowerControl).price;

          // windowTotal += this.props.form.powerControlOptions.find(pc=>pc.type === r.windows[this.props.form.selectedWindow].selectedSunGloPowerControl).price;
          // windowTotal += this.props.form.remoteOptions.find(ro=>ro.type === r.windows[this.props.form.selectedWindow].selectedSunGloRemote).price;
        }
        if(r.selectedMotorizationSeries === 'Somfy') {
          let motorCode = this.props.form.SomfyMotorOptions.find(mo=>mo.type === r.selectedSomfyMotorizationOption).code

          grandTotal += this.props.form.SomfyMotorOptions.find(mo=>mo.type === r.selectedSomfyMotorizationOption).price;
          grandTotal += this.props.form.SomfyPowerOptions[motorCode].find(po=>po.type === r.selectedSomfyPowerOption).price;
          /* Control Sensor Options & Extra Items -- Should adapt and abstract this! */
          r.extras.forEach(extra=>{
            grandTotal += extra.price;
          })
        }
      }
    });



    grandTotal += parseFloat(windows.reduce((sum,w)=>sum+w.total, 0))

    return grandTotal.toFixed(2);
  }

  _printForm(form) {
    var text = ``;
    var copy = {...form}
    var preppedWindows = [];

    copy.rooms.forEach((r,i)=>{
      r.windows.forEach(w=> {

        if(w.showValance) {
          w.ValanceOption = w.selectedValanceOption;
        }
        if(r.showMotorization && w.selectedMotorizationSeries === 'Sun Glo') {
          w.MotorizationOption = w.selectedMotorizationSeries;
          delete w.selectedSomfyPowerOption;
          delete w.selectedSomfyListControls;
          delete w.selectedSomfyMotorizationOption;
          delete w.selectedSomfyControlSensorOption;

        } else if (r.showMotorization && w.selectedMotorizationSeries === 'Somfy') {
          delete w.selectedSunGloRemote;
          delete w.selectedSunGloPowerControl;
          delete w.selectedSunGloConnectionHub;
          delete w.selectedSunGloMotorizationOption;
          w.extras = w.extras.map(e=> ({
            ...e,
            price:parseFloat(e.price).toFixed(2)

          }))
        }
        w.Fabric = w.selectedFabric;
        w.PriceGroup = w.selectedPriceGroup;

        delete w.id;
        delete w.showValance;
        delete r.showMotorization;
        delete w.selectedMotorization;
        delete w.selectedValanceOption;
        delete w.selectedFabric;
        preppedWindows.push({
          ...w,
          name:`${r.name}-${w.name}`,
        });
      }) });

    return {
      projectId: form.projectId,
      clientName: form.clientName,
      windows:preppedWindows,
      grandTotal: this._calculateGrandTotal(),
    }
  }

  render () {
    const {classes, form, workbook} = this.props
    let activeTable = []
    let valanceTable = []

    if(typeof workbook.Sheets[form.rooms[form.selectedRoom].windows[form.selectedWindow].selectedBlindType] !== 'undefined' && form.priceGroups.findIndex(pg=>form.rooms[form.selectedRoom].windows[form.selectedWindow].selectedPriceGroup) > -1) {
      const index = form.priceGroups.findIndex(pg=>pg===form.rooms[form.selectedRoom].windows[form.selectedWindow].selectedPriceGroup);
      const rangeString = form.priceGroupMap[index]

      activeTable = parseTableFromRange(rangeString, workbook.Sheets[form.rooms[form.selectedRoom].windows[form.selectedWindow].selectedBlindType])

      if(form.rooms[form.selectedRoom].windows[form.selectedWindow].showValance) {
        console.log("fetching valance table...")
        console.log(form.selectedValance)
        const vindex = form.valances.findIndex(v=>v===form.selectedValance)
        console.log(vindex)
        const valanceRangeString = form.valanceMap[vindex]
        console.log(valanceRangeString)
        valanceTable = parseTableFromRange(valanceRangeString, workbook.Sheets[form.selectedValance]);
      }

    }

    //var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
    //   var json_object = JSON.stringify(XL_row_object);

    const windowTotal = this._calculateTotal(form.rooms[form.selectedRoom].windows[form.selectedWindow].dimensions, activeTable, valanceTable);
    form.rooms[form.selectedRoom].windows[form.selectedWindow].total = parseFloat(windowTotal);  //hardset formstate

    const grandTotal = this._calculateGrandTotal();


    let currentWindow = form.rooms[form.selectedRoom].windows[form.selectedWindow];

    let motorCode = form.SomfyMotorOptions.find(mo=>mo.type === form.rooms[form.selectedRoom].selectedSomfyMotorizationOption).code

    console.log("MOTORCODE: " + motorCode)
    return (
        <div className={classes.root}>
          <Typography className={classes.typography} variant="title">Interactive Pricing Form</Typography>
          <Typography className={classes.typography} variant="subtitle1">Project Id.: {form.projectId}</Typography>
          <TextField id="client-name" label="Client Name" value={form.clientName} onChange={this._handleChange.bind(this)}/>

          <div className={classes.column}>
            <RoomPanel handleClick={this._handleClick.bind(this)} handleChange={this._handleChange.bind(this)} rooms={form.rooms} selectedRoom={form.selectedRoom}/>
            <WindowPanel handleClick={this._handleClick.bind(this)} handleChange={this._handleChange.bind(this)} windows={form.rooms[form.selectedRoom].windows} selectedWindow={form.selectedWindow}/>

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
                  items={/*this.props.form.selectedBlindType === 'Interlude' ? this.props.form.priceGroups.slice(0,4) : this.props.form.priceGroups*/
                    Object.keys(form.fabricToPriceGroupMapping)
                  }
                  selectedItem={currentWindow.selectedFabric}
                  handleChange={this._handleChange.bind(this)}/>
                <OutlinedDropdown
                  title="PriceGroup"
                  helperText="Select a Price Group"
                  hidden={true}
                  items={currentWindow.selectedBlindType === 'Interlude' ? form.priceGroups.slice(0,4) : form.priceGroups}
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
                  items={form.hembars}
                  selectedItem={currentWindow.selectedHem}
                  handleChange={this._handleChange.bind(this)}/>
            </div>
            <div>
              <Typography variant="subtitle1">Hem Bar Colour </Typography>
                <OutlinedDropdown
                  title="SelectedHemColor"
                  helperText="Select a Hem Bar Colour"
                  items={form.hemColorOptions}
                  selectedItem={currentWindow.selectedHemColor}
                  handleChange={this._handleChange.bind(this)}/>
            </div>
            <div>
              <Typography variant="subtitle1">End Cap Colour </Typography>
                <OutlinedDropdown
                  title="SelectedEndCap"
                  helperText="Select an End Cap colour"
                  items={form.endCapOptions}
                  selectedItem={currentWindow.selectedEndCap}
                  handleChange={this._handleChange.bind(this)}/>
            </div>
        </div>
        {/* Valance Panel */}

        <AddValanceOption
          form={form}
          disabled={currentWindow.selectedBlindType === 'Vision' ? true : false}
          window={currentWindow}
          handleChange={this._handleChange.bind(this)}/>

        {/* Motorization Panel*/}
        <div>
          <InputLabel>{form.rooms[form.selectedRoom].showMotorization ? `Remove Motorization` : `Add Motorization`}</InputLabel>
          <Checkbox
            id="show-motorization"
            checked={form.rooms[form.selectedRoom].showMotorization}
            onChange={this._handleChange.bind(this)}
            value={form.rooms[form.selectedRoom].selectedMotorizationSeries}
          />
        </div>

          <div className={classes.row} style={{alignItems:'baseline'}}>
            {
              form.rooms[form.selectedRoom].showMotorization && (
                <div>
                  <div>
                    <InputLabel>Room Motorization Option</InputLabel>
                    <OutlinedDropdown
                      title="selectedMotorizationSeries"
                      helperText="Select a Motorization Series"
                      items={form.motorizationSeries}
                      selectedItem={form.rooms[form.selectedRoom].selectedMotorizationSeries}
                      handleChange={this._handleChange.bind(this)}/>
                  </div>
                  { form.rooms[form.selectedRoom].selectedMotorizationSeries === 'Sun Glo' &&
                    <div>
                    <Typography variant="subtitle1">Sun Glo Options </Typography>
                    <div className={classes.row}>
                      <div className={classes.marginBetween}>
                        <Typography variant="subtitle1">Connection Hub Options </Typography>
                          <OutlinedDropdown
                            title="SelectedSunGloConnectionHub"
                            helperText="Select a Connection Hub"
                            items={form.connectionHubOptions.map(o=>o.type)}
                            selectedItem={form.rooms[form.selectedRoom].selectedSunGloConnectionHub}
                            handleChange={this._handleChange.bind(this)}/>
                      </div>

                      <div className={classes.marginBetween}>
                        <Typography variant="subtitle1">Power Control Options </Typography>
                          <OutlinedDropdown
                            title="SelectedSunGloPowerControl"
                            helperText="Select a Power control type"
                            items={form.powerControlOptions.map(o=>o.type)}
                            selectedItem={form.rooms[form.selectedRoom].selectedSunGloPowerControl}
                            handleChange={this._handleChange.bind(this)}/>
                      </div>

                      <div className={classes.marginBetween}>
                        <Typography variant="subtitle1">Remote Options </Typography>
                          <OutlinedDropdown
                            title="SelectedSunGloRemote"
                            helperText="Select a Remote type"
                            items={form.remoteOptions.map(o=>o.type)}
                            selectedItem={form.rooms[form.selectedRoom].selectedSunGloRemote}
                            handleChange={this._handleChange.bind(this)}/>
                      </div>
                    </div>
                  </div>
                  }

                  { form.rooms[form.selectedRoom].selectedMotorizationSeries === 'Somfy' &&
                    <div>
                      <Typography variant="subtitle1">Somfy Options </Typography>
                      <div className={classes.row}>
                          <OutlinedDropdown
                            title="SelectedSomfyMotorizationOption"
                            helperText="Select a Motor option"
                            handleChange={this._handleChange.bind(this)}
                            selectedItem={form.rooms[form.selectedRoom].selectedSomfyMotorizationOption}
                            items={form.SomfyMotorOptions.map(o=>o.type)}
                            />
                          <OutlinedDropdown
                            title="SelectedSomfyPowerOption"
                            helperText="Select a Power option"
                            handleChange={this._handleChange.bind(this)}
                            selectedItem={form.rooms[form.selectedRoom].selectedSomfyPowerOption}
                            items={form.SomfyPowerOptions[motorCode].map(o=>o.type)}
                            />
                          <OutlinedDropdown
                            title="SelectedSomfyControlSensorOption"
                            helperText="Add controls and sensors"
                            handleChange={this._handleChange.bind(this)}
                            selectedItem={form.rooms[form.selectedRoom].selectedSomfyControlSensorOption}
                            items={form.SomfyControlSensorOptions.map(o=>o.type)}
                            />
                      </div>
                    </div>
                  }
                </div>
              )
            }
            {
              !form.rooms[form.selectedRoom].showMotorization && (
                <div style={{paddingTop:'0.75rem'}}>
                  <InputLabel>Cord Placement</InputLabel>
                  <OutlinedDropdown
                    title="cordPlacement"
                    helperText="Select a Cord Placement"
                    items={form.cordPlacements}
                    selectedItem={form.rooms[form.selectedRoom].selectedCordPlacement}
                    handleChange={this._handleChange.bind(this)}/>
                </div>)
            }

          </div>
          {
            form.rooms[form.selectedRoom].extras.length > 0 &&
            form.rooms[form.selectedRoom].extras.map(extra=>{
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
            <Typography variant="display1"><b>Current Window Total:</b> ${windowTotal} </Typography>
          </div>
          <div className={classes.row}>
            <Typography variant="display2"><b>Total:</b> {
              `$${grandTotal}`
          } </Typography>
        <IconButton id="download-form" disabled={windowTotal === -1} onClick={(e)=>{this._handleClick({target:{id:'download-form'}})}} color="primary" className={classes.button} aria-label="Add to shopping cart" size="large">
            <CloudDownloadIcon/>
          </IconButton>
          </div>
          <div className={classes.row}>
            {grandTotal.toString() === 'NaN' &&
              <div >
                <Typography variant="subtitle1" color="secondary">Error: You picked an unavailable dimension.</Typography>
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
