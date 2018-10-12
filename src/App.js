import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import withTheme from './controller/withTheme';
import withGameManager from './controller/withGameManager';
import './App.css';
import Router from './controller/Router';
import {Grid} from '@material-ui/core';
import { getData } from './model/Data';


class App extends Component {
/*    state = {
        dataCache: new Promise((resolve, reject) => {

        }),
        questions: null,
    };

    componentWillMount() {
        if (!this.state.dataCache) {
            this.getQuestionData().then(()=>{console.log("Get questions done")});
        }
    }

    async getQuestionData() {
        let data = await getData();
        this.setState({
            dataCache: data,
            questions: this.getQuestions(data),
        });
    }

    getQuestions(data) {
        return data.data.results;
    }*/

componentWillMount() {
//
}

    render() {
        const { theme } = this.props;

        return (
            <MuiThemeProvider theme={ theme }>
                <Grid xs={12} className={ 'App' }>
                    <Grid xs={12} className={ 'Viewport' }>
                        <Router />
                    </Grid>
                </Grid>
            </MuiThemeProvider>
        );
    }
}


export default withGameManager(withTheme(App));
