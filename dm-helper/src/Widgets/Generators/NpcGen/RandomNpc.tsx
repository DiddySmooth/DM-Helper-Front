import { useState, useEffect, MouseEvent } from 'react';
import CSS from 'csstype'

//Components
import GenTextBox from '../../../Modules/GenTextBox/GenTextBox';
import Button from '../../../Components/Buttons/Button/Button';

//Helper Functions
import { races } from "./Arrays"
import { setNames, setAges, setGenders, setJobs, setTraits, setEyeColors, setHairColors, setHairLengths, setHairTextures, setSkinColors, setSkinFeatures } from "./Functions"

import "./RandomNpc.css"

const GenBoxContainerStyle: CSS.Properties = {
    width: "25rem",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
}


const RandomNpc = () => {
    // work on making this an interface maybe someday
    const [npc, setNpc] = useState({ 
        race: "",
        name: "",
        age: "",
        gender: "",
        job: "",
        trait: "",
        skinColor: "",
        skinFeature: "",
        hairColor: "",
        hairTexture: "",
        hairLength: "",
        eyeColor: "",
    });

    useEffect(() => {
        setNpc(prevState => ({...prevState, name: (setNames(npc.race, npc.gender))}))
        setNpc(prevState => ({...prevState, age: (setAges(npc.race))}))
        
    },[npc.race]);

    useEffect(() => {
        npcGen()
    }, [])

    const npcGen = () => {
        setNpc(prevState => ({...prevState, gender: (setGenders())}))
        setNpc(prevState => ({...prevState, race: (races[Math.floor(Math.random() * races.length)])}))
        setNpc(prevState => ({...prevState, job: (setJobs())}))
        setNpc(prevState => ({...prevState, trait: (setTraits())}))
        setNpc(prevState => ({...prevState, skinColor: (setSkinColors())}))
        setNpc(prevState => ({...prevState, skinFeature: (setSkinFeatures())}))
        setNpc(prevState => ({...prevState, hairColor: setHairColors()}))
        setNpc(prevState => ({...prevState, hairTexture: setHairTextures()}))
        setNpc(prevState => ({...prevState, hairLength: setHairLengths()}))
        setNpc(prevState => ({...prevState, eyeColor: setHairColors()}))
    }

    const onClick = (event : MouseEvent) => {
        event.preventDefault();
        const elem = event.currentTarget
        if(!(elem instanceof HTMLButtonElement)) return;

        if(elem.value === "Race"){setNpc(prevState => ({...prevState, race: (races[Math.floor(Math.random() * races.length)])}))}
        else if(elem.value === "Name"){setNpc(prevState => ({...prevState, name: (setNames(npc.race, npc.gender))}))}
        else if(elem.value === "Gender"){setNpc(prevState => ({...prevState, gender: (setGenders())}))}
        else if(elem.value === "Job"){setNpc(prevState => ({...prevState, job: (setJobs())}))}
        else if(elem.value === "Age"){setNpc(prevState => ({...prevState, age: (setAges(npc.race))}))}
        else if(elem.value === "Traits"){setNpc(prevState => ({...prevState, trait: (setTraits())}))}
        else if(elem.value === "Skin Color"){setNpc(prevState => ({...prevState, skinColor: (setSkinColors())}))}
        else if(elem.value === "Skin Feature"){setNpc(prevState => ({...prevState, skinFeature: (setSkinFeatures())}))}
        else if(elem.value === "Hair Color"){setNpc(prevState => ({...prevState, hairColor: setHairColors()}))}
        else if(elem.value === "Hair Texture"){setNpc(prevState => ({...prevState, hairTexture: setHairTextures()}))}
        else if(elem.value === "Hair Length"){setNpc(prevState => ({...prevState, hairLength: setHairLengths()}))}
        else if(elem.value === "Eye Color"){setNpc(prevState => ({...prevState, eyeColor: setEyeColors()}))}
    }
    
    const textExport = () =>{
        navigator.clipboard.writeText(`Name: ${npc.name} Race: ${npc.race} 
        Gender: ${npc.gender} Profession: ${npc.job} Age: ${npc.age} Personality Trait ${npc.trait} 
        Skin Color: ${npc.skinColor} Skin Feature: ${npc.skinFeature} Hair Color: ${npc.hairColor} 
        Hair Texture: ${npc.hairTexture} Hair Length: ${npc.hairLength} Eye Color: ${npc.eyeColor}`)
    }
    
    
    return(
        <div style={GenBoxContainerStyle} className ="npc">
            <h1 style={{width: "100%"}}>Random Npc</h1>
            <GenTextBox className="npcBox"payload={npc.name}text="Name: " onClick={onClick} value="Name"/>
            <GenTextBox className="npcBox"payload={npc.race}text="Race: " onClick={onClick} value= "Race"/>
            <GenTextBox className="npcBox"payload={npc.gender}text="Gender: " onClick={onClick} value= "Gender"/>
            <GenTextBox className="npcBox"payload={npc.job}text="Profession: " onClick={onClick}  value="Job"/>
            <GenTextBox className="npcBox"payload={npc.age}text="Age: "  onClick={onClick} value="Age"/>
            <GenTextBox className="npcBox"payload={npc.trait}text="Personality Trait: " onClick={onClick} value="Traits"/>
            <h1 style={{width: "100%"}}>Appearance</h1>
            <GenTextBox className="npcBox"payload={npc.skinColor}text="Skin Color: " onClick={onClick} value="Skin Color"/>
            <GenTextBox className="npcBox"payload={npc.skinFeature}text="Skin Feature: " onClick={onClick} value="Skin Feature"/>
            <GenTextBox className="npcBox"payload={npc.hairColor}text="Hair Color: " onClick={onClick} value="Hair Color"/>
            <GenTextBox className="npcBox"payload={npc.hairTexture}text="Hair Texture: " onClick={onClick} value="Hair Texture"/>
            <GenTextBox className="npcBox"payload={npc.hairLength}text="Hair Length: " onClick={onClick} value="Hair Length"/>
            <GenTextBox className="npcBox"payload={npc.eyeColor}text="Eye Color: " onClick={onClick} value="Eye Color"/>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <Button  text="New NPC"onClick={npcGen} value="new"/>
                <Button text="Export"onClick={textExport} value="new"/>
            </div>
        </div>
    )
}
export default RandomNpc