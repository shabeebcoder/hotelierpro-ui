import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Grid, Box, Input, TextInput } from '@mantine/core';
import "./styles.css";
import { AddNewService, AddCategory, AddRoomType, AddRooms, AddNewGuest, ServiceCategory } from "./testForm"
import { Button } from "../Buttons"
import { useForm } from '@mantine/form';

function AddRoomModal(props: any) {
    const [opened, { open, close }] = useDisclosure(true);
    const { size, title, Form, type, handleSubmit, children, buttonTitle, formName } = props;

    const form = useForm({
        initialValues: {
            roomTypeName: '',
            maxPerson: '',
            regularPrice: '',
            singlePrice: '',
        }
    })

    const onSubmitForm = (data) => {
        alert(JSON.stringify(data))
    }


    return (
        <>

            <Modal opened={opened} onClose={close} size={size || 'md'} title={title} className='hp-modal'>
                <Box className='formContainer' component="form" mx="auto">
                    <form id="addRoom" onSubmit={form.onSubmit(onSubmitForm)}>


                        <Grid className='form-item' >
                            <Grid.Col span={5}>
                                <label>Name</label>
                            </Grid.Col>
                            <Grid.Col span={7}>
                                <Input.Wrapper size='sm' >
                                    <TextInput {...form.getInputProps("roomTypeName")} />
                                </Input.Wrapper>

                            </Grid.Col>
                            <Grid.Col span={5}>
                                <label>Max Persons</label>
                            </Grid.Col>
                            <Grid.Col span={7}>
                                <Input.Wrapper size='sm' >
                                    <TextInput {...form.getInputProps("maxPerson")} className='number' />
                                </Input.Wrapper>

                            </Grid.Col>
                            <Grid.Col span={5}>
                                <label>Price (Regular)</label>
                            </Grid.Col>
                            <Grid.Col span={7}>
                                <Input.Wrapper size='sm' >
                                    <TextInput {...form.getInputProps("regularPrice")} className='number' />
                                </Input.Wrapper>

                            </Grid.Col>
                            <Grid.Col span={5}>
                                <label>Price (Single)</label>
                            </Grid.Col>
                            <Grid.Col span={7}>
                                <Input.Wrapper size='sm' >
                                    <TextInput {...form.getInputProps("singlePrice")} className='number' />
                                </Input.Wrapper>

                            </Grid.Col>



                            <Grid.Col span={7}> <div>
                                <Button icon={false} form="addRoom" type='primary' htmlType='submit' >Add</Button>&nbsp;
                                <Button icon={false} onClick={close} >Cancel</Button>
                            </div>
                            </Grid.Col>

                        </Grid>
                    </form>

                </Box>

            </Modal >


            <Button size={size || 'lg'} className="hpTabActionButton" onClick={open} type='hPprimary'  >{buttonTitle}</Button>

        </>
    )
}

export default AddRoomModal