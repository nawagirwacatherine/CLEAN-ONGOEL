import { useState } from "react";

function Login (prop) {

  const [ loginForm, setLoginForm] = useState(false);
  const [ registerSuccessMessage , setRegisterSuccessMessage]  = useState(false);

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
    <button  className="register" onClick={handleRegisterClick}>{prop.name2}</button>

    { loginForm  && (

      <div className="login-form">
        <form>

        <label>
         activity:
          <input type="name" placeholder ="Enter activity of interest" />
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