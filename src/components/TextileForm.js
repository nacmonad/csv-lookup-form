import React, {Component} from 'react';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import Dropdown from './Dropdown';
import OutlinedDropdown from './OutlinedDropdown';
import WidthHeightTextInput from './WidthHeightTextInput';



import {selectWorksheet, setForm} from '../actions/form';
import {parseTableFromRange} from '../methods';



const styles = {
  root:{
    padding:'0.5rem'
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
  _handleChange(e) {
    console.log(e.target)
    let formCopy = {...this.props.form}
    switch(e.target.name) {
      case "units":
      case "width":
      case "height":
        formCopy.dimensions[e.target.name] = e.target.value;
        this.props.setForm(formCopy)
        break;
      case "worksheet":
        formCopy.selectedWorksheet = e.target.value
        this.props.setForm(formCopy)
        break;
      case "pricegroup":
        formCopy.selectedPriceGroup = e.target.value
        this.props.setForm(formCopy)
        break;
      default:
        console.log("unhandled ")
        console.log(e.target)
    }
  }

  _calculateTotal(dim, at) {
    console.log("calculatin omsethin")
    console.log(dim)
    console.log(at)
    let findRow = -1;
    let findCol = -1;

    if(at.length > 0) {
      const tableHeight = at.length;  //rows
      const tableWidth = at[0].length; //

      console.log(`scanning ${tableWidth}x${tableHeight}`)
      for(var i=0; i<tableHeight; i++){
        //ignore 0,0
        if(i===0) {
          //scan header
          console.log("Header col find:")
          console.log(at[i].slice(1))
          findCol = at[i].slice(1).findIndex(c=>parseInt(c)>=dim.width)+1;
          console.log(findCol)
        } else {
          //scan first element of each row

          console.log(at[i][0])
          if( parseInt(at[i][0])>=dim.height && findRow < 0) {
            console.log("row find " + i)
            parseInt(at[i][0])
            findRow=i
          }
        }

      }
      console.log(`found in ${findCol}x${findRow}`)
      console.log(at[findCol][findRow])
      return at[findRow][findCol]
    }
    return -1;
  }

  render () {
    const {classes, form, workbook} = this.props
    let activeTable = []

    console.log(form)
    console.log(workbook)
    //workbook.Sheets[form.selectedWorksheet]['!ref'] = "A5:S24"

    if(typeof workbook.Sheets[form.selectedWorksheet] !== 'undefined') {
      const rangeString = "A5:S24"
      activeTable = parseTableFromRange(rangeString, workbook.Sheets[form.selectedWorksheet])
      console.log(activeTable)

    }

    //var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
    //   var json_object = JSON.stringify(XL_row_object);
    const total = this._calculateTotal(form.dimensions, activeTable);

    return (
        <div className={classes.root}>
          <Typography variant="title">Interactive Pricing Form</Typography>


          <div className={classes.column}>
            <WidthHeightTextInput
              maxWidth={activeTable[0] ? activeTable[0][activeTable[0].length-1] : 0}
              maxHeight={activeTable[0] ? activeTable[activeTable.length-1][0] : 0}
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
                items={this.props.form.selectedWorksheet === "Interlude" ? this.props.form.priceGroups.slice(0,4): this.props.form.priceGroups}
                selectedItem={this.props.form.selectedPriceGroup}
                handleSelect={this._handleChange.bind(this)}/>
            </div>
          }

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
