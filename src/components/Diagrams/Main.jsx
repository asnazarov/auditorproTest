import React, {useEffect, useState} from 'react';
import ReactFlow, {removeElements, addEdge} from 'react-flow-renderer';
import avatarJob from './images/avatar-job.jpg';
import fileSvg from './images/file.svg';
import commentSvg from './images/comment.svg';
import './main.css';
import {ControlPanel} from "./control-panel/control-panel";
import {DataCard} from "./modals/data-card";

const data = [
  {
    id: 0,
    photo: '',
    full_name: '11111111111',
    status_color: '#E1E5EB',
    working_position: 'Второй помощник капитана',
    characteristic: '',
    documents: [],
    position: {x: 350, y: 200},
    user_data: [
      {
        id: 1,
        icon: '',
        title: 'Департамент',
        description: '',
      },
      {
        id: 2,
        icon: '',
        title: 'Дата рождения',
        description: '',
      },
      {
        id: 3,
        icon: '',
        title: 'Телефон',
        description: '',
      },
      {
        id: 4,
        icon: '',
        title: 'Почта',
        description: '',
      },
    ],
  },
]

// const initialElements = [
//   // {
//   //   id: '1',
//   //   type: 'default',
//   //   data: {label: "Main card"},
//   //   targetPosition: 'left',
//   //   position: {x: 250, y: 25},
//   //   // draggable: false,
//   //   // connectable: false,
//   //   className: 'rrrrrr',
//   //   // selectable: false,
//   // },
//   {
//     id: '2',
//     data: {
//       label:
//         <>
//           <div className="status"/>
//           <div className="card__item">
//             <img src={avatarJob} alt="avatar"/>
//             <div>
//               <p>Владислав</p>
//               <p>Константинов</p>
//               <p>Второй помощник капитана</p>
//             </div>
//           </div>
//           <div style={{display: 'flex'}}>
//             <img src={commentSvg} alt="comment"/>
//             <img src={fileSvg} alt="file"/>
//             <p style={{margin: 0}}>А56</p>
//           </div>
//         </>
//     },
//     className: "card",
//     position: {x: 550, y: 250},
//   },
// ];

export default () => {
  const [elements, setElements] = useState([]);
  const [dataActiveCard, setDataActiveCard] = useState({})
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpen = (card) => {
    setOpenModal(true);
    setDataActiveCard(card)
  };

  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));

  const onSubmitName = (e) => {
    e.preventDefault()
    e.target[0].blur()
  }

  const returnLabel = (card) => {
    return (
      <div>
        <div onDoubleClick={() => handleOpen(card)}>
          <div className="status" style={{background: card.status_color}}/>
          <div className="card__item">
            <img src={avatarJob} alt="avatar"/>
            {(data.length === 1 && card.full_name === '') ?
              <div>
                <form onSubmit={onSubmitName}>
                  <input placeholder="Имя и фамилия"/>
                </form>
              </div> : <div>
                <p>{card.full_name}</p>
                <p>{card.working_position}</p>
              </div>
            }
          </div>
          <div style={{display: 'flex'}}>
            <img src={commentSvg} alt="comment"/>
            <img src={fileSvg} alt="file"/>
            <p style={{margin: 0}}>А56</p>
          </div>
        </div>
      </div>
    )
  }

  useEffect(() => {
    const items = data.map(card => {
      return {
        id: card.id,
        position: card.position,
        data: {label: returnLabel(card)},
        className: "card",
      }
    })
    setElements(items)
  }, [])

  return (
    <>
      <DataCard setOpen={setOpenModal} open={openModal} card={dataActiveCard}/>
      <ControlPanel/>
      <ReactFlow
        elements={elements}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        className="cardssss"
        style={{
          height: "80vh",
          // border: "1px solid red"
        }}
        deleteKeyCode={46} /* 'delete'-key */
      >
        <div>123</div>
      </ReactFlow>
    </>
  );
};