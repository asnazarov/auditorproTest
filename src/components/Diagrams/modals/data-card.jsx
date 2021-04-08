import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './data-card.css'
import {ava, kebabMenu} from "../images";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

export const DataCard = ({setOpen, open = false, card}) => {
  const [modalStyle] = React.useState(getModalStyle);
  console.log(modalStyle)
  const handleClose = () => {
    setOpen(false);
  };
// console.log(card)
  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className="modal">
          <div className="status" style={{background: card.status_color}}/>
          {/*<div onClick={handleClose}>X</div>*/}
          <div className="modal__item">
            <img className="modal__menu" src={kebabMenu} alt="menu" style={{}}/>
            <div className={`${'d-flex'}`}>
              <img src={ava} alt="avatar"/>
              <div className="ml-15">
                <h2 className="modal__title">{card?.full_name}</h2>
                <input  defaultValue={card?.working_position}/>
              </div>

            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}