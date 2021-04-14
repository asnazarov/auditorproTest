import React from "react";
import './create-ordinagram.css'
import Modal from '@material-ui/core/Modal';
import {Save, saveType} from "../save/save";
import {arrow1Svg, arrow2Svg, orgmLeftRightSvg, orgmTopBottomSvg} from "./images";

const CreateOrdinagram = ({setOpenModalCreate, open = false}) => {

  const handleClose = () => {
    setOpenModalCreate(false);
  };

  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className="modal crt-orgm">
          <form>
            <input className="crt-orgm__input" type="text" placeholder="Название судна"/>
          </form>
          <p className="crt-orgm__text" style={{borderTop: '1px solid #dcd8d8', paddingTop: 12}}>Выберите тип
            органиграммы</p>
          <div className="d-flex align-items-center" style={{padding: 8}}>
            <img className="cup mr-10" src={orgmTopBottomSvg} alt="top-bottom"/>
            <img className="cup" src={orgmLeftRightSvg} alt="left-right"/>
          </div>
          <p className="crt-orgm__text" style={{padding: '0 12'}}>Выберите соединительные линии</p>
          <div className="d-flex align-items-center" style={{padding: 8}}>
            <bottom className="cup mr-10 crt-orgm__arrow">
              <img src={arrow1Svg} alt="arrow"/>
            </bottom>
            <bottom className="cup crt-orgm__arrow">
              <img src={arrow2Svg} alt="arrow"/>
            </bottom>
          </div>
          <div className="d-flex mt-15">
            <div className="mr-10 cup"
                 style={{backgroundColor: '#878F93', borderRadius: '50%', width: 20, height: 20}}/>
            <div className="mr-10 cup"
                 style={{backgroundColor: '#C4CCD7', borderRadius: '50%', width: 20, height: 20}}/>
            <div className="mr-10 cup"
                 style={{backgroundColor: '#53A9D7', borderRadius: '50%', width: 20, height: 20}}/>
          </div>
          <Save className="create-orgm" type={saveType.card} text="Создать"/>
        </div>
      </Modal>
    </div>
  )
}

export default CreateOrdinagram;