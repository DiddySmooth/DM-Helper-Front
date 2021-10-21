import React, { useState } from 'react';
import GenTextBox from '../../../Components/TextBox/GenTextBox';
import { RandomItem } from './Functions';
import "./MagicShop.css"
const RandomMagicShop = () => {
    const [owner, setOwner] = useState<string>()
    const [name, setName] = useState<string>()
    const [item1, setItem1] = useState<string>()
    const [item2, setItem2] = useState<string>()
    const [item3, setItem3] = useState<string>()
    const [item4, setItem4] = useState<string>()
    const [item5, setItem5] = useState<string>()
    const [item6, setItem6] = useState<string>()

    const clickHandle = (payload: string) => {
        console.log(RandomItem())
    }

    return (
      <div className="GenBoxContainer">
          <h1 className="GenHeader">Magic Shop</h1>
          <GenTextBox className=""payload={name}text="Name: " onClick={() => clickHandle("Name")}/>
          <GenTextBox className=""payload={owner}text="Owner: " onClick={() => clickHandle("Owner")}/>
          <GenTextBox className=""payload={item1}text="Item 1: " onClick={() => clickHandle("Item1")}/>
          <GenTextBox className=""payload={item2}text="Item 2: " onClick={() => clickHandle("Item2")}/>
          <GenTextBox className=""payload={item3}text="Item 3: " onClick={() => clickHandle("Item3")}/>
          <GenTextBox className=""payload={item4}text="Item 4: " onClick={() => clickHandle("Item4")}/>
          <GenTextBox className=""payload={item5}text="Item 5: " onClick={() => clickHandle("Item5")}/>
          <GenTextBox className=""payload={item6}text="Item 6: " onClick={() => clickHandle("Item6")}/>

      </div>
    )
}
export default RandomMagicShop