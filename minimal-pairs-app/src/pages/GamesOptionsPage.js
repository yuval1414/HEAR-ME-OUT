import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import gamesOptionsPage from './../images/pagesBg/gamesWithoutKidBg.jpg';
import ImagePlaceHolder from '../component/ImagePlaceHolder';
import gamePuzzle from './../images/buttons/game_puzzle.png';
import gameHitTheMole from './../images/buttons/game_hitTheMole.png';
import gameMemoryGame from './../images/buttons/game_memoryGame.png';
import gameSnakeAndLadders from './../images/buttons/game_snakeAndLadders.png';
import gameTicTacToe from './../images/buttons/game_ticTacToe.png';
import gameRexy from './../images/buttons/game_rexy.png';

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
    backgroundImage: `url(${gamesOptionsPage})`,
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
    position: 'absolute',
    top: '21%',
    left: '45%',
    zIndex: 1,
  },
}));
function GamesOptionsPage() { 
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    const handleResize = () => {
      const title = document.getElementById('title');
      const iconButton = document.getElementById('iconButton');
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function loadTicTacToeGame(event) {
    navigateToGame('TicTacToeGame');
  };

  const navigate = useNavigate();
  const navigateToGame = (gameName) => {
    navigate(`/${gameName}`);
  };

  return (
    <div className="App" style={{ 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      position: 'absolute',
      width: '100%',
      backgroundImage: `url(${gamesOptionsPage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      zIndex: -1,
      direction: 'rtl',
    }}>
      <Typography fontSize={'420%'} fontWeight="bold" color={theme.palette.darkBlue} style={{ marginTop: '-40px' }}>
        משחקים
      </Typography>
      <div className="board-container" style={{ 
        justifyContent: 'center', 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr 1fr', 
        alignItems: 'center', 
        maxHeight: '600px', 
        textAlign: 'center',
      }}>
        <ImagePlaceHolder
          innerImage={gamePuzzle}
          textColor={theme.palette.darkBlue}
          imageText={"פאזל"}
        />
        <ImagePlaceHolder
          innerImage={gameHitTheMole}
          textColor={theme.palette.darkBlue}
          imageText={"הכה בחפרפרת"}
        />
        <ImagePlaceHolder
          innerImage={gameMemoryGame}
          textColor={theme.palette.darkBlue}
          imageText={"משחק הזיכרון"}
        />
        <ImagePlaceHolder
          innerImage={gameSnakeAndLadders}
          textColor={theme.palette.darkBlue}
          imageText={"סולמות ונחשים"}
        />
        <ImagePlaceHolder
          innerImage={gameTicTacToe}
          textColor={theme.palette.darkBlue}
          imageText={"איקס עיגול"}
          handleClick={loadTicTacToeGame}
        />
        <ImagePlaceHolder
          innerImage={gameRexy}
          textColor={theme.palette.darkBlue}
          imageText={"טפלו ברקסי"}
        />
      </div>
    </div>
  );
}

export default GamesOptionsPage;