import React, { Component } from 'react';
import withTheme from '../controller/withTheme';
import withGameManager from '../controller/withGameManager';
import Paper from '@material-ui/core/Paper';
import '../App.css';

import bg from '../assets/images/knowledge-wallpaper02.jpg';

import Landing from './Landing';

class MenuView extends Component {
    render() {
        return (
            <Paper style={this.props.theme.themeBackground}>
                <Landing />
            </Paper>
        );
    }
}

export default withGameManager(withTheme(MenuView));
