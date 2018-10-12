import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
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
    const handleClick = () => {
        if (props.href)
            window.location = props.href;
    };

    return (
        <Grid container>
            <Button {...props} variant='contained' color={ props.color || 'primary' } onClick={ props.onClick ||  handleClick}>
                <Typography variant={'h6'} style={{color: theme.palette.textDark, fontWeight: theme.typography.fontWeight}} >
                    { props.text || "No Text" }
                </Typography>
            </Button>
        </Grid>
    );
};
const GameButtonTheme = withTheme(GameButton);
export default withStyles(styles)(GameButtonTheme);
