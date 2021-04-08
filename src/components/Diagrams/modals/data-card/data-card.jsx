import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './data-card.css'
import {ava, documents, kebabMenu, messageCircle} from "../../images";
import {Save, saveType} from "../save/save";

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }
//
// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();
//
//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

export const DataCard = ({setOpen, open = false, card}) => {
  // const [modalStyle] = React.useState(getModalStyle);
  const [textareaFocus, setTextareaFocus] = useState(false)
  const [textareaOnChange, setTextareaOnChange] = useState({
    value: '',
    height: '',
  })

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnchangeTextarea = (e) => {
    setTextareaOnChange((item) => ({
      value: e.target.value,
      height: e.target.scrollHeight
    }))
  }

  const focusTextarea = (e) => {
    setTextareaFocus(true)
    // console.log(e.target.value.match(/\n/g) !== null && e.target.value.match(/\n/g).length + 1)
  }

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
            <img className="modal__menu" src={kebabMenu} alt="menu"/>
            <div className="d-flex mt-15 mb-30">
              <img src={ava} alt="avatar"/>
              <div className="ml-15">
                <h2 className="modal__title">{card?.full_name}</h2>
                <input defaultValue={card?.working_position} placeholder="Должность"/>
              </div>
            </div>
            {
              card?.user_data.map(item => {
                return (
                  <div className="d-flex align-items-center mb-5"
                       style={{
                         // border: '1px solid red',
                         width: 350,
                       }}
                       key={item.id}
                  >
                    <img src={item.icon} alt="icon"/>
                    <p className="modal__text">{item.title}</p>
                    <input type="data-user" placeholder="Пусто" style={{
                      margin: '0 0 0 auto',
                    }}/>
                  </div>
                )
              })
            }
            <div className="d-flex align-items-center mb-5">
              <img src="" alt="icon" style={{border: '1px solid green',}}/>
              <p className="modal__text">Добавить</p>
            </div>
            <h4 className="mt-25 mb-15 d-flex align-items-center ">
              <span className="d-flex align-items-center"><img src={messageCircle} alt="message"/></span>
              Характеристики
            </h4>
            <textarea
              onFocus={(e) => focusTextarea(e)}
              // onBlur={(e) => setTextareaFocus(false)}
              onChange={(e) => handleOnchangeTextarea(e)}
              className="modal__textarea"
              placeholder="Напишите что-нибудь"
              style={{
                minHeight: textareaFocus && textareaOnChange.height > 75 ? textareaOnChange.height : 75,
                overflowY: textareaFocus && 'hidden',
                border: textareaFocus && '1px solid #53A9D7',
              }}
              name="" id="" cols="10" rows="4"
            />
            {textareaFocus && <Save type={saveType.textarea} setTextareaFocus={setTextareaFocus}/>}
            <h4 className="mt-25 mb-15 d-flex align-items-center ">
              <span className="d-flex align-items-center"><img src={documents} alt="doc"/></span>
              Документы
            </h4>
            <div className="d-flex align-items-center mb-5">
              <img src="" alt="icon" style={{border: '1px solid green',}}/>
              <p className="modal__text">Добавить</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}