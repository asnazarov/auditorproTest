// import React, {useEffect, useState} from 'react';
// import ReactFlow, {removeElements, addEdge, Handle} from 'react-flow-renderer';
// import avatarJob from './images/avatar-job.jpg';
// import fileSvg from './images/file.svg';
// import commentSvg from './images/comment.svg';
// import './main.css';
// import {ControlPanel} from "./control-panel/control-panel";
// import {DataCard} from "./modals/data-card/data-card";
//
//
// let data = [
//   {
//     id: 12321231213,
//     photo: '',
//     full_name: 'Вася',
//     status_color: '#E1E5EB',
//     // working_position: 'Второй помощник капитана',
//     working_position: '',
//     characteristic: '',
//     documents: [],
//     position: {x: 350, y: 50},
//     user_data: [
//       {
//         id: 1,
//         icon: '',
//         title: 'Департамент',
//         description: '',
//       },
//       {
//         id: 2,
//         icon: '',
//         title: 'Дата рождения',
//         description: '',
//       },
//       {
//         id: 3,
//         icon: '',
//         title: 'Телефон',
//         description: '',
//       },
//       {
//         id: 4,
//         icon: '',
//         title: 'Почта',
//         description: '',
//       },
//     ],
//   },
//   {
//     id: 1,
//     photo: '',
//     full_name: 'Петя',
//     status_color: '#E1E5EB',
//     // working_position: 'Второй помощник капитана',
//     working_position: '',
//     characteristic: '',
//     documents: [],
//     position: {x: 128, y: 272},
//     user_data: [
//       {
//         id: 1,
//         icon: '',
//         title: 'Департамент',
//         description: '',
//       },
//       {
//         id: 2,
//         icon: '',
//         title: 'Дата рождения',
//         description: '',
//       },
//       {
//         id: 3,
//         icon: '',
//         title: 'Телефон',
//         description: '',
//       },
//       {
//         id: 4,
//         icon: '',
//         title: 'Почта',
//         description: '',
//       },
//     ],
//   },
//   {
//     id: 2,
//     photo: '',
//     full_name: 'Петя',
//     status_color: '#E1E5EB',
//     // working_position: 'Второй помощник капитана',
//     working_position: '',
//     characteristic: '',
//     documents: [],
//     position: {x: 637, y: 278},
//     user_data: [
//       {
//         id: 1,
//         icon: '',
//         title: 'Департамент',
//         description: '',
//       },
//       {
//         id: 2,
//         icon: '',
//         title: 'Дата рождения',
//         description: '',
//       },
//       {
//         id: 3,
//         icon: '',
//         title: 'Телефон',
//         description: '',
//       },
//       {
//         id: 4,
//         icon: '',
//         title: 'Почта',
//         description: '',
//       },
//     ],
//   },
//
// ]
//
// // const initialElements = [
// //   // {
// //   //   id: '1',
// //   //   type: 'default',
// //   //   data: {label: "Main card"},
// //   //   targetPosition: 'left',
// //   //   position: {x: 250, y: 25},
// //   //   // draggable: false,
// //   //   // connectable: false,
// //   //   className: 'rrrrrr',
// //   //   // selectable: false,
// //   // },
// //   {
// //     id: '2',
// //     data: {
// //       label:
// //         <>
// //           <div className="status"/>
// //           <div className="card__item">
// //             <img src={avatarJob} alt="avatar"/>
// //             <div>
// //               <p>Владислав</p>
// //               <p>Константинов</p>
// //               <p>Второй помощник капитана</p>
// //             </div>
// //           </div>
// //           <div style={{display: 'flex'}}>
// //             <img src={commentSvg} alt="comment"/>
// //             <img src={fileSvg} alt="file"/>
// //             <p style={{margin: 0}}>А56</p>
// //           </div>
// //         </>
// //     },
// //     className: "card",
// //     position: {x: 550, y: 250},
// //   },
// // ];
//
// export default () => {
//   let connectLine = [
//     // {
//     //   id: "reactflow__edge-12321231213c-2a",
//     //   source: "12321231213",
//     //   sourceHandle: "c",
//     //   target: "2",
//     //   targetHandle: "a",
//     // },
//     {
//       id: 'e1-1',
//       source: '12321231213',
//       target: '2',
//       type: 'smoothstep',
//     },
//     // {
//     //   id: 'e1-2',
//     //   source: '12321231213',
//     //   target: '1',
//     //   type: 'smoothstep',
//     // },
//   ]
//   const [elements, setElements] = useState([]);
//   const [dataActiveCard, setDataActiveCard] = useState({})
//   const [openModal, setOpenModal] = React.useState(false);
//   const [mouseEnterLeave, setMouseEnterLeave] = useState(false)
//   const [a, setA] = useState(false)
//
//   const handleDoubleClickCard = (card) => {
//     setOpenModal(true);
//     setDataActiveCard(card)
//   };
//
//   const onElementsRemove = (elementsToRemove) =>
//     setElements((els) => removeElements(elementsToRemove, els));
//
//   const onConnect = (params) => {
//     console.log(params)
//     // let newData = [...connectLine, params]
//     // connectLine = newData
//    return setElements((els) => addEdge(params, els));
//   }
//
//   const onNodeDragStop = (event, node) => {
//     console.log(node)
//     // const newData = data?.map((x, index) => {
//     //   if (x.id === Number(node.id)) {
//     //     return {
//     //       ...x,
//     //       position: node?.position
//     //     }
//     //   }
//     //   return {...x}
//     // })
//     // data = newData
//   }
//
//
//   const onNodeMouseEnter = (event, node) => {
//     setMouseEnterLeave(true)
//   }
//
//   const onNodeMouseLeave = (event, node) => {
//     setMouseEnterLeave(false)
//   }
//
//   const onSubmitName = (e) => {
//     e.preventDefault()
//     e.target[0].blur()
//   }
//   const returnLabel = (card, indexCard) => {
//
//     return (
//       <div>
//         <div
//           onDoubleClick={() => handleDoubleClickCard(card)}
//           // onMouseEnter={(e) => setMouseEnterLeave(true)}
//           // onMouseLeave={(e) => setMouseEnterLeave(false)}
//         >
//           <div className="status" style={{background: card.status_color}}/>
//           <div className="card__item">
//             <img src={avatarJob} alt="avatar"/>
//             {(data.length === 1 && card.full_name === '') ?
//               <div>
//                 <form onSubmit={onSubmitName}>
//                   <input placeholder="Имя и фамилия"/>
//                 </form>
//               </div> : <div>
//                 <p>{card.full_name}</p>
//                 <p>{card.working_position}</p>
//               </div>
//             }
//           </div>
//           <div style={{display: 'flex'}}>
//             <img src={commentSvg} alt="comment"/>
//             <img src={fileSvg} alt="file"/>
//             <p style={{margin: 0}}>А56</p>
//           </div>
//         </div>
//         <button className="card__add card__add_left">+</button>
//         <button className="card__add card__add_bottom">+</button>
//         <button className="card__add card__add_right">+</button>
//         <Handle
//           type="target"
//           position="top"
//           id="a"
//           style={{borderRadius: 0, bottom: 0, width: 22, height: 10}}
//           // isValidConnection={(connection) => console.log(connection)}
//           // isValidConnection={(connection) => connection.source === 'some-id'}
//           // onConnect={(params) => console.log('handle onConnect', params)}
//           // onConnect={(params) => onConnect(params)}
//         />
//         {/*<Handle*/}
//         {/*  // type="target"*/}
//         {/*  position="right"*/}
//         {/*  id="b"*/}
//         {/*  style={{top: '50%', borderRadius: 0, right: 0, width: 10, height: 22}}*/}
//         {/*  isValidConnection={(connection) => console.log(connection)}*/}
//         {/*  // isValidConnection={(connection) => connection.source === 'some-id'}*/}
//         {/*  onConnect={(params) => console.log('handle onConnect', params)}*/}
//         {/*/>*/}
//         <Handle
//           type="source"
//           position="bottom"
//           id="c"
//           style={{borderRadius: 0, bottom: 0, width: 22, left: '50%', height: 10}}
//           // isValidConnection={(connection) => console.log(connection)}
//           // isValidConnection={(connection) => connection.source === 'some-id'}
//           // onConnect={(params) => console.log('handle onConnect', params)}
//           // onConnect={(params) => onConnect(params)}
//         />
//         {/*<Handle*/}
//         {/*  // type="source"*/}
//         {/*  position="left"*/}
//         {/*  id="d"*/}
//         {/*  style={{borderRadius: 0, left: 0, width: 10, height: 22}}*/}
//         {/*  isValidConnection={(connection) => console.log(connection)}*/}
//         {/*  // isValidConnection={(connection) => connection.source === 'some-id'}*/}
//         {/*  onConnect={(params) => console.log('handle onConnect', params)}*/}
//         {/*/>*/}
//       </div>
//     )
//   }
//
//   useEffect(() => {
//     let items = data.map((card, index) => {
//       return (
//         {
//           id: card.id,
//           position: card.position,
//           data: {label: returnLabel(card, index)},
//           className: "card",
//           type: 'input',
//         }
//       )
//     })
//     items = items.concat(connectLine)
//     console.log('items', items)
//     setElements(items)
//   }, [])
//
// console.log(elements)
//   return (
//     <>
//       {openModal && <DataCard setOpen={setOpenModal} open={openModal} card={dataActiveCard}/>}
//       <ControlPanel/>
//       <ReactFlow
//         elements={elements}
//         onElementsRemove={onElementsRemove}
//         onNodeDragStop={onNodeDragStop}
//         connectionLineType="smoothstep"
//         // onNodeMouseEnter={onNodeMouseEnter}
//         // onNodeMouseLeave={onNodeMouseLeave}
//         onConnect={onConnect}
//         className="cardssss"
//         style={{
//           height: "80vh",
//           // border: "1px solid red"
//         }}
//         deleteKeyCode={46} /* 'delete'-key */
//       >
//         <div>123</div>
//       </ReactFlow>
//     </>
//   );
// };


