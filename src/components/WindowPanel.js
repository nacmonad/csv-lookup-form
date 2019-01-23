import React, {Component} from 'react';
import classNames from 'classnames';

import Button from '@material-ui/core/Button';
//import Fab from '@material-ui/core/Fab';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';


import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root:{
    margin:'0.5rem 0 0.5rem 0',
    maxWidth:'32rem'

  },
  container:{
    display:'flex',
    flexDirection:'column',
    margin: '0.5rem 1rem 0.5rem 1rem'
  },
  nameField:{
    maxWidth:'8rem'
  },
  descriptionField:{
    maxWidth:'32rem'
  },
  fab: {
    //margin:theme.spacing.unit,
    height:'2rem',
    width:'2rem',
    minWidth:'1rem'
  },
  textField:{
    margin:'0 0.5rem 0 0.5rem'
  },
  row:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  }
})




class WindowPanel extends Component {

  render(){
    const {classes, handleClick, handleChange, windows, selectedWindow} = this.props;
    return (
      <div className={classes.root} >
        <div className={classes.row}>
          <Typography className={classes.typography} variant="subtitle1">Windows</Typography>

            <div style={{maxWidth:'12rem', textAlign:'center'}}>
              <Typography variant="subtitle2">Add a window</Typography>
              <Button className={classes.fab} onClick={handleClick} id="add-window" size="small" variant="fab">
                <AddIcon></AddIcon>
              </Button>
            </div>

          </div>

        {/*rooms.find(r=>r.name===selectedRoom).name*/}
        <Tabs
            value={selectedWindow}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"

          >
            {windows.map(r=>(
              <Tab key={r.id} name="selectedWindow" label={r.name} />))
            }
          </Tabs>
           <div>
              {windows[selectedWindow].name } <br/>
              {windows[selectedWindow].description }


           </div>
      </div>
    )
  }
}

export default withStyles(styles)(WindowPanel)