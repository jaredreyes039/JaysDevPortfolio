import { useEffect, useState } from 'react';

export default function ClockContainer(){

    const [clock, setClock] = useState(new Date().toLocaleString())
    useEffect(()=>{
        setInterval(()=>{
            setClock(new Date().toLocaleString())
        }, 1000)
    }, [])

    return(
        <div className = 'clock'>
            <h1 style = {{color: '#14FF00'}}>{clock}</h1>
        </div>
    )
}