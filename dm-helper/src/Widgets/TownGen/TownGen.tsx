import { useState } from "react"

const TownGen = () => {

    const [Name, setName] = useState<string>("")
    const [Population, setPopulation] = useState<string>("")
    const [River, setRiver] = useState<boolean>()
    const [Coast, setCoast] = useState<boolean>()
    
    return(
        <div>
            Town
        </div>
    )
}
export default TownGen
