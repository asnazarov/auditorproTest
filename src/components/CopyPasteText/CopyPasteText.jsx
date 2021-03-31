import React, {useState} from 'react';


const CopyPasteText = () => {
  const [items, setItems] = useState([])
  const [valueInp, setValueInp] = useState('')

  const onChangeInput = (e, index) => {
    setValueInp(e.target.value)
    items[index] = e.target.value
  }

  const paste = (e) => {
    const newAr = e.clipboardData.getData('Text').split("\n")
    newAr.pop()
    setItems(newAr)
  }

  return (
    <div>
      <ul>
        {
          items.length !== 0 ?
            items.map((item, index) => <li>
              <input
                onChange={e => onChangeInput(e, index)}
                value={item} type="text"
                key={index}/>
            </li>)
            : <li><input onPaste={e => paste(e)} type="text"/></li>
        }
      </ul>
    </div>
  );
}

export default CopyPasteText;
