import React, { useState, useEffect } from 'react';
import TextBox from '../../../Components/TextBox/TextBox';
import { races } from "./Arrays"
import { setNames, setAges, setGenders, setJobs, setTraits, setLooks } from "./Functions"
import "./RandomNpc.css"

const RandomNpc = () => {

    const [race, setRace] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [age, setAge] = useState<number>()
    const [gender, setGender] = useState<string>("")
    const [job, setJob] = useState<string>("")
    const [trait, setTrait] = useState<string>("")
    const [look, setLook] = useState<string[]>([])

    useEffect(() => {
        setName(setNames(race))
        setAge(setAges(race))
        setGender(setGenders())
        setJob(setJobs())
        setTrait(setTraits())
        setLook(setLooks())
    },[race]);

    const npcGen = () => {
        setRace(races[Math.floor(Math.random() * races.length)])
        
    }
    
    
    return(
        <div className ="npc">
            <div className="npcBoxContainer">
                <h1 className="npcBoxHeader">General Info</h1>
                <TextBox className="npcBox" text="Name: " payload={name}/>
                <TextBox className="npcBox" text="Race: " payload={race}/>
                <TextBox className="npcBox" text="Gender: " payload={gender}/>
                <TextBox className="npcBox" text="Job: " payload={job}/>
                <TextBox className="npcBox" text="Age: " payload={age}/>
                <TextBox className="npcBox" text="Personality: "payload={trait}/>
            </div>
            <div className="npcBoxContainer">
                <h1 className="npcBoxHeader">Appearance</h1>
                <TextBox className="npcBox" text="Skin Color: " payload={look[0]}/>
                <TextBox className="npcBox" text="Skin Feature: " payload={look[1]}/>
                <TextBox className="npcBox" text="Hair Color: " payload={look[2]}/>
                <TextBox className="npcBox" text="Hair Texture: " payload={look[3]}/>
                <TextBox className="npcBox" text="Hair Length: " payload={look[4]}/>
                <TextBox className="npcBox" text="Eye Color: " payload={look[5]}/>
                <button 
                onClick={ () => {npcGen()}}
                className="npcContainerButton">
                New NPC</button>
            </div>
        </div>
    )
}
export default RandomNpc