import React from 'react';
import GameButton from '../utils/GameButton';
import withTheme from '../controller/withTheme';
import withGameManager from '../controller/withGameManager';
import Grow from '@material-ui/core/Grow';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import '../App.css';
import Loading from './Loading';


const Landing = ( props ) => {
    const {theme, checkDataStatus} = props;
    return (
        <Grow in={true}>
            <Fade in={false}>
                { !checkDataStatus()
                ? <Loading />
                : <Grid xs={6} style={ theme.center }>
                      <Grid col={12}>
                          <hr />
                          <h3>Ready to play some Trivia?</h3>
                          <hr />
                          <br />
                          <Grid  xs={12} style={theme.centerContent}>
                              <Grid xs={5} />
                              <GameButton xs={2} fullWidth size={ "large" } text={ "Start Game" } href={ '/trivia' } />
                              <Grid xs={5} />
                          </Grid>
                      </Grid>
                  </Grid>
                }
            </Fade>
        </Grow>
    );
};


export default withGameManager(withTheme(Landing));
