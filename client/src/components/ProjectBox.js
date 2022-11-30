import { useRef, useState } from 'react';
import '../styles/Home.scss';

export default function ProjectBox(props){

    return (
        <div key={props._id} className={"projectBox"}>
            {props.tile? <h1>{props.tile}</h1> : <></>}
            <a href={props.src_url}>
                <img src={props.img_url} alt="Site Banner"></img>
            </a>
        </div>
    )
}