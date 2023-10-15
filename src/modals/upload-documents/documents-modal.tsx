import React from 'react'
import { Box, Button, FileButton, Input, Modal } from '@mantine/core';
import "./styles.css";
import { useDisclosure } from '@mantine/hooks';
import { UploadButton } from "./../../Buttons/upload";
import { IconCloudUpload } from "@tabler/icons-react";
import { FileInfo } from "./../../files"


function DocumentsModal(props) {
    const { onCancel, onUpload } = props;
    const [opened, { open, close }] = useDisclosure(true);
    return (
        <><Modal opened={opened} onClose={close} size={'lg'} title="Upload Documents" className='hp-modal'>
            <Box component="form" mx="auto" style={{ paddingTop: 15 }}>
                <UploadButton title="Profile Photo" handleOnClick={(e) => {
                    e.preventDefault();
                    alert("ds")
                }} />
                <div className='documents-upload'>

                    <Input placeholder="Document Name" className='input' />
                    <FileButton onChange={() => alert()} accept="image/png,image/jpeg">
                        {(props) => <Button {...props} leftIcon={<IconCloudUpload />} >Select Document</Button>}
                    </FileButton>

                </div>
                <div className='selectedFileContainer'>
                    <div className='files'>
                        <Input placeholder="Document Name" value={'passport'} className='input' />
                        &nbsp;&nbsp;   <FileInfo fileName="Passport.pdf" fileSize="18.5 KB" />
                    </div>
                    <div className='files'>
                        <Input placeholder="Document Name" value={'passport'} className='input' />
                        &nbsp;&nbsp;   <FileInfo fileName="Passport.pdf" fileSize="18.5 KB" />
                    </div>
                </div>
                <div className='fileUploadModalfooter'>
                    <Button onClick={onUpload}>Upload</Button>&nbsp;
                    <Button onCancel={onCancel}>Cancel</Button>
                </div>

            </Box>
        </Modal>
            <Button size={'size' || 'lg'} className="hpTabActionButton" onClick={open} type='hPprimary'  >{'buttonTitle'}</Button>

        </>
    )
}

export default DocumentsModal