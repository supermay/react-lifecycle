import {BaseEdge, EdgeLabelRenderer, getBezierPath} from '@xyflow/react';
import {ClockCircleOutlined} from '@ant-design/icons';

/**
 * custom edge with icon in the line
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
            <BaseEdge id={id} path={edgePath}/>
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
                    {/* TODO: ask if we want to show the */}
                    {data?.label}
                </div>
            </EdgeLabelRenderer>
        </>
    );
}

export default CustomEdgeWithIcon;