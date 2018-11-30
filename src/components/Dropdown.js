import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: theme.spacing.unit / 4,
    },
    noLabel: {
      marginTop: theme.spacing.unit * 3,
    },
  });

export default withStyles(styles)(

    (props)=>{
        const {classes, handleSelect, selectedItem, items} = props;
        console.log(items)
        return (
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="select-multiple">Name</InputLabel>
                <Select

                    value={selectedItem}
                    onChange={(e)=>{
                        handleSelect(e.target.value);
                    }}
                    input={<Input id="select-multiple" />}
                    MenuProps={MenuProps}
                >
                    {items.map(item => (
                    <MenuItem key={item} value={item}>
                        {item}
                    </MenuItem>
                    ))}
                </Select>
            </FormControl>
            )
    }
)
