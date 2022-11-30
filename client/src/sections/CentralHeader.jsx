import '../styles/Home.scss'
import { useParallax } from 'react-scroll-parallax'
import { useRef } from 'react';
import { useState } from 'react';
import GIF from '../public/DevDesignBGIcon2.gif'
import SVGOverlay from '../public/DevDesignBGIconOverlay.svg'

export default function CentralHeader(){


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
        <section className='headsection'>
        <img className='site-bg-logo rotate-logo' src={GIF} style={{borderRadius: '50%'}} alt="Design | Develop"></img>
        <img className='site-bg-logo' src={SVGOverlay} alt="I'm Jay, freelance web developer & UI/UX Designer"></img>    
      </section>
    )
}