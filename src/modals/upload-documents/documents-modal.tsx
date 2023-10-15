import React from 'react'
import { Box, Button, Modal } from '@mantine/core';
import "./styles.css";
import { useDisclosure } from '@mantine/hooks';
import { UploadButton } from "./../../Buttons/upload";


function DocumentsModal() {
    const [opened, { open, close }] = useDisclosure(false);
    return (
        <><Modal opened={opened} onClose={close} size={'lg'} title="Upload Documents" className='hp-modal'>
            <Box component="form" mx="auto">
                <UploadButton title="Profile Photo" handleOnClick={(e) => {
                    e.preventDefault();
                    alert("ds")
                }} />
            </Box>
        </Modal>
            <Button size={'size' || 'lg'} className="hpTabActionButton" onClick={open} type='hPprimary'  >{'buttonTitle'}</Button>

        </>
    )
}

export default DocumentsModal