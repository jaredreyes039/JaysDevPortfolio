import { useEffect, useState } from 'react';
import '../../styles/sections/proj.scss';

export default function ProjectContainer(props){

    const [isLoading, setIsLoading] = useState(true)
    const [projectsData, setProjectsData] = useState([])
    const [projects, setProjects] = useState([{
        name: "",
        desc: "",
        tags: "",
        stack: ""
    }])

    const [display, setDisplay] = useState()

    const fetchProjects = async () => {
        await fetch('/projdata', {method: "GET"})
            .then(res => res.json())
            .then(data => setProjectsData(data))
            .finally(()=> setIsLoading(false))
    }  

    useEffect(()=>{
        fetchProjects()
    }, [])

    useEffect(()=>{
        setProjects(projectsData)
    }, [isLoading, projectsData])

    useEffect(()=>{
        const displayData = projects.map((proj, i)=>{
            return(
                <li className='proj-item' key = {i ** 10}>

                    {/* Site Preview Image */}

                    <img src = {proj.img_url} alt = "site"></img>

                    {/* Site Info */}

                    <div className='proj-info'>
                        <h2>
                            <a href = {proj.src_url ? proj.src_url : '#'}>{proj.name ? proj.name.toString().toUpperCase() : "Name Unavailable..."}</a>
                        </h2>
                        <a href = {proj.git_url ? proj.git_url : '#'}>Source Code</a>
                        <h2>{proj.desc}</h2>
                        <div className='tag-container'>

                            {/* Tags */}

                            <ul key = {i*15 + 2.5}  className = 'tags-list'>
                                <span>Tags: </span>{proj.tags ? proj.tags.map((tag, idx)=>{
                                    return (
                                        <li key = {idx} className='tag'>{tag}</li>
                                    )
                                }):null}
                            </ul>

                            {/* Stack */}

                            <ul key = {i*15 - 2.5}  className = 'stack-list'>
                                <span>Stack: </span>{proj.tags ? proj.stack.map((tool, idx)=>{
                                    return (
                                        <li key = {idx/10 + 0.1} className='tool'>{tool}</li>
                                    )
                                }):<li key = {"nostack"} className='tag'>No Tools Present</li>}
                            </ul>
                        </div>
                    </div>

                </li>
            )
        })

        setDisplay(displayData)
        
    }, [projects])

    return(
        <div className="proj-container" ref = {props.containerRef}>
            <div className='section-header'>
                <h1>SITES & SCRIPTS</h1>
            </div>
            <div className='proj-text'>
                <ul className='proj-list'>
                    {display}
                </ul>
            </div>
        </div>
    )
}