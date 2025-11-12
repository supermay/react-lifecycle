import React, {useCallback, useEffect, useState} from 'react';
import {
    addEdge,
    Background, type Edge, type NodeMouseHandler,
    Panel,
    ReactFlow,
    ReactFlowProvider,
    useEdgesState,
    useNodesState,
    useReactFlow,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import {getLayoutedElements} from "./autoLayout.ts";

const flowKey = 'example-flow';

const getNodeId = () => `randomnode_${+new Date()}`;

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
];

const SaveRestore = () => {
    // const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    // const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [nodes, setNodes] = useState<Node[]>([]);
    const [edges, setEdges] = useState<Edge[]>([]);
    const [rfInstance, setRfInstance] = useState(null);
    const { setViewport } = useReactFlow(); // TODO: check the viewPort use case

    useEffect(() => {
        const {nodes: layoutedNodes, edges: layoutedEdges} = getLayoutedElements(
            initialNodes,
            initialEdges,
            'TB'
        );

        const fixedNodes = layoutedNodes.map((node) => ({...node, draggable: false}));
        setNodes(fixedNodes);
        setEdges(layoutedEdges);
    }, []);


    // Handle node click
    const onNodeClick: NodeMouseHandler = (event, node) => {
        const newNodeId = (nodes.length + 1).toString();

        // this should open a popup
        const newNode: Node = {
            id: newNodeId,
            data: {label: `Node ${newNodeId}`},
            position: {x: 0, y: 0},
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
            updatedEdges,
            'TB'
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
        // relative position
        const newNode = {
            id: getNodeId(),
            data: { label: 'Added node' },
            position: { x: 0, y: 0 }
        };
        // this should trigger autoLayout
        setNodes((nds) => nds.concat(newNode));
    }, [setNodes]);

    // for background color setting
    const styles = {
        background: 'yellow',
        width: '100%'
    };

    return (
        <ReactFlow
            style={styles}
            nodes={nodes}
            edges={edges}
            onConnect={onConnect} // should be automatically connected
            onInit={setRfInstance}
            onNodeClick={onNodeClick}
            // nodesDraggable={false}
            // fitView TODO: jiamei check if we need this option or better not?
            fitViewOptions={{ padding: 2 }}
        >
            <Background />
            <Panel position="top-right">
                <button className="xy-theme__button" onClick={onAdd}>
                    add parent node
                </button>
            </Panel>
        </ReactFlow>
    );
};

export default () => (
    <ReactFlowProvider>
        <SaveRestore />
    </ReactFlowProvider>
);