import React, { useState } from 'react';
const RandomMagicShop = () => {
    const [owner, setOwner] = useState<string>()
    const [items, setItems] = useState<string[]>([])
    return (
      <div>
          <p>Owner: {owner}</p>
          <p>Items: {items[0]}</p>
          <p></p>
          <p></p>
          <button>New</button>
      </div>
    )
}
export default RandomMagicShop