import React, { useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { IconButton, Typography, Replay, Button, Container, Toolbar } from '@mui/material';
import homePage from './../images/home-page.jpg';
import gamesIcon from './../buttons/gamesBtn.png';
import exerciseIcon from './../buttons/exercisesBtn.png';
import helpIcon from './../buttons/helpBtn.png';
import infoIcon from './../buttons/infoBtn.png';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
  },
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url(${homePage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: -1,
  },
  title: {
    position: 'absolute',
    top: 20,
    left: 20,
    color: '#fff',
    fontSize: 24,
    zIndex: 1,
  },
  iconButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    position: 'absolute',
    padding: '5%',
    gap: '16%',
    top: '70%',
    left: '29%',
    zIndex: 1,
  },
}));

function Home() {
  const classes = useStyles();

  useEffect(() => {
    const handleResize = () => {
      // Adjust the positions of the title and button when the window is resized
      const title = document.getElementById('title');
      const iconButton = document.getElementById('iconButton');
      // Set the positions based on the new window dimensions
      // title.style.top = '20px';
      // title.style.left = '20px';
    };
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navigate = useNavigate();
  const navigateExercise = () => {
    navigate('/ExerciseOptionsPage');
  };
  const navigateGamesOptions = () => {
    navigate('/GamesOptionsPage');
  };
  return (

    <body>
      <div id="container" className={classes.container} >
        <div id="background" className={classes.background}>
        <Toolbar variant="dense">
            <IconButton color="inherit" onClick={null}>
            <img src={infoIcon} style={{ width: 35, height: 35 }} /> 
            </IconButton>
              </Toolbar>
          <div className={classes.background} align="center" >
            <div className={classes.iconButton}>
              <IconButton id="iconButton" className={classes.iconButton} onClick={navigateExercise} >
                <img src={helpIcon} style={{ width: 50, height: 50 }} />
              </IconButton>
              <IconButton id="iconButton" className={classes.iconButton} onClick={navigateExercise} >
                <img src={exerciseIcon} style={{ width: 50, height: 50 }} />
              </IconButton>
              <IconButton id="iconButton" className={classes.iconButton} onClick={navigateGamesOptions} >
                <img src={gamesIcon} style={{ width: 50, height: 50 }} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>

    </body>
  )
}

export default Home;