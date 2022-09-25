import '../../styles/sections/contact.scss';
import ContactForm from './contact_form';
import TypeIt from 'typeit-react'

export default function ContactContainer(props){
    return(
        <div className='contact-container' ref = {props.containerRef}>
            <h1 className='section-header'>CONTACT ME</h1>
            <h2>Feel free to contact me with any interests, requests, bug reports, etc., and I will promptly respond w/in 24-48 hours.
                If you'd prefer to reach out on social media, check out my twitter handle below, or email me at 
                jaredreyes039@gmail.com. 
            </h2>
            <br></br>
            <TypeIt>I look forward to speaking with you soon!</TypeIt>
            <ContactForm />
        </div>
    )
}