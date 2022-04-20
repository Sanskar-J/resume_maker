import "./form.css"
// import {Link,Routes,BrowserRouter as Router,Route} from "react-router-dom"
import Agartha from "./Agartha"
import { useNavigate } from "react-router-dom"



const Form = () => {
    const navigate=useNavigate();
    const handleClick=(event)=>{
        
        event.preventDefault()
        const name=document.getElementById('name')
        const phone=document.getElementById('phone')   
        const email=document.getElementById('email')
        const address=document.getElementById('address') 
        const psummary=document.getElementById('psummary')
        const whistory =document.getElementById('whistory')
        console.log(name.value)
        const data={
            name:name.value,
            phone:phone.value,
            email:email.value,
            address:address.value,
            psummary:psummary.value,
            whistory:whistory.value
        }
        navigate('/agartha',{ state: data })
    }
    return ( <>
    <div className="container2"></div>
    <div className="container" >
    <form className="newform">
        <h1>Form</h1>
  <label for="fname">Name:</label>
  <input type="text" id="name" placeholder="John Doe" name="name" />
  <label for="lname">Phone no.:</label>
  <input type="text" id="phone" placeholder="+X 1234567890" name="phone" />
  <label for="lname">Email:</label>
  <input type="text" id="email" placeholder="moc.liamg@gmail.com" name="phone" />
  <label for="lname">Address:</label>
  <textarea type="text" id="address" placeholder="112/a ABC colony Mars,Solar system" name="phone" />
  <label for="lname">Professional Summary:</label>
  <textarea type="text" id="psummary" placeholder="Enter a text..." name="phone" />
  <label for="lname">Work History:</label>
  <textarea type="text" id="whistory" placeholder="Enter a text..." name="phone" />
  <button onClick={handleClick}> SUBMIT</button>
</form> 

    </div>

    </> );
}
 
export default Form;