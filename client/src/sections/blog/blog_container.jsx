import '../../styles/sections/blog.scss';
import TypeIt from 'typeit-react';

export default function BlogContainer(props){
    return(
        <div className='blog-container' ref = {props.containerRef}>
            <h1 className='section-header'>BLOG</h1>
            <TypeIt options = {{
                waitUntilVisible: true,
                speed: 1,
                strings: [
                    "Coming Soon..."
                ]
            }}></TypeIt>
        </div>
    )
}