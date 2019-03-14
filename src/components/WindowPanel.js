import React, {Component} from 'react';
import classNames from 'classnames';

import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
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
    maxWidth:'80%'

  },
  container:{
    display:'flex',
    flexDirection:'column',
    margin: '0.5rem 0rem 0.5rem 0rem'
  },
  nameField:{
    maxWidth:'8rem'
  },
  descriptionField:{
    maxWidth:'80%'
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
        <div className={classNames(classes.row, classes.descriptionField)}>
          <Typography className={classes.typography} variant="subtitle1">Windows</Typography>

            <div style={{maxWidth:'12rem', textAlign:'center'}}>
              <Typography variant="subtitle2">Add a window</Typography>
              <Fab className={classes.fab} onClick={handleClick} id="add-window" size="small">
                <AddIcon onClick={(e)=>handleClick({target:{id:'add-window'}})}></AddIcon>
              </Fab>
            </div>

          </div>

        {/*rooms.find(r=>r.name===selectedRoom).name*/}
        <Tabs
            value={selectedWindow}
            onChange={(e,v)=>handleChange({target:{id:'selectedWindow'}},v)}

            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"

          >
            {windows.map(r=>(
              <Tab key={r.id} onClick={e=>console.log(e.target)} label={r.name} />))
            }
          </Tabs>
          <div className={classes.container}>
              <div className={classes.row}>
                 <div style={{display:'flex', alignItems:'center'}}>
                   <TextField
                     className={classNames(classes.textField, classes.nameField)}
                     id="window-name"
                     label="Name"
                     value={windows[selectedWindow].name}
                     onChange={handleChange}
                     />

                   <Fab className={classes.fab} onClick={handleClick} disabled={windows.length < 2} id="remove-window" size="small">
                    <RemoveIcon onClick={(e)=>handleClick({target:{id:'remove-window'}})}></RemoveIcon>
                   </Fab>
                 </div>

             </div>
             <TextField
               id="window-description"
               className={classNames(classes.textField, classes.descriptionField)}
               label="Description"
               value={windows[selectedWindow].description}
               onChange={handleChange}
               />
          </div>
      </div>
    )
  }
}

export default withStyles(styles)(WindowPanel)
