
import React, {Component} from 'react';

import { withStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';


const styles = {
    root:{

    },
    textField:{
      width:'5.5rem',
      margin:'0 0.5rem'
    }
}

export default withStyles(styles)((props) => {
    const {classes, dimensions, handleChange, maxWidth, maxHeight} = props;
    console.log(maxWidth)
    console.log(maxHeight)
    return (
    <div className={classes.root}>
        <TextField
          id="width"
          type="number"
          className={classes.textField}
          variant="outlined"
          label="Width"
          onChange={handleChange}
          value={dimensions.width}
          inputProps={{
             min:0,
             max:maxWidth
           }}/>
        <TextField
          id="height"
          type="number"
          className={classes.textField}
          variant="outlined"
          label="Height"
          value={dimensions.height}
          onChange={handleChange}
          inputProps={{
             min:0,
             max:maxHeight
           }}
        />
    </div>
    )
})
