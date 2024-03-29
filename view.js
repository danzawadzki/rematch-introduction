import * as React from 'react';
import {connect} from "react-redux";

/**
 * View component.
 */
const View = props => (
    <div>
        The counter is {props.count}
        <button onClick={props.increment}>increment</button>
        <button onClick={props.incrementAsync}>incrementAsync</button>
    </div>
);

// Mapping redux state to a props
const mapState = state => ({count: state.count});

// Mapping dispatchers to a props
const mapDispatch = ({count: {increment, incrementAsync}}) => ({
    increment: () => increment(1),
    incrementAsync: () => incrementAsync(1)
});

export default connect(mapState, mapDispatch)(View)
