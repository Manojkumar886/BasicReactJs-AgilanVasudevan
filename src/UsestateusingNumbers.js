import { useState } from "react";

export const Usingnumbers=()=>
{
    const[mark,setMark]=useState(1);//usestate initializing a numbers

    const markiszero=()=>
    {
        setMark(0);
    }
    const calculating=()=>
    {
        setMark(mark+15);
    }

    return(
        <>
        <button onClick={markiszero} onDoubleClick={calculating}> you click a button in one time your value is zero<br/>
        you click a button in double time(values is added +15)</button>

        <span style={{color:'red',backgroundColor:'yellowgreen'}}>
            {mark}
        </span>
        </>

    );
}