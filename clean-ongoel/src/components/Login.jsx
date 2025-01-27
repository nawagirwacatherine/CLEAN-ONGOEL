import { useState } from "react";

function Login (prop) {

  const [ loginForm, setLoginForm] = useState();
  const [ registerSuccessMessage , setRegisterSuccessMessage]  = useState();
  const [activity, setActivity] = useState("");

  const handleLoginClick  = () => {
    setLoginForm(true);
    setRegisterSuccessMessage(false);
  };

  const handleRegisterClick = () => {
    setLoginForm (false);
    setRegisterSuccessMessage(true);

  }



    return(
    <>

   <div className="form">
    <button className="login" onClick={handleLoginClick}>{prop.name}</button>
    {/* <button  className="register" onClick={handleRegisterClick}>{prop.name2}</button> */}

    { loginForm  && (

      <div className="login-form">
        <form>
        <label htmlFor="activity">
         activity:
       
        <select  id="activity"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        >
          <option value="bible">choose activity</option>
          <option value="bible">bible study</option>
          <option value="volunteering">volunteering </option>
          <option value="ict">ict</option>
          <option value="health">health</option>
          <option value="music">music</option>
          <option value="dance"> dance and drama</option>
          <option value="welfare">welfare</option>
          <option value="sports">sports</option>
          <option value="peace">peace</option>
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

        <button>submit</button>
        </form>
        <div/>
      
        {registerSuccessMessage && (<p className="success-message">Registration successful!</p> )}

      </div>
     
    )}
  
    </div>
    </>
    
    )
    
    
    }
    
    export default Login;