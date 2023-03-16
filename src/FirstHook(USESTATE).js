import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react';

export const FirstHook=()=>
{
    const[choconame,setChoconame]=useState("");

    const getvalue=()=>
    {
        alert(choconame+" this chocolate is your favoriate")
    }
    
    const setvalue=(chocho)=>
    {
        setChoconame(chocho.target.value)
    }


    return(
        <>
        <input className="form-control" type="text" placeholder="Enter your Favoriate Chocolate" onChange={setvalue} name="choconame" />
        <button className="btn btn-outline-primary" onClick={getvalue}>SUBMIT</button> 
        </>
    );
}