import React from 'react'
import ReactDOM from 'react-dom'
import FRParentInput from './FRParentInput'

export default function PortalDemo() {
    // this.frInputRef = React.createRef();
    return ReactDOM.createPortal(
            <h1>Portal Demo </h1>
        , document.getElementById('portal-root')
    )
}
