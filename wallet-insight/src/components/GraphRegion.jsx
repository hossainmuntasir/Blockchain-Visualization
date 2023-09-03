import React, { useState, useCallback } from "react";
import ReactFlow, {
    Controls,
    Background,
    applyNodeChanges,
    applyEdgeChanges,
} from "reactflow";
import "reactflow/dist/style.css";

import * as data from '../utils/TestData';
import CircleNode from './CircleNode';


// Styling nodes

const nodeTypes = {
    circle: CircleNode
};

// Hardcoded Dataset
const initialNodes = data.initialNodes;
const initialEdges = data.initialEdges;


export default function GraphRegion(props) {

    const onNodeClick = (event, node) => {
        // TODO GET call to return a nodes information based on an id.
        console.log(node.data);
        props.callBack(node.data);
    };

    const onEdgeClick = (event, edge) => {
        // TODO Allow details tab to handle an edge event.
    };

    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        []
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        []
    );
    return (
        <>
            <div style={{ height: '100%', backgroundColor: 'white', borderRadius: '8px' }}>
                <ReactFlow
                    nodes={nodes}
                    onNodesChange={onNodesChange}
                    edges={edges}
                    onEdgesChange={onEdgesChange}
                    nodeTypes={nodeTypes}
                    onNodeClick={onNodeClick}
                    onEdgeClick={onEdgeClick}
                >
                    <Background />
                    <Controls position="top-right" />
                </ReactFlow>
            </div>
        </>
    );
}