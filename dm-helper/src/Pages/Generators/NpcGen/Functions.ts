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
    if(race === "Aarakocra"){
        return Math.floor(Math.random() * 30)
    }
    else if(race === "Orc"){
        return Math.floor(Math.random() * 45)
    }
    else if(race === "Lizardfolk" || race === "Goblin"){
        return Math.floor(Math.random() * 60)
    }
    else if(race80.includes(race)){
        return Math.floor(Math.random() * 80)
    }
    else if(race === "Leonin"){
        return Math.floor(Math.random() * 100)
    }
    else if(race === "Genasi" || race === "Kobold"){
        return Math.floor(Math.random() * 120)
    }
    else if(race === "Half-Elf"){
        return Math.floor(Math.random() * 180)
    }
    else if(race === "Triton"){
        return Math.floor(Math.random() * 200)
    }
    else if(race === "Halfling"){
        return Math.floor(Math.random() * 250)
    }
    else if(race === "Dwarf"){
        return Math.floor(Math.random() * 350)
    }
    else if(race === "Loxodon"){
        return Math.floor(Math.random() * 450)
    }
    else if(race === "Gnome" || race === "Firbolg"){
        return Math.floor(Math.random() * 500)
    }
    else if(race === "Elf"){
        return Math.floor(Math.random() * 750)
    }
    else if(race === "Tortle" || race === "Warforged"){
        return Math.floor(Math.random() * 1000)
    }
    else{
        return 30;
    }
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

export const setLooks = () => {
    let features = []
    features.push(skinColors[Math.floor(Math.random() * skinColors.length)])
    features.push(skinFeatures[Math.floor(Math.random() * skinFeatures.length)])
    features.push(hairColors[Math.floor(Math.random() * skinColors.length)])
    features.push(hairTextures[Math.floor(Math.random() * hairTextures.length)])
    features.push(hairLengths[Math.floor(Math.random() * hairLengths.length)])
    features.push(eyeColors[Math.floor(Math.random() * eyeColors.length)])

    return features
    
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