import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import withTheme from '../controller/withTheme';
import Typography from '@material-ui/core/Typography';
import '../App.css';


const styles = theme => ({
    button : {
        margin : theme.spacing.unit,
    },
});

const GameButton = ( props ) => {
    const { classes, theme } = props;
    return (
        <div>
            <Button style={theme.gameComponent} variant='contained' color={ 'primary' } className={ classes.button } size={ props.size } onClick={ props.onClick }>
                <Typography noWrap variant={'h6'} style={{color: theme.palette.textDark, fontWeight: theme.typography.fontWeight}} >
                    { props.text || "No Text" }
                </Typography>
            </Button>
        </div>
    );
};
const GameButtonTheme = withTheme(GameButton);
export default withStyles(styles)(GameButtonTheme);
