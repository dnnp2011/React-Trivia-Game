import React, { Component } from 'react';
import withTheme from '../controller/withTheme';
import withGameManager from '../controller/withGameManager';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';


class Question extends Component {
    render() {
        return (
            <Fade in={ true } timeout={ { enter: 1000, exit: 1000 } }>
                <Grid>
                    <span dangerouslySetInnerHTML={{__html: this.props.text}} />
                </Grid>
            </Fade>
        );
    }
}


export default withTheme(withGameManager(Question));