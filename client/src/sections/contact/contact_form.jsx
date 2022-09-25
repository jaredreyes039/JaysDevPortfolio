import { useEffect } from "react"
import { useState } from "react"
import { useRef } from "react"

export default function ContactForm(){

    const first = useRef()
    const last = useRef()
    const email = useRef()
    const reason = useRef()

    const [firstname, setFirstName] = useState("")
    const [lastname, setLastName] = useState("")
    const [emailInp, setEmailInp] = useState("")
    const [reasonInp, setReasonInp] = useState("")

    const changeHandler = (e) => {
        switch(e.target.name){
            case "first":
                setFirstName(e.target.value)
                break;
            case "last":
                setLastName(e.target.value)
                break;
            case "email":
                setEmailInp(e.target.value)
                break;
            case "reason":
                setReasonInp(e.target.value)
                console.log(e.target.value)
                break;
            default:
                alert("How'd you find this option? You up to somethin' shady? -_-")
                break;
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        fetch('/contactforms',
            {
                headers: {
                "Allow-Access-Control-Origin-Header": "*",
                'Content-Type': 'application/json'
                },
                method:"POST",
                body: JSON.stringify({
                    first: firstname,
                    last: lastname,
                    email: emailInp,
                    reason: reasonInp
                })
            }
        ).then((res)=>{alert("Message Sent Successfully!")})
    }

    return(
        <form method="POST" onSubmit={handleFormSubmit}>
            <input ref = {first} name = 'first' placeholder="Firstname" value = {firstname} onChange={changeHandler}></input>
            <input ref = {last} name = 'last' placeholder="Lastname" value={lastname} onChange={changeHandler}></input>
            <input ref = {email} name = 'email' placeholder="Email" value={emailInp} onChange={changeHandler}></input>
            <select ref = {reason} name = 'reason'  value={reasonInp} onChange={changeHandler}>
                <option>Hiring & Employment Opportunities</option>
                <option>Site or Webapp Request</option>
                <option>Software Request</option>
                <option>Report a Bug</option>
                <option>Other</option>
            </select>
            <button type = 'submit'>Submit</button>
        </form>
    )
}