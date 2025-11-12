import React from 'react';
import './index.css';
import { ThoughtChain } from '@ant-design/x';
import type { ThoughtChainProps, ThoughtChainItem } from '@ant-design/x';

import { CheckCircleOutlined, MoreOutlined } from '@ant-design/icons';

import { Card, Typography, Button } from 'antd';

const { Paragraph, Text } = Typography;

const customizationProps0: ThoughtChainItem = {
    title: 'Thought Chain Item Title',
    description: 'description',
    icon: <CheckCircleOutlined />,
    extra: <Button type="text" icon={<MoreOutlined />} />,
    footer: <Button block>Thought Chain Item Footer</Button>,
    content: (
        <Typography>
            <Paragraph>
                In the process of internal desktop applications development, many different design specs and
                implementations would be involved, which might cause designers and developers difficulties
                and duplication and reduce the efficiency of development.
            </Paragraph>
        </Typography>
    ),
};

const customizationProps1: ThoughtChainItem = {
    title: 'Thought Chain Item Title',
    description: 'description',
    icon: <CheckCircleOutlined />,
    extra: <Button type="text" icon={<MoreOutlined />} />,
    footer: <Button block>Thought Chain Item Footer</Button>,
    content: (
        <Typography>
        </Typography>
    ),
};

const customizationProps2: ThoughtChainItem = {
    title: 'Thought Chain Item Title',
    description: 'description',
    icon: <CheckCircleOutlined />,
    extra: <Button type="text" icon={<MoreOutlined />} />,
    footer: <Button block>Thought Chain Item Footer</Button>,
    content: (
        <Typography>
            <Paragraph>
                In the process of internal desktop applications development, many different design specs and
                implementations would be involved, which might cause designers and developers difficulties
                and duplication and reduce the efficiency of development.
            </Paragraph>
            <Paragraph>
                After massive project practice and summaries, Ant Design, a design language for background
                applications, is refined by Ant UED Team, which aims to{' '}
                <Text strong>
                    uniform the user interface specs for internal background projects, lower the unnecessary
                    cost of design differences and implementation and liberate the resources of design and
                    front-end development
                </Text>
            </Paragraph>
        </Typography>
    ),
};

const items: ThoughtChainProps['items'] = [
    {
        ...customizationProps0,
        status: 'success',
    },
    {
        ...customizationProps1,
        status: 'error',
    },
    {
        ...customizationProps2,
        status: 'pending',
    },
];

export default () => (
    // width is the width of the whole view
    <Card style={{ width: 1000 }}>
        <ThoughtChain items={items} />
    </Card>
);