import React, { Component } from 'react';
import { Grid, CircularProgress, Typography, Grow } from '@material-ui/core';
import withTheme from '../controller/withTheme';
import withGameManager from '../controller/withGameManager';


class Loading extends Component {
    render() {
        const {theme} = this.props;
        return (
            <Grow in={true} timeout={{enter: 1000, exit: 1000}}>
                <Grid container style={{...theme.centerContent,...{fontWeight: 'bold', display: 'flex', flexDirection: 'column'}}}>
                    <Grid>
                        <Typography variant={'h2'} color={'primary'} style={{fontWeight: theme.typography.fontWeight}} gutterBottom>
                            LOADING
                        </Typography>
                    </Grid>
                    <Grid>
                        <CircularProgress size={50} thickness={5} color={'secondary'} />
                    </Grid>
                </Grid>
            </Grow>
        );
    }
}


export default withTheme(withGameManager(Loading));