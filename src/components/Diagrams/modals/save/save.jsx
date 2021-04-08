import React from "react";
import './save.css';
import {closeSave} from "../../images";

export const saveType = {
  textarea: 'textarea',
  card: 'card',
}

export const Save = ({type, setTextareaFocus}) => {

  switch (type) {
    case saveType.textarea :
      return (
        <div className="d-flex align-items-center mt-15">
            <button
              style={{
              padding: "12px 20px",
              background: '#53A9D7',
              borderRadius: 8,
              outline: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'white'
            }} >Сохранить</button>
            <img
              onClick={() => setTextareaFocus(false)}
              className="ml-15 cup"
              src={closeSave} alt="close"/>
        </div>
      )
  }
}