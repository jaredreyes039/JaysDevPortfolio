import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react'
import '../styles/Home.scss'
import SVG from '../public/ReachOutBanner.svg'

export default function Contact(){

    const emailinp = useRef();
    const [emailVal, setEmailVal] = useState("")

   const handleChange = (e) => {
    e.preventDefault();
    setEmailVal(e.target.value)
   }
   
   const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch('https://jayportapi.herokuapp.com/contactforms',
        {
            headers: {
            'Content-Type': 'application/json'
            },
            method:"POST",
            body: JSON.stringify({
                email: emailinp.current.value,
            })
        }
    ).then((res)=>{alert("Email sent, expect a response w/in 2-3 business days. I look forward to speaking with you!")})
    .finally(()=>{
      setEmailVal("")
    })
}

    return(
        <section className={"contactSection"}>
        <div className={"contactContainer"}>
          <div className='contact-overlay'>
          <img src={SVG}></img>
          <form className={"contactForm"} onSubmit={(e)=>{handleFormSubmit(e)}}>
          <div className={"contactInput"}>
          <p>
            Interested in seeing more? Looking for a developer? Reach out- I welcome scheduling an interview to see if I'm fit
            to join you, and your team, on your development journey!
          </p>
          <p>
            All emails will receive a response typically within 1-3 business days.
          </p>
          <p>
            If you wish to leave a message, see my <span onClick={()=>{
              window.scrollTo(0, 10000)
            }}><u>Contact Info</u></span>
          </p>
          <input type="email" placeholder="Email Address" ref={emailinp} value={emailVal} onChange={(e)=>{handleChange(e)}} required pattern='[a-z0-9]+@[a-z]+\.[a-z]{2,3}'></input>
          <button type="submit">Reach Out!</button>
          </div>          
          </form>
          </div>
        </div>
      </section>
    )
}