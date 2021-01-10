import React, {useState} from 'react';
import * as XLSX from "xlsx";

const LoadingFileXlsx = () => {
  const [items, setItems] = useState([])
  const [valueInp, setValueInp] = useState('')

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);
      fileReader.onload = (e) => {
        const bufferArray = e.target.result;
        const wb = XLSX.read(bufferArray, {type: 'buffer'});
        const wsname = wb.SheetNames[0]
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws);
        resolve(data)
      };

      fileReader.onerror = (error) => {
        reject(error)
      };
    });
    promise.then((d) => {
      setItems(d)
    })
  };

  const onChangeInput = (e) => {
    setValueInp(e.target.value)
    console.log(e.target.value)
  }

  const onHandleInput = (e) => {
    console.log(e.target.value)
  }

  return (
    <div>
      <input type="file" onChange={(e) => {
        const file = e.target.files[0];
        readExcel(file)
      }}/>

      <ul>
        {
          items.map((obj, index) =>
            <li>
              <input
                onChange={e => onChangeInput(e)}
                onClick={e => onHandleInput(e)}
                value={obj.fruit ? obj.fruit : valueInp}
                type="text"
                key={index}
              />
            </li>
          )
        }
      </ul>
    </div>

  )
}

export default LoadingFileXlsx;