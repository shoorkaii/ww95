import React from 'react';
import {render} from 'react-dom';

var Hello = React.createClass({
   render:function () {
       return(<p>Hello World!</p>)
   }
});



render(<Hello/>, document.getElementById('container'));
