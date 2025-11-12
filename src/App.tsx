import React from 'react';
import './index.css';
import { ThoughtChain } from '@ant-design/x';
import type { ThoughtChainProps, ThoughtChainItem } from '@ant-design/x';

import { CheckCircleOutlined, MoreOutlined } from '@ant-design/icons';

import { Card, Typography, Button } from 'antd';

const { Paragraph, Text } = Typography;

const customizationProps0: ThoughtChainItem = {
    title: 'Team starts. Current period starts.',
    description: 'description to be added',
    // icon: <CheckCircleOutlined />, TODO: jiamei ask if we want to have customisable icons
    extra: <Button block>Add step</Button>,
    content: (
        <Typography>
            <Paragraph>
                TODO: add canvas component here and styling here
            </Paragraph>
        </Typography>
    ),
};

const customizationProps1: ThoughtChainItem = {
    title: 'Current period ends.',
    description: 'description to be added',
    extra: <Button block>Add step</Button>,
    content: (
        <Typography>
            <Paragraph>
                TODO: add canvas component here and styling here
            </Paragraph>
        </Typography>
    ),
};

const customizationProps2: ThoughtChainItem = {
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
};

const customizationProps3: ThoughtChainItem = {
    title: 'Team is destroyed.',
    description: 'description to be added'
};

const items: ThoughtChainProps['items'] = [
    {
        ...customizationProps0
    },
    {
        ...customizationProps1
    },
    {
        ...customizationProps2
    },
    {
        ...customizationProps3
    }
];

export default () => (
    // width is the width of the whole view
    <Card style={{ width: 1000 }}>
        <ThoughtChain items={items} />
    </Card>
);