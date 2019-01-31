import React, {Component} from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root:{
    margin:'0.5rem 0 0.5rem 0',
    minWidth:'8rem',
    maxWidth:'12rem'
  },
  hidden:{
    display:'none'
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
  _camelToNormal(str){
    return str
    // insert a space before all caps
     .replace(/([A-Z])/g, ' $1')
     // uppercase the first character
     .replace(/^./, function(str){ return str.toUpperCase(); });
  }
  render(){
    const {classes, handleChange, selectedItem, hidden, items, title, helperText} = this.props;
    console.log(handleChange)
    return (
      <div className={ hidden ? classes.hidden : classes.root}>
        <TextField
         id={title.toLowerCase()}
         select
         label={this._camelToNormal(title)}
         name={title.toLowerCase()}
         className={classes.textField}
         value={selectedItem}
         onChange={ e=>handleChange({target:{id:title.toLowerCase(), value:e.target.value}}) }
         SelectProps={{
           id:title.toLowerCase(),
           MenuProps: {
             className: classes.menu,
           },
         }}
         helperText={helperText}
         margin="normal"
         variant="outlined"
       >
         {items.map(item => (
           <MenuItem id={title.toLowerCase()}
             key={item} value={item}>
             {item}
           </MenuItem>
         ))}
       </TextField>
      </div>
    )
  }
}

export default withStyles(styles)(OutlinedDropdown)
