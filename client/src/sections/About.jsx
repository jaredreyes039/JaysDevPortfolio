import TextBox from "../components/TextBox";


export default function About(){
    return(
        <section className="aboutSection">
        <TextBox keyv={1} header={"Front-End Architecture"}
        brief_desc="Websites, webapps, and the like are all useless without a quick, engaging, and well-designed UI and UX. Here are just a few of the many front-end technologies I'm currently interested in:"
        points={["ReactJS", "NextJS", "SaSS/SCSS & CSS", "MUI, Bootstrap, and More!"]} 
        />
        <TextBox  keyv={2}  header={"Back-End Architecture & Data Management"}
        brief_desc="I love back-end technologies, and have a special place in my heart for the daunting nature of back-end development. Primarily relying on NodeJS, here are just a few
        of the many back-end technologies I enjoy!"
        points={["ExpressJS/API Routing", "NodeJS", "SQL & NoSQL based DBs","Python", "Java"]} 
        />
        <TextBox  keyv={3}  header={"Design & Inspiration"}
        brief_desc="UI and UX design are undoubtedly important to productive marketing and communication. Being a freelance developer, I undersstand the need for detailed, structured, and boundary breaking design; likewise, I
        use the following to advertise myself, and bring my designs to life:"
        points={["Figma", "GIMP", "Adobe Suites"]} 
        />
        <TextBox   keyv={4}  header={"Scripting Services"}
        brief_desc="As someone who struggles with ADHD, one of the 'upsides' is a constant strive for efficiency because efficiency brings reward. That said, if you are looking for some quick scripts for your personal use, I
        currently work with the two following technologies:"
        points={["Bash", "Python (w/ or w/o GUI)"]} 
        />
      </section>
    )
}