import '../styles/Home.scss'


export default function Footer(){
    return(
        <footer>
        <div>
        <div className={"footerBox"}>
          <h1>Social Media</h1>
          <ul>
            <li><a href="https://twitter.com/Agoraphobic_Dev">Twitter</a></li>
            <li><a href="https://github.com/jaredreyes039">Github</a></li>
          </ul>
        </div>
        <div className={"footerBox"}>
        <h1>Contact Me</h1>
          <ul>
            <li><strong>Email:</strong><a href="mailto: jaredreyes039@gmail.com"> Jaredreyes039@gmail.com</a></li>
            <li><strong>Twitter: </strong> <a href="https://twitter.com/Agoraphobic_Dev"><span className={"redText"}>@</span>Agoraphobic_Dev</a></li>
            <li><strong>Github:</strong> <a href="https://github.com/jaredreyes039">Jaredreyes039</a></li>
            <li><strong>Fiverr:</strong> <a href="https://www.fiverr.com/jayr039">Jayr039</a></li>
          </ul>
        </div>
        </div>
        <div className={"footerBox"}>
        <h1>Other Sites</h1>
          <ul>
            {/* <li><a href="#">Braindead Blog</a></li> */}
            <li><a href="https://thehorrornerd01.netlify.com">TheHorrorNerd01 Portfolio (three.js)</a></li>
            <li><a href="https://gityourshittogether.herokuapp.com">GYST</a></li>
            <li><a href="https://github.com/jaredreyes039/cerberus">Cerberus</a></li>
            <li><a href="https://github.com/jaredreyes039/QuickRCTScripts">QuickScripts</a></li>
            <li><a href="https://github.com/jaredreyes039/ReadMeTemplater">ReadMeTemplater</a></li>
          </ul>
        </div>
      </footer>
    )
}