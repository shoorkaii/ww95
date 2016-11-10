import React from 'react';
import {render} from 'react-dom';

var Hello = React.createClass({

    getInitialState: function () {
        return {name: []}
    },

    componentWillMount: function () {
        this.state.name = this.props.data;
    },

    render: function () {
        return (<p>Hello World! from {this.state.name}</p>)
    }
});

export default Hello