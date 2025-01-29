import { useState } from "react";

function Login (prop) {

  const [ loginForm, setLoginForm] = useState(false);
  const [ registerForm , setRegisterForm]  = useState(false);
  const [activity, setActivity] = useState("choose activity");
  const [formData, setFormData] = useState({name:"", contact:""})

  const handleLoginClick  = () => {
    setLoginForm(true);
    setRegisterForm(false);
  };

 

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    console.log("Form Submitted:", formData, activity); // Debugging or further actions
    alert("Form submitted successfully!");
    setFormData({ name: "", contact: "" });
  };

  const handleRegisterClick= () => {
    setLoginForm (false);
  

  }


    return(
    <>

   <div className="form">
    <button className="login" onClick={handleLoginClick}>{prop.name}</button>
    <button  className="register" onClick={handleRegisterClick}>Logout</button>

    { loginForm  && (

      <div className="login-form">
        <form onSubmit={handleSubmit}>
        <label htmlFor="activity">
         activity:
       
        <select  
        id="activity"
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
         Name:
         
          <input
           type="name" 
           placeholder ="Enter your name"
           value={formData.name} 
           onChange={(e) => setFormData ({...formData, name: e.target.value})}/>
        </label>
        <br />

        <label>
          contact:
          <input type="contact" 
          placeholder="Enter your contact"
          value= {formData.contact}
          onChange= {(e) =>
            setFormData({...formData,contact: e.target.value})
          }/>
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