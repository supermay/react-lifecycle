import React, {forwardRef, useCallback, useEffect, useImperativeHandle, useState} from 'react';
import {addEdge, Background, type Edge, type NodeMouseHandler, ReactFlow, ReactFlowProvider,} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import {getLayoutedElements} from "./autoLayout.ts";
import CustomEdge from "./CustomEdge.tsx";

const initialNodes = [
    { id: '1', data: { label: 'Node 1' }, position: { x: 0, y: 0 } },
    { id: '2', data: { label: 'Node 2' }, position: { x: 0, y: 0 } },
    { id: '3', data: { label: 'Node 3' }, position: { x: 0, y: 0 } },
    { id: '4', data: { label: 'Node 4' }, position: { x: 0, y: 0 } },
    { id: '5', data: { label: 'Node 5' }, position: { x: 0, y: 0 } },
];

const initialEdges = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e1-3', source: '1', target: '3' },
    { id: 'e4-5', source: '4', target: '5' }
    // possible solution for customisablity
    // label: 'marker size and color',
    // style: {
    //     strokeWidth: 2,
    //     stroke: '#FF0072',
    // }
];

export type CanvasHandle = {
    addNode: () => void; // function parent can call
};

type CanvasProps = { // input for this component
    backgroundColor?: string;
};

const Canvas = forwardRef<CanvasHandle, CanvasProps>(({backgroundColor}, ref) => {
    const [nodes, setNodes] = useState<Node[]>([]);
    const [edges, setEdges] = useState<Edge[]>([]);
    const [, setRfInstance] = useState(null);

    useEffect(() => {
        // TODO: write reusable functions for layoutedNotes and layoutedEdges
        const {nodes: layoutedNodes, edges: layoutedEdges} = getLayoutedElements(
            initialNodes,
            initialEdges
        );

        const fixedNodes = layoutedNodes.map((node) => ({...node, draggable: false}));
        setNodes(fixedNodes);
        setEdges(layoutedEdges);
    }, []);


    // Handle node click
    const onNodeClick: NodeMouseHandler = (event, node) => {
        const newNodeId = (nodes.length + 1).toString();

        // TODO: this should open a popup
        const newNode: Node = {
            id: newNodeId,
            data: {label: `Node ${newNodeId}`},
            position: {x: 0, y: 0}, // position doesnt matter, we use auto layout
            draggable: false,
        };

        const newEdge: Edge = {
            id: `e${node.id}-${newNodeId}`,
            source: node.id,
            target: newNodeId,
            animated: true,
        };

        const updatedNodes = [...nodes, newNode];
        const updatedEdges = [...edges, newEdge];

        const {nodes: layoutedNodes, edges: layoutedEdges} = getLayoutedElements(
            updatedNodes,
            updatedEdges
        );

        const fixedNodes = layoutedNodes.map((n) => ({...n, draggable: false}));

        setNodes(fixedNodes);
        setEdges(layoutedEdges);
    };

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    const onAdd = useCallback(() => {
        const newNodeId = (nodes.length + 1).toString();

        const newNode = {
            id: newNodeId,
            data: {label: `Node ${newNodeId}`},
            position: { x: 0, y: 0 },
        };

        const updatedNodes = [...nodes, newNode];
        const updatedEdges = [...edges];

        // Run auto-layout
        const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
            updatedNodes,
            updatedEdges
        );

        // Apply layouted nodes and edges
        setNodes(layoutedNodes.map((n) => ({ ...n, draggable: false })));
        setEdges(layoutedEdges);
    }, [nodes, edges, setNodes, setEdges]);

    // for background color setting
    const styles = {
        background: backgroundColor ?? 'yellow',
        width: '100%'
    };

    // expose addNode() to parent
    useImperativeHandle(ref, () => ({
        addNode() {
            onAdd();
        }
    }));

    return (
        <ReactFlowProvider>
            <ReactFlow
                style={styles}
                nodes={nodes}
                edges={edges}
                edgeTypes={CustomEdge}
                onConnect={onConnect} // should be automatically connected
                onInit={setRfInstance}
                onNodeClick={onNodeClick}
                fitViewOptions={{ padding: 2 }}>
                <Background />
            </ReactFlow>
        </ReactFlowProvider>
    );
});

// Named export
export default Canvas;