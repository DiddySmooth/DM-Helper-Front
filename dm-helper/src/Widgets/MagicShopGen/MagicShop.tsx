import { useState, MouseEvent } from 'react';
import CSS from 'csstype'

//Components
import Button from '../../Components/Buttons/Button/Button';
import GenTextBox from '../../Modules/GenTextBox/GenTextBox';

//Helper functions
import { RandomItem } from './Functions';


const GenBoxContainerStyle: CSS.Properties = {
    width: "25rem",
    height: "25rem",
    display: "flex",

}

const MagicShop = () => {
    const [owner, setOwner] = useState<string>()
    const [name, setName] = useState<string>()
    const [item1, setItem1] = useState<string>()
    const [item2, setItem2] = useState<string>()
    const [item3, setItem3] = useState<string>()
    const [item4, setItem4] = useState<string>()
    const [item5, setItem5] = useState<string>()
    const [item6, setItem6] = useState<string>()

    const onClick = (event : MouseEvent) =>{
        event.preventDefault();
        const elem = event.currentTarget
        if(!(elem instanceof HTMLButtonElement)) return;

        if(elem.value ==="Name"){setName("Magic Store")}
        else if(elem.value === "Owner"){setOwner("Bill Nye")}
        else if(elem.value === "Item1"){setItem1(RandomItem().name)}
        else if(elem.value === "Item2"){setItem2(RandomItem().name)}
        else if(elem.value === "Item3"){setItem3(RandomItem().name)}
        else if(elem.value === "Item4"){setItem4(RandomItem().name)}
        else if(elem.value === "Item5"){setItem5(RandomItem().name)}
        else if(elem.value === "Item6"){setItem6(RandomItem().name)}
    }

    return (
        <div style={GenBoxContainerStyle}>
            <h1 className="GenHeader" style={{width: "600px"}}>Magic Shop</h1>
            <GenTextBox className=""payload={name}text="Name: " onClick={onClick} value="Name"/>
            <GenTextBox className=""payload={owner}text="Owner: " onClick={onClick} value="Owner"/>
            <GenTextBox className=""payload={item1}text="Item 1: " onClick={onClick} value="Item1"/>
            <GenTextBox className=""payload={item2}text="Item 2: " onClick={onClick} value="Item2"/>
            <GenTextBox className=""payload={item3}text="Item 3: " onClick={onClick} value="Item3"/>
            <GenTextBox className=""payload={item4}text="Item 4: " onClick={onClick} value="Item4"/>
            <GenTextBox className=""payload={item5}text="Item 5: " onClick={onClick} value="Item5"/>
            <GenTextBox className=""payload={item6}text="Item 6: " onClick={onClick} value="Item6"/>
            <Button text="New Shop" onClick={onClick} value="Gen"/>
      </div>
    )
}
export default MagicShop