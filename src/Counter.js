import React, { Component } from 'react';
import './Counter.css';
import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
import Clock from './Clock';
import Step from './Step';

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            showClock: true,
            stepValue: 1,
        };
    }

    changeValue = (action) => {


        this.setState((prevState, prevProps) => {

            let currentCounterValue = prevState.counterValue;

            if (action === 'add') {
                currentCounterValue += 1;
            } else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;
            } else {
                currentCounterValue = 0;
            }

            return ({
                counterValue:
                    currentCounterValue
            });
        });
    }

    changeValueByStep = () => {
        this.setState(prevState=> {
            return ({counterValue: prevState.counterValue + this.state.stepValue})
        })
    }

    setStepValue = (event) => {
        this.setState({stepValue: parseInt(event.target.value)})
    }

    toggleClock = () => {
        this.setState((prevState) => {
            return ({
                showClock: !prevState.showClock
            });
        }
        )
    }

    render() {

        let clockElement = '';
        if (this.state.showClock) {
            clockElement = <Clock
            toggleClockMethod={this.toggleClock} />;
        } else {
            clockElement = <span onClick={this.toggleClock} className="show-clock">show clock</span>;
        }
        // let randomNumber = Math.floor(Math.random() * (108 - 1) + 1);
        return (
            <div className="counter">
                Counter:
                <Display displayValue={this.state.counterValue} />
                <ButtonsPanel buttonMethod={this.changeValue} />
                <Step 
                    stepButtonMethod={this.changeValueByStep}
                    stepValue={this.state.stepValue}
                    setStepValue={this.setStepValue}/>
                {clockElement}
            </div>
        );
    }
}

// function Counter(props) {

//     let randomNumber = Math.floor(Math.random() * (108 - 1) + 1);

//     return (
//         <div className='counter'>
//             Counter:
//             <span className="value">
//                 {props.initValue}
//             </span>
//         </div>
//     );
// }

export default Counter;