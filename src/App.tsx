import React, {useRef} from 'react';
import './index.css';
import type {ThoughtChainProps} from '@ant-design/x';
import {ThoughtChain} from '@ant-design/x';

import {Button, Card, Typography} from 'antd';
import Canvas, {type CanvasHandle} from "./Canvas.tsx";

const { Paragraph } = Typography;

const LifeCycleOverview = () => {
    const canvasRef = useRef<CanvasHandle>(null);

    const items: ThoughtChainProps['items'] = [
        {
            title: 'Team created.',
            description: 'description to be added'
        },
        {
            title: 'Current period starts.',
            description: 'description to be added',
            // icon: <CheckCircleOutlined />, TODO: jiamei ask if we want to have customisable icons
            extra: <Button block>Add step</Button>,
            content: (
                <Typography>
                    <Paragraph>
                        TODO: add canvas component here and styling here
                    </Paragraph>
                </Typography>
            )
        },
        {
            title: 'Current period ends.',
            description: 'description to be added',
            extra:  <Button block onClick={() => canvasRef.current?.addNode()}>Add step</Button>,
            content: (
                <div className={"wrapper"}>
                    <Canvas ref={canvasRef} backgroundColor={'lightyellow'} />
                </div>
            )
        },
        {
            title: 'Team is closed. Retention starts.',
            description: 'description to be added',
            extra: <Button block>Add step</Button>,
            content: (
                <Typography>
                    <Paragraph>
                        TODO: add canvas component here and styling here
                    </Paragraph>
                </Typography>
            ),
        },
        {
            title: 'Team destroyed.',
            description: 'description to be added'
        }
    ];

    return (
        // width is the width of the whole view
        <Card style={{width: 1000}}>
            <ThoughtChain items={items} />
        </Card>
    );
}

export default LifeCycleOverview;