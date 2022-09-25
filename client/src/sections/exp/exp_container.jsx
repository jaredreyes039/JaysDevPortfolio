import '../../styles/sections/exp.scss'
import TypeIt from 'typeit-react'

export default function ExpContainer(props){
    return(
        <div className="exp-container" ref = {props.containerRef}>
            <div className='section-header'>
                <h1>EXPERIENCE</h1>
            </div>
            <article className='experience-text'>
                <p><span className='base-term'>client@jay_dev_port</span> <span className  = 'state-ref' >in</span> ~/xxxxxx/xxxxxxxx/experience <span className  = 'state-ref' >took</span> 5ms</p>
                <br></br>
                <p>$ <span className = 'base-term'><TypeIt options = {{waitUntilVisible: true}}>ls ./skills_technical_dev</TypeIt></span></p>
                <TypeIt options = {{startDelay: 550, waitUntilVisible: true, speed: 0.01, lifelike: true, cursor: false}}>
                    <ul className='ls-exp'>
                    <li className='exp-item'>Over a year of development across various stacks from Big3 to MEVN and MERN</li>
                    <li className='exp-item'>1+ years developing sites and webapps w/ a focus on MERN stack development</li>
                    <li className='exp-item'>1+ years working w/ NoSQL Databases (of course, my love is for MongoDBAtlas)</li>
                    <li className='exp-item'>1+ years working w/ UNIX-based systems and Bash scripting</li>
                    <li className='exp-item'>Strong, working knowledge in several programming languages inc. Python, Go, and Java</li>
                    <li className='exp-item'>Moderate experience w/ unit and integration tests</li>
                    <li className='exp-item'>Extensive working knowledge and experience w/ Git and Github version control management</li>
                    <li className='exp-item'>1+ years working w/ RESTful API development and API integration</li>
                    <li className='exp-item'>~1 year of developing w/ various React and JS animation libraries (three.js, anime.js, gsap, to name a few)</li>
                    <li className='exp-item'>Strong familiarity w/ React and JS charting libraries (recharts, charts.js, and more!)</li>
                </ul></TypeIt>
                <br></br>
                <p>$ <span className = 'base-term'><TypeIt options = {{waitUntilVisible: true}}>ls ./skills_technical_cybersec</TypeIt></span></p>
                <TypeIt options = {{startDelay: 550, waitUntilVisible: true, speed: 0.01, lifelike: true, cursor: false}}>
                    <ul className='ls-exp'>
                    <li className='exp-item'>Working knowledge of the OSI model and other foundational networking standards</li>
                    <li className='exp-item'>Use of reverse-shell for more efficient IT management across my personal machines</li>
                    <li className='exp-item'>Strong familiarity with XSS-attacks and preventative measures</li>
                    <li className='exp-item'>Moderate understanding of OWASP security standards for data storage and management</li>
                </ul></TypeIt>
                <br></br>
                <p>$ <span className = 'base-term'><TypeIt options = {{waitUntilVisible: true}}>ls ./skills_other</TypeIt></span></p>
                <TypeIt options = {{startDelay: 550, waitUntilVisible: true, speed: 0.01, lifelike: true, cursor: false}}>
                    <ul className='ls-exp'>
                    <li className='exp-item'>Maintain a consistent, clean, and self-labeling code architecture to improve communication between myself, clients, and fellow devs</li>
                    <li className='exp-item'>Accurately adapt UI/UX mockups into production-ready code</li>
                    <li className='exp-item'>Familiarity w/ common SEO standards and practices</li>
                    <li className='exp-item'>Efficient, adaptable problem-solver with the ceaseless desire to learn</li>
                    <li className='exp-item'>A team-player excited to listen, learn, and problem-solve with others</li>
                </ul></TypeIt>
            </article>
        </div>
    )
}