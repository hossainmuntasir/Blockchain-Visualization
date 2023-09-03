import React, { useState, useCallback } from "react";
import ReactFlow, {
    Controls,
    Background,
    applyNodeChanges,
    applyEdgeChanges,
    useStoreApi,
    useReactFlow
} from "reactflow";
import "reactflow/dist/style.css";
import CircleNode from "./CircleNode";
import * as data from '../utils/TestData';


const nodeTypes = {
    circle: CircleNode
};

// Hardcoded Dataset
const initialNodes = data.initialNodes;
const initialEdges = data.initialEdges;

const nodeData = data.objectData;

// console.log(nodeData[0]);

const onNodeClick = (event, node) => {
    console.log("Node clicked:", node.id);
};

const onEdgeClick = (event, edge) => {
    console.log("Edge clicked:", edge.id);
};


export default function GraphRegion(props) {
    // const store = useStoreApi();
    // const { zoomIn, zoomOut, setCenter } = useReactFlow();

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