import {BaseEdge, EdgeLabelRenderer, getBezierPath} from '@xyflow/react';
import {ClockCircleOutlined} from '@ant-design/icons';

/**
 * Custom edge with icon in the line
 * @see {@link https://reactflow.dev/learn/customization/custom-edges#flow-with-a-custom-edge}
 */
function CustomEdgeWithIcon({
                                id,
                                sourceX,
                                sourceY,
                                targetX,
                                targetY,
                                sourcePosition,
                                targetPosition,
                                style = {},
                                markerEnd,
                                data
                            }) {
    // Get the path for the edge
    const [edgePath, labelX, labelY] = getBezierPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
        sourcePosition,
        targetPosition
    });


    return (
        <>
            {/* TODO: jiamei check how we can have the arrowEnd here in the MarkerEnd */}
            <BaseEdge id={id} path={edgePath} />
            {/* Render the label with icon */}
            <EdgeLabelRenderer>
                <div
                    style={{
                        position: 'absolute',
                        transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                        pointerEvents: 'all',
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '4px',
                        alignItems: 'center',
                        background: 'white'
                    }}
                    className="nodrag nopan"
                >
                    <ClockCircleOutlined style={{color: '#007bff'}} />
                    {/* TODO: jiamei ask if we want to show the days after in the connector line */}
                    {data?.label}
                </div>
            </EdgeLabelRenderer>
        </>
    );
}

export default CustomEdgeWithIcon;