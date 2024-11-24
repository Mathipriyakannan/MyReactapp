import "./Register.css";
import { React, useState} from "react";

function Register (){
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState(" ");
    const[email,setEmail]=useState("");
    const[phoneNumber,setPhoneNumber]=useState("");
    const[gender,setGender]=useState("");
    const[personalWebsite,setPersonalWebsite]=useState("");
    const[order,setOrder]=useState("");
    const[address,setAddress]=useState("");
    const[city,setCity]=useState("");
    const[code,setCode]=useState("");
    const handleSubmit = (e) =>{e.preventDefault(); console.log( firstName, lastName,email,phoneNumber,gender, personalWebsite,
       order,address, city,code, );
    }
          // Reset all state variables here
          const handleReset = () => { setFirstName(""); setLastName("");
            setEmail(""); setPhoneNumber("");
            setGender(""); setPersonalWebsite("");
            setOrder("");setAddress(""); setCity(""); setCode("");};

   return(
    <fieldset>
    <div className="Register">
        <h2> Shopping Registration Form</h2>
        <p>please fill out the form below to register</p>
        <form action="#" method="get">
        <label for="firstname"> First Name* </label>
        <input type="text" name="firstname" id="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value) } placeholder="Enter First Name" required />
        <label for="lastname"> Last Name*</label>
        <input type="text" name="lastname" id="lastname" value={lastName} onchange={(e) => setFirstName(e.target.value) } placeholder="Enter Last Name" required/> 
        <label for="email">Enter Email* </label> 
        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value) } placeholder="Enter email"required /> 
        <label for="phonenumber">Phone Number</label>
        <input type="number" name="number" id=" number" value={phoneNumber} onchange={(e) => setPhoneNumber(e.target.value)} placeholder="Enter phoneNumber" required/>
        <label for="gender">Gender*</label>
        <input type="radio" name="gender" value="male" id="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value) } />
        Male 
        <input type="radio" name="gender" value="female" id="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value) } />
         Female
          <input type="radio"name="gender" value="other" id="other" checked={gender === "other"} onChange={(e) => setGender(e.target.value) } />   Other
          <label for="tel">Personal Website</label>
          <input type="website" name="website" id=" website" value={personalWebsite} onchange={(e) => setPersonalWebsite(e.target.value)} placeholder="https://www.example.com" required/>
          <label for="order">Number of Previous Order</label>
          <input type="order" name="order" id=" order" value={order} onchange={(e) => setOrder(e.target.value)} placeholder="0" required/>
     <h2>Delivery Address</h2>
     <label for="adress">Street Adress</label>
     <input type="adress" name="adress" id=" adress" value={address} onchange={(e) => setAddress(e.target.value)} placeholder="123 example" required/>
     <label for="city">City</label>
     <input type="city" name="city" id=" city" value={city} onchange={(e) => setCity(e.target.value)} placeholder="Any town" required/>
     <label for="adress">Zip Code</label>

     <input type="code" name="code" id="code" value={code} onchange={(e) => setCode(e.target.value)} placeholder="12345" required/>
     <h6>Would you like to receive our newsletter?</h6>
     <input type="radio" style={{textAlign:"left"}} />yes       <input type="radio"  />no
     <div className="left">
    <input  type="checkbox"/>I agree to the Trems and conditions and privacy policy
    </div>
    <button type="submit" value="Submit" onClick={(e) => handleSubmit(e)} > Submit </button>


        </form>
    </div>
    </fieldset>
   )

}
export default Register;