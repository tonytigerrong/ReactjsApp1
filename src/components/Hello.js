import React from 'react';

const Hello = (props) => {
    console.log(props);
    return <h1>
        Hello Tag: Hello {props.name}
    </h1>;
    // return React.createElement('div',{id: 'hello',className:'dummyClass'},React.createElement('h1',{id: 'h1'},"Hello {props.name}"));
}

export default Hello;