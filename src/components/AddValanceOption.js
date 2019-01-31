import React, {Component} from 'react';

import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

//import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Icon from '@material-ui/core/Icon';

import OutlinedDropdown from './OutlinedDropdown'

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
    alignItems:'center',
    margin:'1rem 0'
  },
  button:{
    margin:'0 1rem'
  }
}
export default withStyles(styles)((props)=>{
  const {classes, disabled, form, window, handleChange} = props
  console.log("v form")
  console.log(form.valanceOptions)
  console.log(window.selectedValanceOption)
  console.log(disabled)
  return (
    <div>
      <div className={classes.row}>
        <Typography variant="subtitle1">Valence Options</Typography>
        <Fab id="toggle-valance" disabled={disabled} className={classes.button} onClick={handleChange}>
          {window.showValance ? <RemoveIcon
              onClick={(e)=>{handleChange({target:{id:'toggle-valance', value:e.target.value}})}}
            ></RemoveIcon>:
            <AddIcon
              onClick={(e)=>{handleChange({target:{id:'toggle-valance', value:e.target.value}})}}
              ></AddIcon>}
        </Fab>
      </div>
      {window.showValance &&
        <OutlinedDropdown
          title="Valance"
          id="valance-option"
          helperText="Please select valance option"
          handleChange={handleChange}
          items={form.valanceOptions}
          selectedItem={window.selectedValanceOption !== "" ? window.selectedValanceOption : form.valanceOptions[0]}
          handleSelect={handleChange}
          />
      }
    </div>

  )
})
