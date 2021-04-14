import React from "react";
import './save.css';
import {closeSaveSvg} from "../../images";
import clsx from "clsx";

export const saveType = {
  textarea: 'textarea',
  card: 'card',
}

export const Save = ({
                       type,
                       text,
                       className,
                       setTextareaFocus,
                       setInputFocus,
                     }) => {

  switch (type) {
    case saveType.textarea :
      return (
        <div className="d-flex align-items-center mt-15">
          <button
            className="save-btn save-btn_textarea"
          >{text}</button>
          <img
            onClick={() => setTextareaFocus(false)}
            className="ml-15 cup"
            src={closeSaveSvg} alt="close"/>
        </div>
      )
    case saveType.card :
      return (
        <div className={clsx(className, "d-flex align-items-center mt-25")}>
            <button
              className="save-btn save-btn_card"
            >{text}</button>
            <img
              className="ml-10 cup"
              src={closeSaveSvg} alt="close"/>
        </div>
      )
  }
}