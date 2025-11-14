// autoLayout.ts
import dagre from '@dagrejs/dagre';
import type {Edge, Node} from "@xyflow/react";

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 160;
const nodeHeight = 80;

export const getLayoutedElements = (nodes: Node[], edges: Edge[]) => {
    dagreGraph.setGraph({ rankdir: 'TB' }); // vertical layout by default

    nodes.forEach((node) => {
        dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
    });

    edges.forEach((edge) => {
        dagreGraph.setEdge(edge.source, edge.target);
    });
    
    dagre.layout(dagreGraph, {disableOptimalOrderHeuristic: true}); // so the order of the nodes is not changed

    const layoutedNodes = nodes.map((node) => {
        const nodeWithPosition = dagreGraph.node(node.id);
        node.position = {
            x: nodeWithPosition.x - nodeWidth / 2 + 20,
            y: nodeWithPosition.y - nodeHeight / 2 + 20,
        };
        return node;
    });

    return { nodes: layoutedNodes, edges };
};