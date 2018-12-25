import React from 'react';

const SecondTime = props => {
    return (
    <div>
        {console.log(props)}
        <button onClick={props.triggerParentUpdate}>trigger</button>
    </div>
    );
    }

export default SecondTime;