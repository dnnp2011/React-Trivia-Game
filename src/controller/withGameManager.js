import React, { Component } from 'react';
import {  getData, RawData } from '../model/Data';



const withGameManager = (Child) => {
    return class extends Component {
        constructor(props) {
            super(props);

            this.state = ({
                Round: 0,
                Score: 0,
                Results: null,
                Raw: null,
                Questions: null,
            });


            // RawData = this.state.Raw;
        }



/*        setData(data, questions) {
            this.setState({
                dataCache: data,
                questions,
            });
        }*/

        // componentWillMount() {
        //     if (!this.state.dataCache) {
        //         this.getQuestionData();
        //     }
        // }

        // async getQuestionData() {
        //     let data = await getData();
        //     this.setState({
        //         dataCache: data,
        //         questions: this.getQuestions(data),
        //     });
        // }

       /* getQuestions(data) {
            if (data)
                return data.data.results;
        }
        answerQuestion = (question, answer, round, correct) => {
            if (!this.state.results)
                this.setState({results: ['']});

            this.setState({
                results: this.state.results.push({round: {question, answer, correct}}),
            });
        };*/



        render() {
            RawData.then((raw) => {
                this.setState({
                    Raw: raw,
                    Questions: raw.data.results,
                });
            });
            /*const answerQuestion = (question, answer, round, correct) => {
             if (!this.state.results)
             this.setState({results: ['']});

             this.setState({
             results: this.state.results.push({round: {question, answer, correct}}),
             });
             };*/
            const checkDataStatus = () => {
                return !(!this.state.Raw);
            };
            const { Questions, Score, Round, Results, Raw } = this.state;

            return <Child answerQuestion={''}
                          Raw={Raw}
                          Questions={Questions}
                          Score={Score}
                          Round={Round}
                          Results={Results}
                          checkDataStatus={checkDataStatus}
                          {...this.props}
            />
        }
    }
};

export default withGameManager;