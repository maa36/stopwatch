import React from 'react'


function Result(props){
    var x = props.val;
    let s = (x % 60).toString().padStart(2, "0");
    let m = Math.floor( (x % 3600) / 60).toString().padStart(2, "0");
    let h = (Math.floor(x / 3600) % 24).toString().padStart(2, "0");
    return (
        <div className="result">
            {h}:{m}:{s}
        </div>
    )
}

export default Result