import { MenuItem, Select, FormControl, InputLabel, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import { Expand, Label, Padding } from '@mui/icons-material';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    inputLabel: {
        zIndex: 1,
        color: theme.palette.white,
        width: '100%',
        zIndex: 1,
        pointerEvents: 'none',
        transformOrigin: 'top right',
        color: '#fff',
    },
    typography: {
        fontSize: 'xx-large', fontWeight: 'bold', color: 'coral',
        alignItems: 'flex-end', justifyContent: 'flex-end',
        paddingTop: '20px',
    },
}));




export const SettingDropDown = ({ title, options, updateState, value }) => {
    const classes = useStyles();
    const theme = useTheme();
    const handleChoice = (choice) => {
        updateState(choice);
    };

    return (
        <>
            <Typography className={classes.typography} >{title}</Typography>
            <FormControl >
                <Select
                    value={value}
                    sx={{
                        boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }, "& .MuiSvgIcon-root": {
                            right: "unset",
                            left: "7px",
                        }
                    }}

                    IconComponent={(props) => (
                        <ArrowDropDownIcon {...props} style={{ fontSize: '50px', color: theme.palette.white }} />
                    )}
                    style={{
                        backgroundColor: theme.palette.green,
                        color: theme.palette.white,
                        width: '301px',
                        borderRadius: '50px',
                        fontSize: 'larger'
                    }}

                >
                    {options.map((option) => <MenuItem style={{ justifyContent: 'center' }} value={option}
                        onClick={() => handleChoice(option)}>{option.label}</MenuItem>)}

                </Select>
            </FormControl>
        </>
    );
};

export default SettingDropDown;