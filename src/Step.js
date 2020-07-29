import React from 'react';

function Step(props) {

    return(
        <div className="button-add">
            <input type="number" onChange={(event)=>props.setStepValue(event)} />
            <button onClick={() => {props.stepButtonMethod('add');}}>Zwiększ o {props.stepValue}</button>
        </div>
    );
}

export default Step;