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

const nodeTypes = {
    circle: CircleNode
};

const onNodeClick = (event, node) => {
    console.log("Node clicked:", node.id);
};

const onEdgeClick = (event, edge) => {
    console.log("Edge clicked:", edge.id);
};


export default function GraphRegion(props) {
    // const store = useStoreApi();
    // const { zoomIn, zoomOut, setCenter } = useReactFlow();

    const [nodes, setNodes] = useState(props.initialNodes);
    const [edges, setEdges] = useState(props.initialEdges);
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
            <div style={{ height: '100%', backgroundColor: 'white' }}>
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