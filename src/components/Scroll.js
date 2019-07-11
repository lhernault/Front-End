import React from 'react';

const Scroll = (props) => {
    console.log(props);//every props has children
    // return props.children
    return (//jsx=double {{}} to return object using css style
        <div style={{overflowY: 'scroll', border:'2px solid black', height:'500px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;