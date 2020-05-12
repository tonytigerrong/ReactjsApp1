import React from 'react'

function MemoComp({name}) {
    console.log("Render memo Function component");
    console.log("For React.memo(functional component), perform shallow props&state comparision. won't re-render if no change");
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)

// import React, { Component } from 'react'

// class MemoComp extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
             
//         }
//     }
    
//     render() {
//         console.log("Memo Component Rendering");
//         return (
//             <div>
//                 {this.props.name}
//             </div>
//         )
//     }
// }
// export default React.memo(MemoComp);
