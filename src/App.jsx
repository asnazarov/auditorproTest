import React, {useState} from 'react';
import LoadingFileXlsx from "./components/LoadingFileXlsx";

const App = () => {
  const [items, setItems] = useState([])
  const [valueInp, setValueInp] = useState('')

  const onChangeInput = (e) => {
    setValueInp(e.target.value)
    console.log(e.target.value)
  }

  const onHandleInput = (e, obj) => {
    console.log(e.target.value)
  }

  const paste = (e) => {
    const newAr = e.clipboardData.getData('Text').split("\n")
    newAr.pop()
    setItems(newAr)
  }
  console.log(items)

  return (
    <div>

      <ul>
        {
          items.length !== 0 ?
            items.map((item, index) => <li>
              <input
                onChange={e => onChangeInput(e)}
                onClick={e => onHandleInput(e)}
                value={item} type="text"
                key={index}/>
            </li>)
            : <li><input onPaste={e => paste(e)} type="text"/></li>
        }
      </ul>

    </div>
  );
}

export default App;
