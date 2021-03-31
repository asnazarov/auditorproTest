import React, {useState} from 'react';
import ReactFlow, {removeElements, addEdge} from 'react-flow-renderer';
import avatarJob from './images/avatar-job.jpg';
import fileSvg from './images/file.svg';
import commentSvg from './images/comment.svg';
import './main.css';
import {ControlPanel} from "./control-panel/control-panel";

const initialElements = [
  {
    id: '1',
    type: 'default',
    data: {label: "Main card"},
    targetPosition: 'left',
    position: {x: 250, y: 25},
    // draggable: false,
    // connectable: false,
    className: 'rrrrrr',
    // selectable: false,
  },
  {
    id: '2',
    data: {
      label:
        <>
          <div className="status"/>
          <div className="card__item">
            <img src={avatarJob} alt="avatar"/>
            <div>
              <p>Владислав</p>
              <p>Константинов</p>
              <p>Второй помощник капитана</p>
            </div>
          </div>
          <div style={{display: 'flex'}}>
            <img src={commentSvg} alt="comment"/>
            <img src={fileSvg} alt="file"/>
            <p style={{margin: 0}}>А56</p>
          </div>
        </>
    },
    className: "card",
    position: {x: 100, y: 125},
  },
];

export default () => {
  const [elements, setElements] = useState(initialElements);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));

  return (
    <>
      <ControlPanel/>
      <ReactFlow
        elements={elements}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        className="cardssss"
        style={{height: "80vh",
          // border: "1px solid red"
        }}
        deleteKeyCode={46} /* 'delete'-key */
      >
        <div>123</div>
      </ReactFlow>
    </>
  );
};