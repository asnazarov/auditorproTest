import React from "react";
import './choice-ordinagram.css'

const ChoiceOrdinagram = ({organigrams, onClickOpenModalChoice}) => {

  return (
    <div className="mod-orgm">
      <p className="mod-orgm__text mod-orgm__text_choice">Выберите органиграмму</p>
      { organigrams.map(card => {
        return (
          <p onClick={onClickOpenModalChoice} className="mod-orgm__text mod-orgm__text_bark">Барк "{card.name}"</p>
        )
      })
      }
      <p className="mod-orgm__text mod-orgm__text_create">Создать новую</p>
    </div>
  )
}

export default ChoiceOrdinagram;