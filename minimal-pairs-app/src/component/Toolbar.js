import { IconButton, Menu, MenuItem as MuiMenuItem, Toolbar as MuiToolbar } from "@mui/material";
import { makeStyles } from "@mui/styles"
import { useNavigate, useLocation } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { useState } from "react";

const useStyles = makeStyles(() => ({
    toolbar: {
        justifyContent: 'flex-end',
        position: 'absolute !important',
        width: '100%',
        padding: '0 !important',
    },
}));

export const PAGES = {
    home: { path: '/', label: 'ראשי' },
    exerciseOptionsPage: { path: '/ExerciseOptionsPage', label: 'תרגול' },
    exercisePage: { path: '/ExercisePage' },
    gamesOptionsPage: { path: '/GamesOptionsPage', label: 'משחקים' },
    helpPage: { path: '/HelpPage', label: 'עזרה' },
    aboutPage: { path: '/AboutPage', label: 'אודות' },
};

const MenuItem = ({ page }) => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <MuiMenuItem disabled={location.pathname === page.path} onClick={() => navigate(page.path)} style={{ justifyContent: 'center' }}>{page.label}</MuiMenuItem>
    );
};

const Toolbar = () => {
    const location = useLocation();
    const classes = useStyles();
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);
    const [soundAnchorEl, setSoundAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setMenuAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setMenuAnchorEl(null);
    };

    const handleSoundClick = (event) => {
        setSoundAnchorEl(event.currentTarget);
    };

    const handleSoundClose = () => {
        setSoundAnchorEl(null);
    };

    return (
        <MuiToolbar className={classes.toolbar} variant="dense">
            {location.pathname === PAGES.exercisePage.path && (
                <div style={{ flexGrow: 1 }}>
                    <IconButton color="inherit" onClick={handleSoundClick}>
                        <VolumeUp />
                    </IconButton>

                    <Menu
                        anchorEl={soundAnchorEl}
                        open={Boolean(soundAnchorEl)}
                        onClose={handleSoundClose}
                    >
                        <MuiMenuItem onClick={handleSoundClose} >Man</MuiMenuItem>
                        <MuiMenuItem onClick={handleSoundClose}>Woman</MuiMenuItem>
                        <MuiMenuItem onClick={handleSoundClose}>Both</MuiMenuItem>
                        <MuiMenuItem onClick={handleSoundClose}>No sound</MuiMenuItem>
                    </Menu>
                </div>
            )}
            <IconButton color="inherit" onClick={handleMenuClick}>
                <MenuIcon />
            </IconButton>
            <Menu
                anchorEl={menuAnchorEl}
                open={Boolean(menuAnchorEl)}
                onClose={handleMenuClose}
            >
                <MenuItem page={PAGES.home} />
                <MenuItem page={PAGES.exerciseOptionsPage} />
                <MenuItem page={PAGES.gamesOptionsPage} />
                <MenuItem page={PAGES.helpPage} />
                <MenuItem page={PAGES.aboutPage} />
            </Menu>
        </MuiToolbar>
    );
};

export default Toolbar;