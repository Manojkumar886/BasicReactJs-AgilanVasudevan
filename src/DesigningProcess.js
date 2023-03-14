 import "./Designing.css"

export let Designing=()=>
{
    return(
        <>
        <form>
        <h1 >Personal Details</h1>
        <label>Name : </label>
        <input type="text" placeholder="First name initial"/>
        <label>Password :</label>
        <input type="password"  />
        <br></br>
        <label>EMail id :</label>
        <input type="email" placeholder="aabbcc123@gmail.com" />
        <br></br>
        <label>Gender</label>
        <input type="radio" name="gender" />Male
        <input type="radio" name="gender"/>Female
        <br></br>
        <button type="submit">SUBMIT</button>
        </form>
        </>
    );
}