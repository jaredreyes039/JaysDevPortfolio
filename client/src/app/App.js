import AboutContainer from '../sections/about/about_container';
import BlogContainer from '../sections/blog/blog_container';
import ContactContainer from '../sections/contact/contact_container';
import Divider from './divider';
import ExpContainer from '../sections/exp/exp_container';
import HeroContainer from '../sections/hero/hero_container';
import ProjectContainer from '../sections/proj/proj_container';
import '../styles/app.scss';
import '../styles/global.scss';
import '../styles/resp/apple_iphone_respstyles.scss'
import { useEffect, useRef, useState } from 'react';

const resumePDF = require("./Resume_JayReyes_MERN.pdf")

function App() {


  // REFS

  const NAV = useRef();
  const HERO = useRef();
  const ABOUT = useRef();
  const EXP = useRef();
  const PROJ = useRef();
  const BLOG = useRef();
  const CONTACT = useRef();

  // STATES

  const [isHeroVis, setHeroIsVis] = useState()
  const [isAboutVis, setAboutIsVis] = useState()
  const [isExpVis, setExpVis] = useState()
  const [isProjVis, setProjVis] = useState()
  const [isBlogVis, setBlogVis] = useState()
  const [isContactVis, setContactVis] = useState()

  // SCROLL EFFECT FUNCTIONALITY FOR NAV

 useEffect(()=>{

  // OPTIONS

  let opts = {
    rootMargin: "0px",
    threshold: 0.5
  }
  let opts_proj = {
    rootMargin: "0px",
    threshold: 0.25
  }

  let opts_blog = {
    rootMargin: "0px",
    threshold: 1
  }

  // OBSERVERS
  // Excuse the logic, the observers were being problematic with the TypeIt lib
  // Will be considered in future GH issue

  const OBSERVER_HERO = new IntersectionObserver((entries)=>{
    const entry = entries[0]
    setHeroIsVis(entry.isIntersecting)
    const {children} = NAV.current
    if (isHeroVis === true){
      children[5].className = "nav-item"
      children[0].className = "nav-item active"
      children[1].className = "nav-item"
      children[2].className = "nav-item"
      children[3].className = "nav-item"
      children[4].className = "nav-item"
    }
  }, opts)

  const OBSERVER_ABOUT = new IntersectionObserver((entries)=>{
    const entry = entries[0]
    setAboutIsVis(entry.isIntersecting)
    const {children} = NAV.current
    if (isAboutVis === true){
      children[0].className = "nav-item"
      children[1].className = "nav-item active"
      children[2].className = "nav-item"
      children[3].className = "nav-item"
      children[4].className = "nav-item"
      children[5].className = "nav-item"
    }
  }, opts)

  const OBSERVER_EXP = new IntersectionObserver((entries)=>{
    const entry = entries[0]
    setExpVis(entry.isIntersecting)
    const {children} = NAV.current
    if (isExpVis === true){
      children[1].className = "nav-item"
      children[2].className = "nav-item active"
      children[3].className = "nav-item"
      children[4].className = "nav-item"
      children[5].className = "nav-item"
      children[0].className = "nav-item"
    }
  }, opts)

  const OBSERVER_PROJ = new IntersectionObserver((entries)=>{
    const entry = entries[0]
    setProjVis(entry.isIntersecting)
    const {children} = NAV.current
    if (isProjVis === true){
      children[2].className = "nav-item"
      children[3].className = "nav-item active"
      children[4].className = "nav-item"
      children[5].className = "nav-item"
      children[0].className = "nav-item"
      children[1].className = "nav-item"
    }
  }, opts_proj)

  const OBSERVER_BLOG = new IntersectionObserver((entries)=>{
    const entry = entries[0]
    setBlogVis(entry.isIntersecting)
    const {children} = NAV.current
    if (isBlogVis === true){
      children[3].className = "nav-item"
      children[4].className = "nav-item active"
      children[5].className = "nav-item"
      children[0].className = "nav-item"
      children[1].className = "nav-item"
      children[2].className = "nav-item"
    }
  }, opts_blog)

  const OBSERVER_CONTACT = new IntersectionObserver((entries)=>{
    const entry = entries[0]
    setContactVis(entry.isIntersecting)
    const {children} = NAV.current
    if (isContactVis === true){
      children[1].className = "nav-item"
      children[2].className = "nav-item"
      children[3].className = "nav-item"
      children[4].className = "nav-item"
      children[5].className = "nav-item active"
      children[0].className = "nav-item"
    }
  }, opts)

  // OBSERVE

  OBSERVER_HERO.observe(HERO.current)
  OBSERVER_ABOUT.observe(ABOUT.current)
  OBSERVER_EXP.observe(EXP.current)
  OBSERVER_PROJ.observe(PROJ.current)
  OBSERVER_BLOG.observe(BLOG.current)
  OBSERVER_CONTACT.observe(CONTACT.current)

 })


  // NAV Scroll Click Handler

  const moveToSection = (section) => {
    section.current.scrollIntoView()
  }


  return (
    <div className="App">
      <HeroContainer containerRef = {HERO} />
      <div className="nav-sticky">
            <ul className="nav-list" ref = {NAV}>
                <li key = {"home"} className="nav-item active" onClick={()=>moveToSection(HERO)}>Home</li>
                <li key = {"about"} className="nav-item" onClick={()=>moveToSection(ABOUT)}>About Me</li>
                <li key = {"exp"} className="nav-item" onClick={()=>moveToSection(EXP)}>Experience</li>
                <li key = {"proj"} className="nav-item" onClick={()=>moveToSection(PROJ)}>Sites & Programs</li>
                <li key = {"blog"} className="nav-item" onClick={()=>moveToSection(BLOG)}>Blog</li>
                <li key = {"contact"} className="nav-item" onClick={()=>moveToSection(CONTACT)}>Contact Me</li>
                <li key = {"git"} className="nav-item-special"><a href = "https://github.com/jaredreyes039">Github</a></li>
                <li key = {"res"} className="nav-item-special"><a  href = {resumePDF}>Resume</a></li>
            </ul>
        </div>
      <Divider />
      <AboutContainer containerRef = {ABOUT} />
      <Divider />
      <ExpContainer containerRef = {EXP} />
      <Divider />
      <ProjectContainer containerRef = {PROJ}/>
      <Divider />
      <BlogContainer containerRef = {BLOG}/>
      <Divider />
      <ContactContainer containerRef = {CONTACT} />
      <Divider />
      {/* <Divider>
          <p><span className='span-alt-color'><span>||</span> &#169;JaysDevPortfolio</span> <span>||</span> Reach Me on Twitter <span className='span-alt-color'>@agoraphobic_dev</span> <span>||</span> Visit my Github for updates on future projects: <a href = 'https://github.com/jaredreyes039' className='span-alt-color'>@jaredreyes039</a> <span>||</span>
            <br></br><span>||</span> Support <span className='span-alt-color'>Ukraine</span>- buy from their online businesses!
            <span>||</span>Support <span className='span-alt-color'>abortion clinics</span> and <span className='span-alt-color'>abortion rights</span>- down with the sick forced-birthers of this world! <span>||</span>
          </p>
      </Divider> */}
    </div>
  );
}

export default App;
