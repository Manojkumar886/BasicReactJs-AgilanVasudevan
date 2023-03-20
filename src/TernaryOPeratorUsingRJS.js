import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

export let ImpOperator=()=>
{

    const[wisher,setWisher]=useState("Nothing")

    const[change,setChanges]=useState({color:'pink',backgroundColor:'black'})

    const[output,setOutput]=useState("");

    const ternary=()=>
    {
        (wisher==='java')? //condition
        setChanges({color:'orange',backgroundColor:'black'})://expression
        (wisher==='Python')? //condition
        setChanges({color:'green',backgroundColor:'black'})://expression
        (wisher==='CSharp')? //condition
        setChanges({color:'white',backgroundColor:'black'})://expression

        setChanges({color:'blue',backgroundColor:'black'})//expression

        setOutput(wisher);
    }

    const getvalue=(temp)=>
    {
        setWisher(temp.target.value)
    }



    return(
        <>
            <input placeholder='Enter your favoriate language' 
            type="text" 
            onChange={getvalue} />

            <button className="btn btn-outline-primary" onClick={ternary}>
                Checking
            </button>

            <br></br>
            
            <span style={change}>
                {output}
            </span>
        </>
    );
}