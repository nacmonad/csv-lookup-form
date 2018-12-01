import React, {Component} from 'react';

import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
//import Fab from '@material-ui/core/Fab';
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
  const {classes, form, workbook, handleChange} = props
  console.log("v form")
  console.log(form)
  return (
    <div>
      <div className={classes.row}>
        <Typography variant="title">Valence Options</Typography>
        <Button name="toggle-valance" className={classes.button} variant="fab" onClick={(e)=>{
          handleChange({
            target: {
              name:'toggle-valance',
            }
          })
        }}>{form.showValance ? <RemoveIcon></RemoveIcon>:<AddIcon></AddIcon>}</Button>
      </div>
      {form.showValance &&
        <OutlinedDropdown
          title="Valance"
          helperText="Please select valance option"
          items={form.valanceOptions}
          selectedItem={form.selectedValanceOption !== ""? form.selectedValanceOption : form.valanceOptions[0]}
          handleSelect={handleChange}
          />
      }
    </div>

  )
})