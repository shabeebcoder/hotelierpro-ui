import React, { useState, useRef } from "react"

import { Form, Input, InputNumber, message, Space, } from 'antd';
import { NumberInput, Group, ActionIcon, NumberInputHandlers, rem, Textarea, Button, Grid } from '@mantine/core';
import "./styles.css"
import { TextInput } from '@mantine/core';
import { IconPlus, IconCalendar } from "@tabler/icons-react"
import TextArea from "antd/es/input/TextArea";


const App: React.FC = () => {
    const [form] = Form.useForm();
    const [value, setValue] = useState<number | ''>(0);
    const handlers = useRef<NumberInputHandlers>();


    return (
        <div className="bookFormContainer">

            <Grid >
                <Grid.Col span={4}>

                    <TextInput
                        className="icon"
                        icon={<IconCalendar />}
                        placeholder="Check in Date"
                        label="Check in Date"
                        withAsterisk
                    />
                </Grid.Col>
                <Grid.Col span={4}>

                    <TextInput
                        placeholder="Duration"
                        label="Duration"
                        withAsterisk
                    />
                </Grid.Col>
                <Grid.Col span={4}>

                    <TextInput
                        placeholder="Check out Date"
                        label="Check out Date"
                        withAsterisk
                    />
                </Grid.Col>
            </Grid>
            <Grid className="row" style={{ marginTop: 20 }}>
                <Grid.Col span={4}>
                    <TextInput
                        placeholder="Room Type"
                        label="Room Type"
                        withAsterisk
                    />

                </Grid.Col>
                <Grid.Col span={4}>
                    <TextInput
                        placeholder="Your name"
                        label="Full name"
                        withAsterisk
                    />
                </Grid.Col>
                <Grid.Col span={4} style={{ display: 'flex' }}>
                    <div>

                        <span className="mantine-InputWrapper-label ">Adult</span>
                        <Group spacing={5}>
                            <ActionIcon size={42} variant="default" onClick={() => handlers.current.decrement()}>
                                –
                            </ActionIcon>

                            <NumberInput
                                hideControls
                                value={value}
                                onChange={(val) => setValue(val)}
                                handlersRef={handlers}
                                max={10}
                                min={0}
                                step={2}
                                styles={{ input: { width: rem(54), textAlign: 'center' } }}
                            />

                            <ActionIcon size={42} variant="default" onClick={() => handlers.current.increment()}>
                                +
                            </ActionIcon>
                        </Group>

                    </div>&nbsp;
                    <div>
                        <span className="mantine-InputWrapper-label ">Child</span>
                        <Group spacing={5}>

                            <ActionIcon size={42} variant="default" onClick={() => handlers.current.decrement()}>
                                –
                            </ActionIcon>

                            <NumberInput
                                hideControls
                                value={value}
                                onChange={(val) => setValue(val)}
                                handlersRef={handlers}
                                max={10}
                                min={0}
                                step={2}

                                styles={{ input: { width: rem(54), textAlign: 'center' } }}
                            />

                            <ActionIcon size={42} variant="default" onClick={() => handlers.current.increment()}>
                                +
                            </ActionIcon>
                        </Group>

                    </div>
                </Grid.Col>


            </Grid>
            <Grid className="row">
                <Grid.Col span={12} >

                    <h4>Guest Details</h4>
                </Grid.Col>
                <Grid.Col span={4} className="guestDetails" >

                    <TextInput
                        placeholder="First Name"
                        label="First Name"
                        withAsterisk
                    />

                </Grid.Col>
                <Grid.Col span={4} className="guestDetails" >

                    <TextInput
                        placeholder="Last Name"
                        label="Last Name"
                        withAsterisk
                    />

                </Grid.Col>
                <Grid.Col span={4} className="guestDetails" >

                    <TextInput
                        placeholder="E-mail"
                        label="E-mail"
                        withAsterisk
                    />

                </Grid.Col>


            </Grid>
            <Grid className="guestDetails">
                <Grid.Col span={4}>

                    <TextInput
                        placeholder="Price"
                        label="Price"
                        withAsterisk
                    />
                </Grid.Col>
                <Grid.Col span={4}>

                    <TextInput
                        placeholder="Discount"
                        label="Discount"

                    />
                </Grid.Col>

                <Grid.Col span={4} className="action">
                    <Button leftIcon={<IconPlus />}>Add Guest</Button>&nbsp;
                    <Button className="outline" leftIcon={<IconPlus />}>New Guest</Button>
                </Grid.Col>
            </Grid>
            <Grid className="" style={{ marginTop: 20 }}>
                <Grid.Col >
                    <span className="mantine-InputWrapper-label" style={{ marginBottom: 10 }}>Notes</span>
                    <TextArea

                        placeholder="Your comment"
                        label="Notes"
                        rows={4}

                        style={{ width: '100%', maxWidth: '100%', backgroundColor: 'rgba(144, 203, 203, 0.12)', borderRadius: 0, border: 'none', }}
                    />
                </Grid.Col>
            </Grid>
            <Grid className="footerActions">
                <Grid.Col span={6} className="save">
                    <Button>save</Button>&nbsp;
                    <Button className="outline">cancel</Button>
                </Grid.Col>
                <Grid.Col span={6} className="uploadDocuments">
                    <Button className="outline">Upload documents</Button>
                </Grid.Col>
            </Grid>
        </div>
    );
};

export default App;