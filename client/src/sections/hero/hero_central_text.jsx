import React from "react";
import TypeIt from 'typeit-react'

export default function HeroCentral(){
    return(
        <div className="hero-central-text">
            <TypeIt element = {'h1'} options = {{
                strings: ['Design', 'Develop', 'Defend'],
                speed: 5
            }}></TypeIt>
        </div>
    )
}