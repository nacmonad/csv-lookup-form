import React, {Component} from 'react';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import OutlinedDropdown from './OutlinedDropdown';
import WidthHeightTextInput from './WidthHeightTextInput';
import AddValanceOption from './AddValanceOption'

import {selectWorksheet, setForm} from '../actions/form';
import {parseTableFromRange} from '../methods';


//UNIT CONVERSION
const CM_TO_INCH=0.393701;

const styles = {
  root:{

  },
  column:{
    display:'flex',
    flexDirection:'column',
    margin:'1rem 0'
  },
  row:{
    display:'flex',
    flexDirection:'row',
    margin:'1rem 0'
  }
}

class TextileForm extends Component {
  constructor(){
    super();
    this._handleChange = this._handleChange.bind(this)
    this._calculateTotal = this._calculateTotal.bind(this)
  }
  _handleChange(e) {
    console.log(e.target)
    let formCopy = {...this.props.form}
    switch(e.target.name) {
      case "worksheet":
        formCopy.selectedWorksheet = e.target.value
        formCopy.selectedValance = `${e.target.value.charAt(0).toUpperCase()} Valance`
        this.props.setForm(formCopy)
        break;
      case "pricegroup":
        formCopy.selectedPriceGroup = e.target.value
        this.props.setForm(formCopy)
        break;
      case "toggle-valance":
        this.props.setForm({ ...formCopy, showValance:!formCopy.showValance })
        break;
      case "valance":
        formCopy.selectedValanceOption = e.target.value;
        this.props.setForm(formCopy)
        break;
      case "units":
        formCopy.dimensions[e.target.name] = e.target.value;
        this.props.setForm(formCopy)
        break;
      case "width":
      case "height":
        formCopy.dimensions[e.target.name] = parseInt(e.target.value);
        this.props.setForm(formCopy)
        break;
      default:
        console.log("unhandled ")
        console.log(e.target)
    }
  }

  _calculateTotal(dim, at, vt) {
    //this is bound to the scope!
    console.log("calculatin omsethin")
    console.log(dim)
    console.log(at)
    console.log(vt)


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

    if(at.length > 0 && at[0].length > 0 ) {
      const tableHeight = at.length;  //rows
      const tableWidth = at[0].length; //

      for(var i=0; i<tableHeight; i++){
        //ignore 0,0
        if(i===0) {
          //scan header row on first iteration
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
        console.log("Parsing header row of valance table")
        console.log(vt)
        let tempOptions = []

        //TODO: dont do this!
        if(this.props.form.selectedValanceOption === '') this.props.form.selectedValanceOption = vt[1][0]

        for(var i =1; i< tableHeight; i++ ) {
          console.log()
          console.log(vt[i][0] + " compared to " + this.props.form.selectedValanceOption)
          tempOptions.push(vt[i][0])
          if(vt[i][0] === this.props.form.selectedValanceOption){
            console.log("found col match: " + i)
            findVRow = i;
          }
        }
        this.props.form.valanceOptions = tempOptions  //TODO: dont do this...update the valanceOptions on the form

        //may not find row match if new worksheet

        if(findVRow < 0) return -1
        //width is assumed, same findCol
        console.log(at[findRow][findCol])
        console.log(vt[findVRow][findCol])
        return (parseFloat(at[findRow][findCol])+parseFloat(vt[findVRow][findCol])).toFixed(2)
      } else {
        console.log("finding...")
        console.log(findRow)
        console.log(findCol)
        return (parseFloat(at[findRow][findCol])).toFixed(2);
      }


    }
    return -1;
  }

  render () {
    const {classes, form, workbook} = this.props
    let activeTable = []
    let valanceTable = []
    console.log(workbook)
    if(typeof workbook.Sheets[form.selectedWorksheet] !== 'undefined' && form.priceGroups.findIndex(pg=>form.selectedPriceGroup) > -1) {
      const index = form.priceGroups.findIndex(pg=>pg===form.selectedPriceGroup);
      const rangeString = form.priceGroupMap[index]

      activeTable = parseTableFromRange(rangeString, workbook.Sheets[form.selectedWorksheet])

      if(form.showValance) {
        console.log("fetching valance table...")
        const vindex = form.valances.findIndex(v=>v===form.selectedValance)
        const valanceRangeString = form.valanceMap[vindex]
        valanceTable = parseTableFromRange(valanceRangeString, workbook.Sheets[form.selectedValance]);
      }

    }

    //var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
    //   var json_object = JSON.stringify(XL_row_object);
    const total = this._calculateTotal(form.dimensions, activeTable, valanceTable);
    console.log("units")
    console.log(form.dimensions.units)
    return (
        <div className={classes.root}>
          <Typography variant="title">Interactive Pricing Form</Typography>


          <div className={classes.column}>
            <WidthHeightTextInput
              maxWidth={activeTable[0] ? ( form.dimensions.units==='inches' ? activeTable[0][activeTable[0].length-1] : activeTable[0][activeTable[0].length-1]/CM_TO_INCH) : 0}
              maxHeight={activeTable[0] ? ( form.dimensions.units==='inches' ? activeTable[activeTable.length-1][0] : activeTable[activeTable.length-1][0]/CM_TO_INCH) : 0}
              dimensions={form.dimensions}
              handleChange={this._handleChange.bind(this)}
              />
            <OutlinedDropdown
              title="Units"
              helperText="Please select measurement unit"
              items={["inches", "centimetres"]}
              selectedItem={form.dimensions.units}
              handleSelect={this._handleChange.bind(this)}/>
          </div>
          {/*Work Sheets Select*/
            <div className={classes.row}>
              <OutlinedDropdown
                title="Worksheet"
                helperText="Select a Worksheet"
                items={workbook.SheetNames.filter(((a,i)=>i%2===0))}
                selectedItem={this.props.form.selectedWorksheet}
                handleSelect={this._handleChange.bind(this)}/>
              <OutlinedDropdown
                title="PriceGroup"
                helperText="Select a Price Group"
                items={this.props.form.selectedWorksheet === 'Interlude' ? this.props.form.priceGroups.slice(0,4) : this.props.form.priceGroups}
                selectedItem={this.props.form.selectedPriceGroup}
                handleSelect={this._handleChange.bind(this)}/>
            </div>
          }

          <AddValanceOption form={form} workbook={workbook} handleChange={this._handleChange.bind(this)}/>

          <div>
            <Typography variant="display1"><b>Total:</b> {total} </Typography>
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
    setForm
  }, dispatch);
}

export default withStyles(styles)(connect(
    mapStateToProps,
    mapDispatchToProps
  )(TextileForm))
