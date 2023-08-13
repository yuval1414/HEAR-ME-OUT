import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import { Padding } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
    inputLabel: {
        zIndex: 1,
        color: theme.palette.white,
        width: '100%',
        zIndex: 1,
        pointerEvents: 'none',
        transformOrigin: 'top right',
        color: '#fff !important',
    },

}));

export const SettingDropDown = ({ title, options }) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        //style={{ padding: '25px' }}
        <FormControl >
            <InputLabel className={classes.inputLabel} variant="standard" id="demo-simple-select-label">{title}</InputLabel>
            <Select
                sx={{
                    boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }, "& .MuiSvgIcon-root": {
                        right: "unset",
                        left: "7px",
                    }
                }}
                // value={lettersChoice}
                // onChange={handleLetterChoice}
                IconComponent={(props) => (
                    <ArrowDropDownIcon {...props} style={{ fontSize: '50px', color: theme.palette.white }} />
                )}
                style={{
                    backgroundColor: theme.palette.green,
                    color: theme.palette.white,
                    width: '301px',
                    borderRadius: '50px',
                }}
            >
                {options.map((option) => <MenuItem style={{ justifyContent: 'center' }} value={option}>{option}</MenuItem>)}
            </Select>
        </FormControl>
    );
};

export default SettingDropDown;