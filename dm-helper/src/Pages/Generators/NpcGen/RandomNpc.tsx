import React, { useState, useEffect } from 'react';
import GenTextBox from '../../../Components/TextBox/GenTextBox';
import { races } from "./Arrays"
import { setNames, setAges, setGenders, setJobs, setTraits, setLooks, setEyeColors, setHairColors, setHairLengths, setHairTextures, setSkinColors, setSkinFeatures } from "./Functions"
import "./RandomNpc.css"

const RandomNpc = () => {

    const [race, setRace] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [age, setAge] = useState<number>()
    const [gender, setGender] = useState<string>("")
    const [job, setJob] = useState<string>("")
    const [trait, setTrait] = useState<string>("")

    const [skinColor, setSkinColor] = useState<string>("")
    const [skinFeature, setSkinFeature] = useState<string>("")
    const [hairColor, setHairColor] = useState<string>("")
    const [hairTexture, setHairTexture] = useState<string>("")
    const [hairLength, setHairLength] = useState<string>("")
    const [eyeColor, setEyeColor] = useState<string>("")
    
    const [look, setLook] = useState<string[]>([])

    useEffect(() => {
        setName(setNames(race, gender))
        setAge(setAges(race))
        
    },[race]);

    const npcGen = () => {
        setGender(setGenders())
        setRace(races[Math.floor(Math.random() * races.length)])
        setJob(setJobs())
        setTrait(setTraits())
        setLook(setLooks())
        setSkinColor(setSkinColors())
        setSkinFeature(setSkinFeatures())
        setHairColor(setHairColors())
        setHairTexture(setHairTextures())
        setHairLength(setHairLengths())
        setEyeColor(setEyeColors())
    }
    const clickHandle = (payload: string) => {
        if(payload === "Race"){setRace(races[Math.floor(Math.random() * races.length)])}
        else if(payload === "Name"){setName(setNames(race, gender))}
        else if(payload === "Gender"){setGender(setGenders())}
        else if(payload === "Job"){setJob(setJobs())}
        else if(payload === "Age"){setAge(setAges(race))}
        else if(payload === "Traits"){setTrait(setTraits())}
        else if(payload === "Skin Color"){setSkinColor(setSkinColors())}
        else if(payload === "Skin Feature"){setSkinFeature(setSkinFeatures())}
        else if(payload === "Hair Color"){setHairColor(setHairColors())}
        else if(payload === "Hair Texture"){setHairTexture(setHairTextures())}
        else if(payload === "Hair Length"){setHairLength(setHairLengths())}
        else if(payload === "Eye Color"){setEyeColor(setEyeColors())}
        
    }
    
    const textExport = () =>{
        navigator.clipboard.writeText(`Name: ${name} Race: ${race} Gender: ${gender} Profession: ${job} Age: ${age} Personality Trait ${trait} 
        Skin Color: ${look[0]} Skin Feature: ${look[1]} Hair Color: ${look[2]} Hair Texture: ${look[3]} Hair Length: ${look[4]} Eye Color: ${look[5]}`)
    }
    
    
    return(
        <div className ="npc">
            <div className="npcBoxContainer">
                <h1 className="npcBoxHeader">General Info</h1>
                <GenTextBox className="npcBox"payload={name}text="Name: " onClick={() => clickHandle("Name")}/>
                <GenTextBox className="npcBox"payload={race}text="Race: " onClick={() => clickHandle("Race")}/>
                <GenTextBox className="npcBox"payload={gender}text="Gender: " onClick={() => clickHandle("Gender")}/>
                <GenTextBox className="npcBox"payload={job}text="Profession: " onClick={() => clickHandle("Job")}/>
                <GenTextBox className="npcBox"payload={age}text="Age: "  onClick={() => clickHandle("Age")}/>
                <GenTextBox className="npcBox"payload={trait}text="Personality Trait: " onClick={() => clickHandle("Traits")}/>
            </div>
            <div className="npcBoxContainer">
                <h1 className="npcBoxHeader">Appearance</h1>
                <GenTextBox className="npcBox"payload={skinColor}text="Skin Color: " onClick={() => clickHandle("Skin Color")}/>
                <GenTextBox className="npcBox"payload={skinFeature}text="Skin Feature: " onClick={() => clickHandle("Skin Feature")}/>
                <GenTextBox className="npcBox"payload={hairColor}text="Hair Color: " onClick={() => clickHandle("Hair Color")}/>
                <GenTextBox className="npcBox"payload={hairTexture}text="Hair Texture: " onClick={() => clickHandle("Hair Texture")}/>
                <GenTextBox className="npcBox"payload={hairLength}text="Hair Length: " onClick={() => clickHandle("Hair Length")}/>
                <GenTextBox className="npcBox"payload={eyeColor}text="Eye Color: " onClick={() => clickHandle("Eye Color")}/>
                <button onClick={ () => npcGen()}className="npcContainerButton">New NPC</button>
                <button onClick={ () => textExport()}className="npcContainerButton">Export</button>
            </div>
        </div>
    )
}
export default RandomNpc