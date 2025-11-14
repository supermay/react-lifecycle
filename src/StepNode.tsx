import {Handle, Position} from "@xyflow/react";
import {DeleteFilled} from '@ant-design/icons';
import {Button, Card, Row, Space} from "antd";
import Meta from "antd/es/card/Meta";

function StepNode(props) {
    return (
        <div>
            {/* fix should be connectable or not */}
            <Handle type="target" position={Position.Top} isConnectable={false} />
            <Space className="card-container" size="small" direction="vertical">
                <Meta description={props.data.label} />
                {/* this should be card with two actions */}
                <Row className="card-actions" justify="end">
                    <Space size="small">
                        {/* should trigger a popup */}
                        <Button type="default" onClick={() => props.onClick(props)}>Add step</Button>
                        <Button icon={<DeleteFilled />}></Button>
                    </Space>
                </Row>
            </Space>
            <Handle
                type="source"
                position={Position.Bottom}
            />
        </div>
    );
}

export default StepNode;