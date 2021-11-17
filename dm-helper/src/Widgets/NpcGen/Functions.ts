import { isJSDocAugmentsTag } from "typescript"
import { tabaxiNames, elfNames, jobs, traits, skinColors, skinFeatures, hairColors, hairTextures, hairLengths, eyeColors, NamesFemale, NamesMale} from "./Arrays"
export const setNames = (race:string, gender:string) => {
    if(race === "Tabaxi"){
        return (tabaxiNames[Math.floor(Math.random() * tabaxiNames.length)])
    }
    else if(gender === "Male"){
        return (NamesMale[Math.floor(Math.random() * NamesMale.length)])
    }
    else{
        return (NamesFemale[Math.floor(Math.random() * NamesFemale.length)])
    }
}

let race80 = ["Tabaxi", "Human", "Dragonborn", "Half-Orc", "Tiefling", "Goliath", "Changeling", "Locathah", "Centaur", "Loxodon", "Minotaur", "Hobgoblin", "Bugbear", "Yuan-ti", "Satyr"]

export const setAges = (race:string) => {
    let age = "30"
    if(race === "Aarakocra"){
        age = Math.floor(Math.random() * 30).toString()
    }
    else if(race === "Orc"){
        age = Math.floor(Math.random() * 45).toString()
    }
    else if(race === "Lizardfolk" || race === "Goblin"){
        age = Math.floor(Math.random() * 60).toString()
    }
    else if(race80.includes(race)){
        age = Math.floor(Math.random() * 80).toString()
    }
    else if(race === "Leonin"){
        age = Math.floor(Math.random() * 100).toString()
    }
    else if(race === "Genasi" || race === "Kobold"){
        age = Math.floor(Math.random() * 120).toString()
    }
    else if(race === "Half-Elf"){
        age = Math.floor(Math.random() * 180).toString()
    }
    else if(race === "Triton"){
        age = Math.floor(Math.random() * 200).toString()
    }
    else if(race === "Halfling"){
        age = Math.floor(Math.random() * 250).toString()
    }
    else if(race === "Dwarf"){
        age = Math.floor(Math.random() * 350).toString()
    }
    else if(race === "Loxodon"){
        age = Math.floor(Math.random() * 450).toString()
    }
    else if(race === "Gnome" || race === "Firbolg"){
        age = Math.floor(Math.random() * 500).toString()
    }
    else if(race === "Elf"){
        age = Math.floor(Math.random() * 750).toString()
    }
    else if(race === "Tortle" || race === "Warforged"){
        age = Math.floor(Math.random() * 1000).toString()
    }
    return age
}

export const setGenders = () => {
    let gender = Math.floor(Math.random() *  2)
    if(gender === 0){
        return("Male")
    }
    else{
        return("Female")
    }

}
export const setJobs = () => {
    return(jobs[Math.floor(Math.random() * jobs.length)])
}

export const setTraits = () => {
    console.log(traits.length)
    return(traits[Math.floor(Math.random() * traits.length)])
}

export const setSkinColors = () => {
    return skinColors[Math.floor(Math.random() * skinColors.length)]
}
export const setSkinFeatures = () => {
    return skinFeatures[Math.floor(Math.random() * skinFeatures.length)]
}
export const setHairColors = () => {
    return hairColors[Math.floor(Math.random() * skinColors.length)]
}
export const setHairTextures = () => {
    return hairTextures[Math.floor(Math.random() * hairTextures.length)]
}
export const setHairLengths = () => {
    return hairLengths[Math.floor(Math.random() * hairLengths.length)]
}
export const setEyeColors = () => {
    return eyeColors[Math.floor(Math.random() * eyeColors.length)]
}
