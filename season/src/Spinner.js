import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active inverted dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
};

// default props can be defined this way
Spinner.defaultProps = {
    message: 'Loading...',
};

export default Spinner;