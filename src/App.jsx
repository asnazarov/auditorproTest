import React from 'react';
import Main from "./components/Diagrams/Main";
import './styles/global.css';



const App = () => {


  return (
    <>
      <Main/>
    </>
  );
}

export default App;


// import React, {useState} from 'react';
// import ReactFlow, {Controls, updateEdge, addEdge} from 'react-flow-renderer';
//
//
// const initialElements = [
//   {
//     id: '1',
//     type: 'input',
//     data: {label: 'Node A'},
//     position: {x: 250, y: 0},
//   },
//   {
//     id: '2',
//     data: {label: 'Node B'},
//     position: {x: 100, y: 200},
//   },
//   {
//     id: '3',
//     data: {label: 'Node C'},
//     position: {x: 400, y: 200},
//   },
//   {id: 'e1-2', source: '1', target: '2', label: 'updatable edge'},
// ];
// const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();
//
// export default () => {
//
//   const [elements, setElements] = useState(initialElements);
//   // gets called after end of edge gets dragged to another source or target
//   // const onEdgeUpdate = (oldEdge, newConnection) =>
//   //   setElements((els) => updateEdge(oldEdge, newConnection, els));
//   const onConnect = (params) => setElements((els) => addEdge(params, els));
//   console.log(elements)
//   return (
//     <div style={{height: 300}}>
//       <ReactFlow
//         elements={elements}
//                  onLoad={onLoad}
//         snapToGrid
//         // onEdgeUpdate={onEdgeUpdate}
//         onConnect={onConnect}
//       >
//         {/*<Controls />*/}
//       </ReactFlow>
//     </div>
//   )
//
// };