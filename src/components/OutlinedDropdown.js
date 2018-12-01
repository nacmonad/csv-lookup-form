import React, {Component} from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root:{
    margin:'0.5rem 0 0.5rem 0'
  },
  container: {
   display: 'flex',
   flexWrap: 'wrap',
 },
 textField: {
   marginLeft: theme.spacing.unit,
   marginRight: theme.spacing.unit,
 },
 dense: {
   marginTop: 16,
 },
 menu: {
   width: 200,
 },
})



class OutlinedDropdown extends Component {

  render(){
    const {classes, handleSelect, selectedItem, items, title, helperText} = this.props;

    return (
      <div className={classes.root}>
        <TextField
         id="outlined-select-unit"
         select
         label={title}
         name={title.toLowerCase()}
         className={classes.textField}
         value={selectedItem}
         onChange={handleSelect}
         SelectProps={{
           MenuProps: {
             className: classes.menu,
           },
         }}
         helperText={helperText}
         margin="normal"
         variant="outlined"
       >
         {items.map(item => (
           <MenuItem key={item} value={item}>
             {item}
           </MenuItem>
         ))}
       </TextField>
      </div>
    )
  }
}

export default withStyles(styles)(OutlinedDropdown)