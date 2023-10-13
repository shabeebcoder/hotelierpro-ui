import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Grid, Box, } from '@mantine/core';
import "./styles.css";
import { AddNewService, AddCategory, AddRoomType, AddRooms, AddNewGuest, ServiceCategory } from "./testForm"
import { Button } from "./../Buttons"
import { useForm } from '@mantine/form';


function Modals(props: any) {
    const [opened, { open, close }] = useDisclosure(false);
    const { size, title, Form, type, handleSubmit, children, buttonTitle, formName } = props;

    const form = useForm({
        initialValues: {
            type: ''
        }
    })


    const FormWrapper = ({ children }) => {
        return <div className='formWrapper'>
            {children}
        </div>
    }



    const getForm = (props) => {


        if (formName == "addServiceCategory") {

            return <ServiceCategory handleSubmit={handleSubmit} />
        }
        else if (formName == "addRooms") {
            return <AddRooms />
        }
        else if (formName == "addRoomType") {
            return <AddRoomType />
        }
        else if (formName == "addNewGuest") {
            return <AddNewGuest handleSubmit={handleSubmit} handleCancel={close} {...props} />
        } else if (formName == "addCompany") {
            return "Pending"
        }
        else if (formName == "addNewService") {
            return <AddNewService />
        }
        return "Form Name Required"
    }



    return (
        <>

            <Modal opened={opened} onClose={close} size={size || 'md'} title={title} className='hp-modal'>
                <Box component="form" mx="auto">

                    <FormWrapper>
                        {getForm({ form })}
                        {/* <Grid>
                                <Grid.Col span={7}> <div>
                                    <Button type='primary' htmlType='submit' >Add</Button>&nbsp;
                                    <Button >Cancel</Button>
                                </div>
                                </Grid.Col>
                            </Grid> */}

                    </FormWrapper>

                </Box>
            </Modal >


            <Button size={size || 'lg'} className="hpTabActionButton" onClick={open} type='hPprimary'  >{buttonTitle}</Button>

        </>
    );
}


export default Modals