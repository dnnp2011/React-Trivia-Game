import React, { Component } from 'react';
import GameButton from '../utils/GameButton';
import withTheme from '../controller/withTheme';
import withGameManager from '../controller/withGameManager';
import Paper from '@material-ui/core/Paper';
import '../App.css';

class Landing extends Component {
    render() {
        return (
            <Paper style={this.props.theme.menuPaper}>
                <GameButton  size={"large"} text={"Start Game"} />
            </Paper>
        );
    }
}

export default withGameManager(withTheme(Landing));
