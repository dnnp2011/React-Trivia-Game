import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Paper from '@material-ui/core/Paper/Paper';
import Grid from '@material-ui/core/Grid';
import '../App.css';
import GameView from '../view/GameView';
import Landing from '../view/Landing';
import ResultsView from '../view/ResultsView';
import withTheme from './withTheme';
import withGameManager from './withGameManager';


const Router = ( props ) => {
    return (
            <Paper xs={12} style={ { ...props.theme.themeBackground, ...props.theme.menuPaper } }>
        <Grid container xs={12}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={ '/' } component={ Landing } />
                        <Route path={ '/trivia' } component={ GameView } />
                        <Route path={ '/results' } component={ ResultsView } />
                    </Switch>
                </BrowserRouter>
        </Grid>
            </Paper>
    );
};

export default withTheme(withGameManager(Router));