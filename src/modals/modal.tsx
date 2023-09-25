import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput, Box, Checkbox, Group, NumberInput } from '@mantine/core';
import "./styles.css";
import AddServiceForm from "./../Forms/services/addservice"
function Modals() {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} size="500%" title="Add New Guest" className='hp-modal'>
                <Box component="form" mx="auto">
                    <TextInput label="Name" placeholder="Name" withAsterisk />
                    <TextInput
                        label="Your job"
                        placeholder="Your job"
                        withAsterisk
                        mt="md"
                    // {...form.getInputProps('job')}
                    />
                    <TextInput
                        label="Your email"
                        placeholder="Your email"
                        withAsterisk
                        mt="md"
                    // {...form.getInputProps('email')}
                    />
                    <TextInput
                        label="Your favorite color"
                        placeholder="Your favorite color"
                        withAsterisk
                        mt="md"
                    // {...form.getInputProps('favoriteColor')}
                    />
                    <NumberInput
                        label="Your age"
                        placeholder="Your age"
                        withAsterisk
                        mt="md"
                    // {...form.getInputProps('age')}
                    />

                    <Group justify="flex-end" mt="md">
                        <Button type="submit">Submit</Button>
                    </Group>
                </Box>
            </Modal >

            <Button onClick={open}>Open modal</Button>
        </>
    );
}


export default Modals