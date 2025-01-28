import { useState } from "react";

function Login (prop) {

  const [ loginForm, setLoginForm] = useState();
  const [ registerForm , setRegisterForm]  = useState();
  const [activity, setActivity] = useState("choose activity");

  const handleLoginClick  = () => {
    setLoginForm(true);
    setRegisterForm(false);
  };

  const handleRegisterClick = () => {
    setLoginForm (false);
    setRegisterForm(true);

  }



    return(
    <>

   <div className="form">
    <button className="login" onClick={handleLoginClick}>{prop.name}</button>
    <button  className="register" onClick={handleRegisterClick}>{prop.name2}</button>

    { loginForm  && (

      <div className="login-form">
        <form>
        <label htmlFor="activity">
         activity:
       
        <select  id="activity"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        >
          <option value="">Choose from drop down:</option>
          <option value="bible">Bible study</option>
          <option value="volunteering">Volunteering </option>
          <option value="ict">Ict</option>
          <option value="health">Health</option>
          <option value="music">Music</option>
          <option value="dance"> Dance and Drama</option>
          <option value="welfare">Welfare</option>
          <option value="sports">Sports</option>
          <option value="peace">Peace work</option>
        </select>

        </label>
      
        <br />
        <label>
         name:
         
          <input type="name" placeholder ="Enter your name" />
        </label>
        <br />

        <label>
          contact:
          <input type="contact" placeholder="Enter your contact"/>
        </label>
        <br />

        <button type="submit">submit</button>
        </form>
        <div/>
      
        {registerForm && (<p className="success-message">Registration successful!</p> )}

      </div>
     
    )}
  
    </div>
    </>
    
    )
    
    
    }
    
    export default Login;