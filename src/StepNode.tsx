import {Handle, Position} from "@xyflow/react";
import {Card} from "antd";
import Meta from "antd/es/card/Meta";
import {EllipsisOutlined, SettingOutlined, EditOutlined} from '@ant-design/icons';

const actions: React.ReactNode[] = [
    <EditOutlined key="edit" text="Add child node" />,
    <SettingOutlined key="setting" />,
];

function StepNode(props) {
    return (
        <div className="step-node">
            {/* TODO: jiamei check if we want to have card loading function... depends on the existing setup */}
            <Card style={{ width: 172 }} size={"small"} actions={actions}>
                <Meta description="www.instagram.com" />
            </Card>
            {/*<Card actions={actions} style={{ width: 200 }} size={"small"}>*/}
            {/*    <Card.Meta*/}
            {/*        title="Card title"*/}
            {/*        description={*/}
            {/*            <>*/}
            {/*                <p>This is the description</p>*/}
            {/*            </>*/}
            {/*        }*/}
            {/*    />*/}
            {/*</Card>*/}
            <Handle type="target" position={Position.Top} />
            <Handle type="source" position={Position.Bottom} id="a" />
            <Handle type="source" position={Position.Bottom} id="b" />
        </div>
        // <>
        //     <Card
        //         title="Card"
        //         size="small"
        //         actions={[
        //             <SettingOutlined key="setting" />,
        //             <EditOutlined key="edit" />,
        //         ]}
        //     >
        //     </Card>
        // </>
    );
}

export default StepNode;