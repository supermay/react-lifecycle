import {Handle, Position} from "@xyflow/react";
import {RedoOutlined, CopyOutlined} from '@ant-design/icons';
import {Actions} from "@ant-design/x";
import {Card} from "antd";
import Meta from "antd/es/card/Meta";

const actionItems = [
    {
        key: 'retry',
        icon: <RedoOutlined />,
        label: 'Retry',
    },
    {
        key: 'copy',
        icon: <CopyOutlined />,
        label: 'Copy',
    },
];

function StepNode(props) {
    console.log('props: ', props);
    return (
        <div>
            {/* fix should be connectable or not */}
            <Handle
                type="target"
                position={Position.Top}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={false}
            />
            <Card>
                <Meta description={props.data.label} />
                {/* this should be card with two actions */}
                {/*<Actions items={actionItems} onClick={console.log} />*/}
            </Card>
            <Handle
                type="source"
                position={Position.Bottom}
            />
        </div>
    );
}

export default StepNode;