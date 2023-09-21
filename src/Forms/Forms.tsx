import React, { useState, useRef } from "react"

import { Form, Input, InputNumber, message, Space, } from 'antd';
import { NumberInput, Group, ActionIcon, NumberInputHandlers, rem, Textarea, Button, Grid } from '@mantine/core';
import "./styles.css"
import { TextInput, Select } from '@mantine/core';
import { IconPlus, IconCalendar, IconChevronDown } from "@tabler/icons-react"
import TextArea from "antd/es/input/TextArea";
import { DateInput } from '@mantine/dates';
import { useForm } from '@mantine/form';



const BookingForm = () => {
    // const [form] = Form.useForm();
    const [value, setValue] = useState<number | ''>(0);
    const handlers = useRef<NumberInputHandlers>();
    const form = useForm({
        initialValues: {
            firstName: '',
            termsOfService: false,
        },
        validate: {
            firstName: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
        },
    });

    const onSubmitForm = (formData) => {
        alert()
        // formData.preventDefault()
        console.log("formData=====>", formData)
    }


    return (
        <div className="bookFormContainer">
            <form onSubmit={form.onSubmit(onSubmitForm)}>
                <Grid >
                    <Grid.Col span={4}>
                        <DateInput
                            {...form.getInputProps('checkInDate')}
                            label="Check in Date"
                            placeholder="Check in Date"
                            maw={400}
                            mx="auto"
                            className="icon"
                            withAsterisk
                            icon={<IconCalendar />}
                        />

                    </Grid.Col>
                    <Grid.Col span={4}>
                        <TextInput
                            placeholder="Duration"
                            label="Duration"
                            // withAsterisk
                            {...form.getInputProps('duration')}
                        />
                    </Grid.Col>
                    <Grid.Col span={4}>

                        <DateInput
                            label="Check out Date"
                            placeholder="Check out Date"
                            maw={400}
                            mx="auto"
                            className="icon"
                            // withAsterisk
                            icon={<IconCalendar />}
                            {...form.getInputProps('checkOutDate')}
                        />

                    </Grid.Col>
                </Grid>
                <Grid className="row" style={{ marginTop: 20 }}>
                    <Grid.Col span={4}>
                        <Select
                            label="Room Type"
                            placeholder="Room Type"
                            searchable
                            //   onSearchChange={onSearchChange}
                            //   searchValue={searchValue}
                            nothingFound="No options"
                            data={['Delux', 'Single', 'Suite', 'Double']}
                            {...form.getInputProps('roomType')}
                        />

                    </Grid.Col>
                    <Grid.Col span={4}>
                        <Select
                            label="Status"
                            placeholder="status"
                            searchable
                            //   onSearchChange={onSearchChange}
                            //   searchValue={searchValue}
                            nothingFound="No options"
                            data={['New Booking', 'Cancelled', 'Check-in', 'Check-out']}
                            {...form.getInputProps('status')}
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
                                    {...form.getInputProps('adult')}
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
                                    {...form.getInputProps('child')}
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
                    <Grid.Col span={4}  >

                        <TextInput
                            placeholder="First Name"
                            label="First Name"
                            // withAsterisk
                            {...form.getInputProps('firstName')}
                        />

                    </Grid.Col>
                    <Grid.Col span={4}  >

                        <TextInput
                            placeholder="Last Name"
                            label="Last Name"
                            // withAsterisk
                            {...form.getInputProps('lastName')}

                        />

                    </Grid.Col>
                    <Grid.Col span={4} >

                        <TextInput
                            placeholder="E-mail"
                            label="E-mail"
                            // withAsterisk
                            {...form.getInputProps('email')}
                        />

                    </Grid.Col>


                </Grid>
                <Grid className="guestDetails">
                    <Grid.Col span={4}>

                        <TextInput
                            placeholder="Price"
                            label="Price"
                            // withAsterisk
                            {...form.getInputProps('price')}
                        />
                    </Grid.Col>
                    <Grid.Col span={4}>

                        <TextInput
                            placeholder="Discount"
                            label="Discount"
                            {...form.getInputProps('discount')}

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
                            {...form.getInputProps('notes')}
                            style={{ width: '100%', maxWidth: '100%', backgroundColor: 'rgba(144, 203, 203, 0.12)', borderRadius: 0, border: 'none', }}
                        />
                    </Grid.Col>
                </Grid>
                <Grid className="footerActions">
                    <Grid.Col span={6} className="save">
                        <Button type="submit">save</Button>&nbsp;
                        <Button className="outline">cancel</Button>
                    </Grid.Col>
                    <Grid.Col span={6} className="uploadDocuments">
                        <Button className="outline">Upload documents</Button>
                    </Grid.Col>
                </Grid>
            </form>
        </div>
    );
};

export default BookingForm;