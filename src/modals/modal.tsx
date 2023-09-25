import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput, Box, Checkbox, Group, NumberInput } from '@mantine/core';
import "./styles.css";
import AddServiceForm from "./../Forms/services/addservice"

function Modals(props) {
    const [opened, { open, close }] = useDisclosure(false);
    const { size, title, Form, type } = props;


    const FormWrapper = ({ children }) => {
        return <div className='formWrapper'>
            {children}
        </div>
    }

    return (
        <>
            <Modal opened={opened} onClose={close} size={size || 'md'} title={title} className='hp-modal'>
                <Box component="form" mx="auto">
                    <FormWrapper>
                        <Form />
                    </FormWrapper>
                </Box>
            </Modal >

            <Button onClick={open}>Open modal</Button>
        </>
    );
}


export default Modals