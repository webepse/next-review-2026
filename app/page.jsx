"use client"

import {useEffect} from 'react'

export default function HomePage(){

    useEffect(()=>{
        window.alert("Bienvenu sur mon site!")
    })

    console.log("[Rending]")

    return (
       <>
        <h1>My Games</h1>
        <p>
            Only the best games, reviewed for you.
        </p>
       </>
    )
}