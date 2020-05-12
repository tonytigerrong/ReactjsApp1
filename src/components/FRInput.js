import React from 'react'

const FRInput = React.forwardRef((props, ref) => {
    return <div>
        <input type="text" ref={ref} value="forwardRef"/>
    </div>
});
export default FRInput;
