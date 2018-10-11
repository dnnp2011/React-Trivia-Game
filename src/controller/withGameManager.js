import React, { Component } from 'react';
import { getQuestions } from '../model/Data';

const withGameManager = (Child) => {
    return class extends Component {
        constructor(props) {
            super(props);

            this.state = ({
                questions: '',
                score: 0,
                round: 0,
                answers: {},
            });
        }

        componentWillMount() {
            getQuestions().then(questions => this.setState({ questions: questions }));
        }

        render() {
            return <Child questions={this.state.questions} score={this.state.score} round={this.state.round} answers={this.state.answers} {...this.props} />
        }
    }
};

export default withGameManager;

/*
class GameManager extends Component {
    constructor( props ) {
        super(props);

        this.state = ({
            questions: '',
            score: 0,
            round: 0,
            answers: {},
        });
    }

    componentWillMount() {
        getQuestions().then(questions => this.setState({ questions: questions }));
    }

    render() {
        return (
            <div>
                {/!*Return Children*!/}
                <Landing theme={this.props.theme} />
                {/!*<h6>{JSON.stringify(this.state.questions)}</h6>*!/}
            </div>
        );
    }
}

export default GameManager;*/
