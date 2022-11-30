import ProjectBox from "../components/ProjectBox"
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
export default function Projects(){

    const {isLoading, isError, data} = useQuery(['projects'], ()=>{
        return axios.get('https://jayportapi.herokuapp.com/projects')
    })
    

    if(isLoading){
        return(
        <section className={"projectsSection"}>
            <h1>Sites, Scripts, & Webapps</h1>
            <h3>Below are a few of my projects; please, enjoy!</h3>
            <div className="projects-container load">
                <div className="spin"></div>
            </div>
        </section>
        )
    }

    if(isError){
        return(
            <section className={"projectsSection"}>
            <h1>Sites, Scripts, & Webapps</h1>
    <h3>Below are a few of my projects; please, enjoy!</h3>
    <div className="projects-container">
            <ProjectBox
                title="Error: Failed to load projects"
            ></ProjectBox>
        </div>
        </section>
        )
    }
    return(
        <section className={"projectsSection"}>
        <h1>Sites, Scripts, & Webapps</h1>
        <div className="projects-container">
            {data.data.sort((a,b)=> a.name > b.name).map((project)=>{
                return(
                    <ProjectBox
                    key = {project._id}
                    src_url={project.src_url}
                    img_url={project.img_url}
                    >
                    </ProjectBox>
                )
            })}
        </div>
      </section>
    )
}