import React, { Component } from 'react';
import Question from './Question';
import withGameManager from '../controller/withGameManager';
import withTheme from '../controller/withTheme';
import GameButton from '../utils/GameButton';
import { Grow, Grid, Card, CardActions, CardContent } from '@material-ui/core';
import Loading from './Loading';
import {RawData} from '../model/Data';


class GameView extends Component {
    state = {
        display: <Loading />
    };

    handleClick = event => {
        /* let { questions, round, answerQuestion } = this.props;
         let thisQuestion = questions[round].question;
         let correctAnswer = questions[round].correct_answer;
         let answer = event.target.value;
         console.log(`Answer: ${answer}`);
         if (answer === correctAnswer) {
         console.log("Answer is correct");
         setTimeout(()=>{event.target.value = "CORRECT"}, 1000);
         }
         else {
         console.log("Answer is wrong");
         setTimeout(()=>{event.target.value = "INCORRECT"}, 1000);
         }

         answerQuestion(thisQuestion, answer, round, (answer === correctAnswer));*/
    };

    componentDidMount() {
        const { theme, checkDataStatus, Questions, Round, Raw } = this.props;
        RawData.then((raw) => {
            this.setState({
                display: (<Grow in={ true } timeout={ { enter: 500, exit: 500 } }>
                    <Card xs={ 8 } sm={ 6 } style={ theme.questionCard }>
                        <Grid style={ { marginTop: '10px', marginBottom: '10px', marginLeft: '3px', marginRight: '3px' } }>
                            <CardContent>
                                <Question text={ JSON.stringify(Raw) } />
                            </CardContent>
                            <br />
                            <CardActions style={ theme.centerContent }>
                                <Grid container xs={ 12 }>
                                    <GameButton onClick={ '' } fullWidth style={ theme.trueFalseButton } text={ 'True' } />
                                    <GameButton onClick={ '' } fullWidth color={ 'secondary' } style={ theme.trueFalseButton } text={ 'False' } />
                                </Grid>
                            </CardActions>
                        </Grid>
                    </Card>
                </Grow>),
            });
        });
    }


    render() {
        const { theme, checkDataStatus, Questions, Round, Raw } = this.props;

        return (
            <Grid container style={ { ...theme.container, ...theme.centerContent } }>

                {this.state.display}

            </Grid>
        );
    }
}


export default withTheme(withGameManager(GameView));