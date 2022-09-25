import '../../styles/sections/about.scss'
import TypeIt from 'typeit-react'
import { useRef } from 'react'

export default function AboutContainer(props){
    return(
        <div className="about-container" ref = {props.containerRef}>
            <div className='section-header'>
                <h1>ABOUT ME</h1>
            </div>
            <article className = 'about-txt'>
                <div className='about-txt-head'>
                <TypeIt className = "type" element = {'p'} options = {{
                    strings: [
                        "Name: Jay",
                     "Age: XX",
                     "Occupation: Freelance Fullstack Junior Web Developer",
                    "Interests: Pentesting & Cybersec, Naturalism, and Chemistry"],
                    speed: 5,
                    waitUntilVisible: true,
                }}></TypeIt>
                </div>
                <br></br>
                <br></br>
                <p>
                    Hey there, my name is Jay, and I'm an oddball junior fullstack web developer with a background in pre-engineering,and a deep-seeded interest in cybersecurity.
                    My web developer journey began shortly into the 2nd year of the pandemic (Ye, that one, you know which one.) when my mental healthy deteriorated
                    and I had to adjust my life. Like a goblin through the night, I studied and applied myself for countless hours, and now happily build sites
                    for others.
                </p>
                <br></br>
                <p>
                    Along with my passion for development, and the new life programming & development have given me, I've also vested interest in cybersecurity.
                    Exploring webapp and network pentesting has been the most invigorating, engaging experiences of my life, and I look forward to incorporating
                    cybersecurity into my future tech career.
                </p>
                <br></br>
                <p>
                   Yeesh, that was a lot, if you are still reading this, firstly, thanks, didn't think anyone would! Secondly, in the depths below you'll find my sites, blog, and a 
                   way to contact me via pigeon (Grain &/or handling rates may apply). I look forward to hearing from you soon!
                </p>
            </article>
        </div>
    )
}