import React, {useCallback, useEffect, useState} from 'react';
import ReactFlow, {Controls, updateEdge, addEdge, Handle} from 'react-flow-renderer';
import './main.css';
import {ControlPanel} from "./control-panel/control-panel";
import {DataCard} from "./modals/data-card/data-card";
import {avatarJob} from "./images";

let connectLine = [
  {id: 'e1-2', source: '1', target: '2', label: 'заметка', type: 'smoothstep',},
]
const getNodeId = () => `randomnode_${+new Date()}`;

let initialElements = [
  {
    id: '1',
    full_name: 'Петя',
    data: { label: 'Node A' },
    status_color: '#E1E5EB',
    position: {x: 350, y: 50},
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
  {
    id: '2',
    full_name: 'Миша',
    data: { label: 'Node A' },
    status_color: '#29c31a',
    position: {x: 128, y: 278},
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
  {
    id: '3',
    full_name: 'Вася',
    data: { label: 'Node A' },
    status_color: '#07b89d',
    position: {x: 637, y: 278},
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
  {
    id: '4',
    full_name: 'Жора',
    data: { label: 'Node A' },
    status_color: '#07b89d',
    position: {x: 637, y: 578},
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
];
const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

export default () => {

  // const [elements, setElements] = useState(initialElements.concat(connectLine));
  const [elements, setElements] = useState([]);
  const [dataActiveCard, setDataActiveCard] = useState({})
  const [openModal, setOpenModal] = React.useState(false);
  // const onEdgeUpdate = (oldEdge, newConnection) =>
  //   setElements((els) => updateEdge(oldEdge, newConnection, els));

  const onAdd = (event, card) => {
    const heightElem = event.nativeEvent.path[1].clientHeight
    console.log(event.nativeEvent.path[1].clientHeight)
    // console.log(event.target.parentElement)
    // console.log(event)
    console.log(elements)

    console.log(card)
    const newNode = {
      id: getNodeId(),
      data: { label: returnLabel(card) },
      position: {
        x: card.position.x,
        y: card.position.y + 300,
      },
      type: 'input',
      className: "card",
    };
    setElements((els) => els.concat(newNode));
  };

  const handleDoubleClickCard = (card) => {
    setOpenModal(true);
    setDataActiveCard(card)
  };

  const onConnect = (params) => {
    params = {...params, type: 'smoothstep',}
    setElements((els) => addEdge(params, els))
  };

  const returnLabel = (card, indexCard) => {

    return (
      <>
        <div
          onDoubleClick={() => handleDoubleClickCard(card)}
          // onMouseEnter={(e) => setMouseEnterLeave(true)}
          // onMouseLeave={(e) => setMouseEnterLeave(false)}
        >
          <div className="status" style={{background: card.status_color}}/>
          <div className="card__item">
            <img src={avatarJob} alt="avatar"/>
            {/*{(data.length === 1 && card.full_name === '') ?*/}
            <div>
              {/*<form onSubmit={onSubmitName}>*/}
              <form>
                <input placeholder="Имя и фамилия"/>
              </form>
            </div>
            : <div>
            <p>{card.full_name}</p>
            {/*<p>{card.working_position}</p>*/}
          </div>
            {/*}*/}
          </div>
          <div style={{display: 'flex'}}>
            {/*<img src={commentSvg} alt="comment"/>*/}
            {/*<img src={fileSvg} alt="file"/>*/}
            <p style={{margin: 0}}>А56</p>
          </div>
        </div>
        <button className="card__add card__add_left">+</button>
        <button className="card__add card__add_bottom" onClick={(event) =>onAdd(event, card)}>+</button>
        <button className="card__add card__add_right">+</button>
        <Handle
          type="target"
          position="top"
          id="a"
          style={{borderRadius: 0, bottom: 0, width: 22, height: 10}}
          // isValidConnection={(connection) => console.log(connection)}
          // isValidConnection={(connection) => connection.source === 'some-id'}
          // onConnect={(params) => console.log('handle onConnect', params)}
          // onConnect={(params) => onConnect(params)}
        />
        <Handle
          type="source"
          position="bottom"
          id="c"
          style={{borderRadius: 0, bottom: 0, width: 22, left: '50%', height: 10}}
          // isValidConnection={(connection) => console.log(connection)}
          // isValidConnection={(connection) => connection.source === 'some-id'}
          // onConnect={(params) => console.log('handle onConnect', params)}
          // onConnect={(params) => onConnect(params)}
        />
      </>
    )
  }

  useEffect(() => {
    let items = initialElements.map(card => {
      return ({
        id: card.id,
        position: card.position,
        data: {label: returnLabel(card)},
        type: 'input',
        className: "card",
      })
    })

    items = items.concat(connectLine)
//     console.log('items', items)
    setElements(items)
  }, [initialElements])

  return (
    <>
      {/*{openModal && <DataCard setOpen={setOpenModal} open={openModal} card={dataActiveCard}/>}*/}
      {openModal && <DataCard setOpen={setOpenModal} open={openModal} card={dataActiveCard}/>}
      <ControlPanel/>
      <ReactFlow
        elements={elements}
        onLoad={onLoad}
        snapToGrid
        snapGrid={[10,10]}
        defaultZoom={0.8}
        minZoom={0.3}
        maxZoom={2}
        // onEdgeUpdate={onEdgeUpdate}
        onConnect={onConnect}
        connectionLineType="smoothstep"
        style={{
          height: "80vh",
          // border: "1px solid red"
        }}
        deleteKeyCode={46} /* 'delete'-key */
      >
        qwe
        <Controls/>
      </ReactFlow>
    </>
  )

};








