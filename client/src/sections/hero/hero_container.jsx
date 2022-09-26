import React from "react";
import {useEffect, useState} from 'react'
import ClockContainer from "./clockblock/clock_container";
import IPSubContainer from "./ipsubblock/ip_sub_container";
import '../../styles/sections/hero.scss'
import HeroCentral from "./hero_central_text";
import './Shield.svg';
import BGTxt1 from "./bgtxt/bgtxt_1";
import BGTxt2 from "./bgtxt/bgtxt_2";
import BGTxt3 from "./bgtxt/bgtxt_3";


export default function HeroContainer(props){
    const [ip, setIp] = useState("");
    const [sub, setSub] = useState("");


    const IPParts = () => {
        let A = Math.ceil((Math.random()*256))
        let B = Math.ceil((Math.random()*256))
        let C = Math.ceil((Math.random()*256))
        let D = Math.ceil((Math.random()*256))
        const data = [A, B, C, D]
        return data;
    }
    const SubParts = () => {
        let A = Math.ceil((Math.random()*255))
        let B = Math.ceil((Math.random()*255))
        let C = Math.ceil((Math.random()*255))
        let D = 0
        const data = [A, B, C, D]
        return data;
    }
    useEffect(()=>{
        setInterval(()=>{
            let IP = IPParts()
        let SUB = SubParts()
        setIp(`${IP[0]}.${IP[1]}.${IP[2]}.${IP[3]}`)
        setSub(`${SUB[0]}.${SUB[1]}.${SUB[2]}.${SUB[3]}`)
        }, 500)
    }, [])

    return (
        <section className = 'hero-container' ref = {props.containerRef}>
            <IPSubContainer ipsubentry = {ip}/>
            <IPSubContainer ipsubentry = {sub} />
            <HeroCentral />
            <ClockContainer />
            <BGTxt1 />
            <BGTxt2 />
            <BGTxt3 />
            <div className="shield">
            <svg width="287" height="352" viewBox="0 0 287 352" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 81.2272L142.581 0L286 81.2272V186L242.387 270.757L142.581 351L38.5806 270.757L0 186V81.2272Z" stroke="#00FFD1"/>
                <path d="M20 95.1936L142.639 26L266 95.1936V186L228.487 256.645L142.639 325L53.1848 256.645L20 186V95.1936Z" stroke="#00FFD1"/>
                <path stroke="#00FFD1" d="M188 94.5H189V93.5H188V94.5ZM184.25 243.75L185.173 244.135L184.25 243.75ZM173.5 259L172.834 258.254L172.827 258.26L172.821 258.266L173.5 259ZM157.25 268.75L157.574 269.696L157.585 269.692L157.596 269.688L157.25 268.75ZM103.5 261.75L102.872 262.528L102.881 262.535L103.5 261.75ZM86.5 232.5L86.2921 231.522L85.3132 231.73L85.522 232.709L86.5 232.5ZM106.5 228.25L107.473 228.018L107.247 227.069L106.292 227.272L106.5 228.25ZM109.75 238.25L108.828 238.638L108.841 238.668L108.856 238.697L109.75 238.25ZM115.5 246.25L114.793 246.957L114.818 246.982L114.845 247.006L115.5 246.25ZM124.5 251.5L124.144 252.434L124.5 251.5ZM159 245.5L158.282 244.804L158.282 244.804L159 245.5ZM167 112.75H168V111.75H167V112.75ZM104 112.75H103V113.75H104V112.75ZM104 94.5V93.5H103V94.5H104ZM187 94.5V223.75H189V94.5H187ZM187 223.75C187 230.968 185.77 237.502 183.327 243.365L185.173 244.135C187.73 237.998 189 231.198 189 223.75H187ZM183.327 243.365C180.882 249.233 177.385 254.191 172.834 258.254L174.166 259.746C178.949 255.476 182.618 250.267 185.173 244.135L183.327 243.365ZM172.821 258.266C168.427 262.335 163.126 265.519 156.904 267.812L157.596 269.688C164.04 267.314 169.573 263.999 174.179 259.734L172.821 258.266ZM156.926 267.804C150.709 269.931 143.903 271 136.5 271V273C144.097 273 151.124 271.902 157.574 269.696L156.926 267.804ZM136.5 271C123.343 271 112.575 267.632 104.119 260.965L102.881 262.535C111.758 269.535 122.99 273 136.5 273V271ZM104.128 260.972C95.6659 254.137 90.1042 244.602 87.478 232.291L85.522 232.709C88.2291 245.398 94.0008 255.363 102.872 262.528L104.128 260.972ZM86.7079 233.478L106.708 229.228L106.292 227.272L86.2921 231.522L86.7079 233.478ZM105.527 228.482C106.373 232.033 107.473 235.418 108.828 238.638L110.672 237.862C109.361 234.748 108.294 231.467 107.473 228.018L105.527 228.482ZM108.856 238.697C110.403 241.792 112.382 244.547 114.793 246.957L116.207 245.543C113.951 243.287 112.097 240.708 110.644 237.803L108.856 238.697ZM114.845 247.006C117.444 249.258 120.549 251.065 124.144 252.434L124.856 250.566C121.451 249.268 118.556 247.575 116.155 245.494L114.845 247.006ZM124.144 252.434C127.785 253.822 132.079 254.5 137 254.5V252.5C132.255 252.5 128.215 251.845 124.856 250.566L124.144 252.434ZM137 254.5C146.691 254.5 154.314 251.774 159.718 246.196L158.282 244.804C153.352 249.892 146.309 252.5 137 252.5V254.5ZM159.718 246.196C165.305 240.434 168 231.632 168 220H166C166 231.368 163.362 239.566 158.282 244.804L159.718 246.196ZM168 220V112.75H166V220H168ZM167 111.75H104V113.75H167V111.75ZM105 112.75V94.5H103V112.75H105ZM104 95.5H188V93.5H104V95.5Z"/>
            </svg>
            </div>
        </section>
    )
}