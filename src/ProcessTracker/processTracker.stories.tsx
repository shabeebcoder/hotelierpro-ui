import React from "react";
import ProcessTracker, { StepTrackerContnet } from "./processTracker";
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';

export default {
    title: "Process Tracker"
}


const description = 'This is a description.';
const items = [{
    title: 'Finished',
    description,
},
{
    title: 'In Progress',
    description,
    subTitle: 'Left 00:00:08',
},
{
    title: 'Waiting',
    description,
},
]

const itemsWithIcon = [
    {
        title: 'Login',
        status: 'finish',
        icon: <UserOutlined />,
    },
    {
        title: 'Verification',
        status: 'finish',
        icon: <SolutionOutlined />,
    },
    {
        title: 'Pay',
        status: 'process',
        icon: <LoadingOutlined />,
    },
    {
        title: 'Done',
        status: 'wait',
        icon: <SmileOutlined />,
    },
]

export const Horizontal = (args) => <ProcessTracker  {...args} />

Horizontal.args = {
    current: 1,
    items
}

export const Small = (args) => <ProcessTracker  {...args} />

Small.args = {
    current: 1,
    items,
    size: "small"
}

export const WithIcon = (args) => <ProcessTracker  {...args} />
WithIcon.args = {
    current: 1,
    items: itemsWithIcon,
    size: "small"
}

export const Vertical = (args) => <ProcessTracker  {...args} />
Vertical.args = {
    current: 1,
    items,
    direction: "vertical"
}


export const WithContent = (args) => <StepTrackerContnet  {...args} />
