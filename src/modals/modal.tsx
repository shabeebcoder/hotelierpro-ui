import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Grid, Box, Checkbox, Group, NumberInput } from '@mantine/core';
import "./styles.css";
import TestForm, { AddNewService, AddCategory, AddRoomType, AddRooms, AddNewGuest, ServiceCategory } from "./testForm"
import AddServiceForm from "./../Forms/services/addservice";
import { Button } from "./../Buttons"


function Modals(props: any) {
    const [opened, { open, close }] = useDisclosure(false);
    const { size, title, Form, type, handleSubmit, children, buttonTitle, formName } = props;


    const FormWrapper = ({ children }) => {
        return <div className='formWrapper'>
            {children}
        </div>
    }

    const getForm = () => {
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
            return <AddNewGuest />
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
            {/* {'test===>' + tests} */}
            <Modal opened={opened} onClose={close} size={size || 'md'} title={title} className='hp-modal'>
                <Box component="form" mx="auto">
                    <FormWrapper>
                        {getForm()}
                        <Grid>

                            <Grid.Col span={7}> <div>
                                <Button type='primary'>Add</Button>&nbsp;
                                <Button htmlType='submit'>Cancel</Button>
                            </div></Grid.Col>
                        </Grid>
                    </FormWrapper>
                </Box>
            </Modal >

            {/* <Button onClick={open}>Open modal</Button> */}
            <Button className="hpTabActionButton" onClick={open} type='hPprimary'  >{buttonTitle}</Button>

        </>
    );
}


export default Modals