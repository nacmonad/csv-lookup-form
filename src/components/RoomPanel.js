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
    maxWidth:'48rem'

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



class RoomPanel extends Component {

  render(){
    const {classes, handleClick, handleChange, rooms, selectedRoom} = this.props;
    return (
      <div className={classes.root} >
        <div className={classNames(classes.row, classes.descriptionField)}>
          <Typography className={classes.typography} variant="subtitle1">Rooms</Typography>

            <div style={{ maxWidth:'12rem', textAlign:'center'}}>
              <Typography variant="subtitle2">Add a room</Typography>
              <Button className={classes.fab} onClick={handleClick} id="add-room" size="small" variant="fab">
                <AddIcon></AddIcon>
              </Button>
            </div>

          </div>
        {/*rooms.find(r=>r.name===selectedRoom).name*/}
        <Tabs
            value={selectedRoom}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            centered={false}
          >
            {rooms.map(r=>(
              <Tab key={r.id} name="selectedRoom" label={r.name} />))
            }
          </Tabs>
           <div className={classes.container}>
               <div className={classes.row}>
                  <TextField
                    className={classNames(classes.textField, classes.nameField)}
                    name="room-name"
                    label="Name"
                    value={rooms[selectedRoom].name}
                    onChange={handleChange}
                    />

              </div>
              <TextField
                name="room-description"
                className={classNames(classes.textField, classes.descriptionField)}
                label="Description"
                value={rooms[selectedRoom].description}
                onChange={handleChange}
                />
           </div>
      </div>
    )
  }
}

export default withStyles(styles, {withTheme:true})(RoomPanel)
