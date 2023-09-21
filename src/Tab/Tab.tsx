import React from 'react';
import { Tabs as Tab } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import "./styles.css";
import { Button } from '../Buttons/';
import { useMemo, useState } from 'react';
import { Checkbox, Divider, Tabs as AntdTabs } from 'antd';

type tab = {
    value: string;
    label: string;
    icon?: React.ReactNode;
}
type panels = {
    panel: React.ReactNode;
    tabId: string;
}

interface Props extends ButtonProps {
    tabs: tab[];
    panels: panels[];
    defaultValue: string;
    handleOnClick?: any
    addRooms: string;
}
interface ButtonProps {
    buttonIcon?: any,
    btHandleOnClick: any
    buttonText: string
}

export default function Tabs(props: Props) {
    const { panels = [], tabs = [], defaultValue, handleOnClick, btHandleOnClick, buttonText, buttonIcon, addRooms } = props;



    return (
        <Tab color="green" defaultValue={defaultValue} className='hp-tab' onChange={(value) => alert(JSON.stringify(value))}>
            <Tab.List>
                {
                    tabs.map((row) => <Tab.Tab value={row.value} >{row.label}</Tab.Tab>)
                },
                <Tab.Tab value="account" ml="auto">
                    <Button className="hpTabActionButton" type='hPprimary' buttonIcon={buttonIcon || ''} >{buttonText}</Button>
                </Tab.Tab>
            </Tab.List>
            {
                panels.map(({ tabId, panel }) => <Tab.Panel value={tabId} pt="xs">
                    {panel}
                </Tab.Panel>)
            }
        </Tab >
    );
}



// const CheckboxGroup = Checkbox.Group;

// const operations = <Button>Extra Action</Button>;

// const OperationsSlot: Record<PositionType, React.ReactNode> = {
//     left: <Button className="hpTabActionButton" type='hPprimary'>{'buttonText'}</Button>,

//     right: <ButtonAntd>Right Extra Action</ButtonAntd>,
// };

// const options = ['left', 'right'];

// type PositionType = 'left' | 'right';

// const items: any = new Array(3).fill(null).map((_, i) => {
//     const id = String(i + 1);
//     return {
//         label: `Tab ${id}`,
//         key: id,
//         children: `Content of tab ${id}`,
//         OperationsSlot
//     };
// });

// export default function (props: any) {
//     const [position, setPosition] = useState<PositionType[]>(['left', 'right']);
//     const [isHovered, setIsHovered] = useState(false);
//     const { panels = [], tabs = [], defaultValue, handleOnClick, btHandleOnClick, buttonText, buttonIcon, addRooms, test } = props;

//     // const handleMouseEnter = () => {
//     //     setIsHovered(true);
//     // };

//     // const handleMouseLeave = () => {
//     //     setIsHovered(false);
//     // };


//     // const slot = useMemo(() => {
//     //     if (position.length === 0) return null;

//     //     return position.reduce(
//     //         (acc, direction) => ({ ...acc, [direction]: OperationsSlot[direction] }),
//     //         {},
//     //     );
//     // }, [position]);

//     return (
//         <>


//             <AntdTabs className='hp-tab' tabBarStyle={{ color: '#4D6969' }} tabBarExtraContent={null} items={props.test} />
//         </>
//     );
// };

// export { Tabs }