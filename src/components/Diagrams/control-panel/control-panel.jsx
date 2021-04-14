import React, {useState} from "react";
import './control-panel.css'
import {
  arrowDownSvg,
  briefcaseSvg,
  circleSvg,
  downloadSvg,
  filterSvg, menuSvg, plusSvg,
  printerSvg,
  shareSvg,
  userCheckSvg
} from './images'
import clsx from "clsx";
import ChoiceOrdinagram from "../modals/choice-ordinagram/choice-ordinagram";
import ArrowDown from "./images/arrow-down";
import CreateOrdinagram from "../modals/create-orginagram/create-orginagram";

let organigrams = [
  {
    id: 0,
    order_id: 1,
    name: '',
    type: '',  // top-bottom, bottom-top, left-right, right-left
    connect_line: 'smoothstep',  //  'default', 'straight', 'step','smoothstep'
    base_color: '',
  },
]

export const ControlPanel = () => {
  const [openModalChoice, setOpenModalChoice] = useState(false)
  const [openModalCreate, setOpenModalCreate] = useState(false)

  const onClickOpenModalChoice = () => {
    setOpenModalChoice(open => !open)
  }

  const onClickOpenModalCreate = () => {
    setOpenModalCreate(open => !open)
  }

  return (
    <div className="controlPanel">
      <div className={clsx("controlPanel__item", "mr-10")}>
        <img src={menuSvg} alt="menu"/>
      </div>
      <div style={{position: 'relative'}}>
        <div className={clsx("controlPanel__item", "mr-10")}>
          {organigrams[0].name === '' ? (
            <div onClick={onClickOpenModalCreate} className="d-flex align-items-center">
              <p className="controlPanel__text">Создать новую</p>
              <img className="p-10 cup" src={plusSvg} alt="add"/>
            </div>
          ) : (
            <div onClick={onClickOpenModalChoice} className="d-flex align-items-center">
              <p className="controlPanel__text" style={{color: openModalChoice && '#1D8BC5'}}>12312312</p>
              <ArrowDown className="ml-10 cup" openModalChoice={openModalChoice}/>
            </div>)}
        </div>
        {openModalCreate && <CreateOrdinagram open={openModalCreate} setOpenModalCreate={setOpenModalCreate}/>}
        {openModalChoice && <ChoiceOrdinagram organigrams={organigrams} onClickOpenModal={onClickOpenModalChoice}/>}
      </div>
      <div className="controlPanel__item">
        <img className="mr-25" src={printerSvg} alt="printer"/>
        <img className="mr-25" src={downloadSvg} alt="download"/>
        <img src={shareSvg} alt="share"/>
      </div>
      <div className={clsx("controlPanel__item", "ml-auto")}>
        <img className="mr-25" src={userCheckSvg} alt="printer"/>
        <img className="mr-25" src={briefcaseSvg} alt="briefcase"/>
        <img src={filterSvg} alt="filter"/>
      </div>
    </div>
  )
}