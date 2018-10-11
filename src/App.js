import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import withTheme from './controller/withTheme';
import withGameManager from './controller/withGameManager';
import './App.css';
import MenuView from './view/MenuView';
import Landing from './view/Landing';


class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={ this.props.theme }>
                <div className={ 'App' }>
                    <div className={ 'Viewport' }>
                        <MenuView />
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}


export default withGameManager(withTheme(App));
