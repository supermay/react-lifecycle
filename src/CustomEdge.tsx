import { BaseEdge, getBezierPath } from '@xyflow/react';
import { HomeOutlined } from '@ant-design/icons';

/**
 * custom edge with icon in the line
 * @see {@link https://reactflow.dev/learn/customization/custom-edges#flow-with-a-custom-edge}
 */
function CustomEdge({ id, sourceX, sourceY, targetX, targetY }) {
    const [edgePath] = getBezierPath({ sourceX, sourceY, targetX, targetY });

    return (
        <>
            <BaseEdge id={id} path={edgePath} />
            <g transform={`translate(${(sourceX + targetX) / 2}, ${(sourceY + targetY) / 2})`}>
                <HomeOutlined style={{ fontSize: '16px', color: 'red' }} />
            </g>
        </>
    );
}

export default CustomEdge;