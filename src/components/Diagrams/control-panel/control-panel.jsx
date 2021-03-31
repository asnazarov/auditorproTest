import React from "react";
import './control-panel.css'
import {arrowDown, briefcase, circle, download, filter, menu, printer, share, userCheck} from './images'
import clsx from "clsx";

export const ControlPanel = () => {

  return (
    <div className="controlPanel">
      <div className={clsx("controlPanel__item", "mr-10")}>
        <img src={menu} alt="menu"/>
      </div>
      <div className={clsx("controlPanel__item", "mr-10")}>
        <p>12312312</p>
        <img src={arrowDown} alt="arrow"/>
        <img className="ml-15" src={circle} alt="circle"/>
      </div>
      <div className="controlPanel__item">
        <img className="mr-25" src={printer} alt="printer"/>
        <img className="mr-25" src={download} alt="download"/>
        <img src={share} alt="share"/>
      </div>
      <div className={clsx("controlPanel__item", "ml-auto")}>
        <img className="mr-25" src={userCheck} alt="printer"/>
        <img className="mr-25" src={briefcase} alt="briefcase"/>
        <img src={filter} alt="filter"/>
      </div>
    </div>
  )
}