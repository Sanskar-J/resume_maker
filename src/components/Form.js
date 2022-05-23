import "./form.css"
import logo from './logo3.jpg'
// import {Link,Routes,BrowserRouter as Router,Route} from "react-router-dom"
import Agartha from "./Agartha"
import { useNavigate } from "react-router-dom"



const Form = () => {
    const navigate = useNavigate();
    const startD = []
    const endD = []
    const degname = []
    const jobstartD = []
    const jobendD = []
    const job=[]
    const jd=[]
    const sk = []
    const ach=[]
    let ct=[]
    let det
    let jobdet
    let b
    const handleEducation = (event) => {
        event.preventDefault()
        const dateE = document.getElementById('dateE')
        const dateS = document.getElementById('dateS')
        const deg = document.getElementById('deg')
        const edDetails = document.querySelector('.edDetails')
        startD.push(dateS.value)
        endD.push(dateE.value)
        degname.push(deg.value)
        edDetails.innerHTML = ` <p>${dateS.value} ${dateE.value} </br>${deg.value}</p>` + edDetails.innerHTML
        det = {
            startD: startD,
            endD: endD,
            degname: degname
        }
    }
    const handleJob = (event) => {
        event.preventDefault()
        const dE = document.getElementById('dE')
        const dS = document.getElementById('dS')
        const comp = document.getElementById('comp')
        const des = document.getElementById('des')
        const jobDetails = document.querySelector('.jobDetails')
        jobstartD.push(dS.value)
        jobendD.push(dE.value)
        job.push(comp.value)
        jd.push(des.value)
        jobDetails.innerHTML = ` <p>${dS.value} ${dE.value} </br>${comp.value} </br> ${des.value} </p>` + jobDetails.innerHTML
        jobdet = {
            jobstartD:jobstartD,
            jobendD:jobendD,
            job:job,
            jd:jd
        }
    }
    const handleSkills = (event) => {
        event.preventDefault()
        const skill = document.getElementById('skill')
        const skDetails = document.querySelector('.skDetails')
        sk.push(skill.value)
        skDetails.innerHTML = `<p>${skill.value}</p>` + skDetails.innerHTML
        b = { sk: sk }
    }
    const handleAchievements = (event) => {
        event.preventDefault()
        const achievement = document.getElementById('achievement')
        const acDetails = document.querySelector('.acDetails')
        ach.push(achievement.value)
        acDetails.innerHTML = `<p>${achievement.value}</p>` + acDetails.innerHTML
       
    }
    const handleCertificate= (event) => {
        event.preventDefault()
        const certificate = document.getElementById('certificate')
        const ctDetails = document.querySelector('.ctDetails')
        ct.push(certificate.value)
        ctDetails.innerHTML = `<p>${certificate.value}</p>` + ctDetails.innerHTML
    }
    const handleClick = (event) => {
        event.preventDefault()
        const name = document.getElementById('name')
        const phone = document.getElementById('phone')
        const email = document.getElementById('email')
        const address = document.getElementById('address')
        const psummary = document.getElementById('psummary')
        const whistory = document.getElementById('whistory')
        const skill = document.getElementById('skill')
        const achievement = document.getElementById('achievement')
        const education = document.getElementById('education')
        const certificate = document.getElementById('certificate')
        console.log(name.value)
        const data = {
            name: name.value,
            phone: phone.value,
            email: email.value,
            address: address.value,
            psummary: psummary.value,
            whistory: jobdet,
            skill: b,
            achievement:ach,
            education: det,
            certificate: ct
        }
        navigate('/agartha', { state: data })
    }
    return (<>
        <div className="container2"><img src={logo} alt="" srcset="" /></div>
        <div className="container" >
            <form className="newform">
                <label for="fname">Name:</label>
                <input type="text" id="name" placeholder="John Doe" name="name" />
                <label for="lname">Phone no.:</label>
                <input type="text" id="phone" placeholder="+X 1234567890" name="phone" />
                <label for="lname">Email:</label>
                <input type="text" id="email" placeholder="moc.liamg@gmail.com" name="phone" />
                <label for="lname">Address:</label>
                <textarea type="text" id="address" placeholder="112/a ABC colony Mars,Solar system" name="phone" />
                <label for="lname">Education:</label>
                <div className="edDetails">
                    <input type="month" name="" placeholder="dd-mm-yyyy" id="dateS" />
                    <input type="month" name="" placeholder="dd-mm-yyyy" id="dateE" />
                    <input type="text" name="" placeholder="Degree" id="deg" />
                </div>
                <button onClick={handleEducation}>Add field</button>
                <label for="lname">Professional Summary:</label>
                <textarea type="text" id="psummary" placeholder="Enter a text." name="phone" />
                <label for="lname">Work History:</label>
                <div className="jobDetails">
                 <input type="month" name="" placeholder="Start year" id="dS" />
                 <input type="month" name="" placeholder="End year" id="dE" />
                 <input type="text" name="" placeholder="Company" id="comp" />
                 <textarea type="text" name="" placeholder="Description" id="des" />
                </div>
                <button onClick={handleJob}>Add field</button>
                <label for="lname">Skills:</label>
                <div className="skDetails">
                    <input type="text" id="skill" placeholder="Enter a text." name="phone" />
                </div>
                <button onClick={handleSkills}>Add field</button>
                <label for="lname">Achievements:</label>
                <div className="acDetails">
                    <input type="text" id="achievement" placeholder="Enter a text." name="phone" />
                </div>
                <button onClick={handleAchievements}>Add field</button>
                <label for="lname">Certificate</label>
                <div className="ctDetails">
                    <input type="text" id="certificate" placeholder="Enter a text." name="phone" />
                </div>
                <button onClick={handleCertificate}>Add field</button>
                <button onClick={handleClick}> SUBMIT</button>
            </form>

        </div>

    </>);
}

export default Form;