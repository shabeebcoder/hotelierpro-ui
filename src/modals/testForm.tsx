import React from 'react';
import { Checkbox, Form } from 'antd';
import { Input, TextInput, Textarea, Grid, Select, Radio, Group } from '@mantine/core';
import { Button } from "./../Buttons"
import { useForm } from '@mantine/form';

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

// const form = useForm({
//     initialValues: {}
// })

const AddNewGuest = () => {

    const [guestType, setGuestType] = React.useState('person');

    const form = useForm({
        initialValues: {
            guestType: 'person',
            companyId: '',
            bank: '',
            accountNumber: '',
            email: '',
            contactNumber: '',
            address: '',
            contactPerson: '',
            notes: ''
        }
    })


    return (<>
        <form onSubmit={(e) => {
            e.preventDefault();
            form.onSubmit((data) => alert(JSON.stringify(data)))(e)
            e.stopPropagation();
        }}>

            <Grid className='form-item'>
                <Grid.Col span={5}>
                    <label>Guest Type</label>
                </Grid.Col>
                <Grid.Col span={7}>
                    <Input.Wrapper size='sm' >
                        <Radio.Group value={guestType} onChange={setGuestType}  {...form.getInputProps('guestType')}>
                            <Group>
                                <Radio label="Person" value="person" />
                                <Radio label="Company" value="company" />
                            </Group>

                        </Radio.Group>
                    </Input.Wrapper>

                </Grid.Col>
                <Grid.Col span={5}>
                    <label>First Name</label>
                </Grid.Col>
                <Grid.Col span={7}>
                    {/* <Input.Wrapper size='sm' > */}
                    <TextInput   {...form.getInputProps('firstName')} />
                    {/* </Input.Wrapper> */}

                </Grid.Col>
                <Grid.Col span={5}>
                    <label>Middle Name</label>
                </Grid.Col>
                <Grid.Col span={7}>
                    {/* <Input.Wrapper size='sm' > */}
                    <TextInput   {...form.getInputProps('middleName')} />
                    {/* </Input.Wrapper> */}

                </Grid.Col>
                <Grid.Col span={5}>
                    <label>Last Name</label>
                </Grid.Col>
                <Grid.Col span={7}>
                    {/* <Input.Wrapper size='sm' > */}
                    <TextInput   {...form.getInputProps('lastName')} />
                    {/* </Input.Wrapper> */}

                </Grid.Col>

                {
                    form.values.guestType === "company" && (<>
                        <Grid.Col span={5}>
                            <label>Company ID</label>
                        </Grid.Col>
                        <Grid.Col span={7}>
                            {/* <Input.Wrapper size='sm' > */}
                            <TextInput   {...form.getInputProps('companyId')} />
                            {/* </Input.Wrapper> */}

                        </Grid.Col>

                        <Grid.Col span={5}>
                            <label>Bank</label>

                        </Grid.Col>
                        <Grid.Col span={7}>
                            <Input.Wrapper size='sm' >
                                <Input  {...form.getInputProps('bank')} />
                            </Input.Wrapper>
                        </Grid.Col>
                        <Grid.Col span={5}>
                            <label>Account No.</label>

                        </Grid.Col>
                        <Grid.Col span={7}>
                            <Input.Wrapper size='sm' >
                                <Input {...form.getInputProps('accountNumber')} />
                            </Input.Wrapper>

                        </Grid.Col>
                    </>)
                }

                <Grid.Col span={5}>
                    <label>Email</label>

                </Grid.Col>
                <Grid.Col span={7}>
                    <Input.Wrapper size='sm' >
                        <Input {...form.getInputProps('email')} />
                    </Input.Wrapper>
                </Grid.Col>
                <Grid.Col span={5}>
                    <label>Phone No</label>

                </Grid.Col>
                <Grid.Col span={7}>
                    <Input.Wrapper size='sm' >
                        <Input {...form.getInputProps('contactNumber')} />
                    </Input.Wrapper>
                </Grid.Col>
                <Grid.Col span={5}>
                    <label>Address</label>

                </Grid.Col>
                <Grid.Col span={7}>
                    <Input.Wrapper size='sm' >
                        <Input {...form.getInputProps('address')} />
                    </Input.Wrapper>
                </Grid.Col>
                <Grid.Col span={5}>
                    <label>Contact Person</label>

                </Grid.Col>
                <Grid.Col span={7}>
                    <Input.Wrapper size='sm' >
                        <Input {...form.getInputProps('contactPerson')} />
                    </Input.Wrapper>
                </Grid.Col>
                <Grid.Col span={5}>
                    <label>Notes</label>

                </Grid.Col>
                <Grid.Col span={7}>
                    <Textarea
                        {...form.getInputProps('notes')}
                        rows={5}
                    />
                </Grid.Col>
                <Grid.Col span={5}></Grid.Col>
                <Grid.Col span={7}> <div>
                    <Button type='primary' htmlType='submit' >Add</Button>&nbsp;
                    <Button >Cancel</Button>
                </div>
                </Grid.Col>
            </Grid>
        </form >

    </>
    );
}

const AddNewService = (props) => (<>
    <Grid className='form-item' >
        <Grid.Col span={5}>
            <label>Service Name</label>
        </Grid.Col>
        <Grid.Col span={7}>
            <Input.Wrapper size='sm' >
                <Input />
            </Input.Wrapper>

        </Grid.Col>

        <Grid.Col span={5}>
            <label>Price</label>

        </Grid.Col>
        <Grid.Col span={7}>
            <Input.Wrapper size='sm' >
                <Input />
            </Input.Wrapper>
        </Grid.Col>
        <Grid.Col span={5}>
            <label>Service Category</label>

        </Grid.Col>
        <Grid.Col span={7}>
            <div>

                <Select

                    data={['React', 'Angular', 'Vue', 'Svelte']}
                />
            </div>
        </Grid.Col>
        <Grid.Col span={5}>
            <div>
                <Button type='primary'>Add</Button>&nbsp;
                <Button htmlType='submit'>Cancel</Button>
            </div>
        </Grid.Col>

    </Grid>

</>)

const AddCategory = (props) => (<>
    <Grid className='form-item' >
        <Grid.Col span={5}>
            <label>Category Name</label>
        </Grid.Col>
        <Grid.Col span={7}>
            <Input.Wrapper size='sm' >
                <Input />
            </Input.Wrapper>

        </Grid.Col>


        {/* <Grid.Col span={5}>
            <div>
                <Button type='primary'>Add</Button>&nbsp;
                <Button htmlType='submit'>Cancel</Button>
            </div>
        </Grid.Col> */}

    </Grid>

</>)
const AddRoomType = (props) => (<>
    <Grid className='form-item' >
        <Grid.Col span={5}>
            <label>Name</label>
        </Grid.Col>
        <Grid.Col span={7}>
            <Input.Wrapper size='sm' >
                <Input />
            </Input.Wrapper>

        </Grid.Col>
        <Grid.Col span={5}>
            <label>Max Persons</label>
        </Grid.Col>
        <Grid.Col span={7}>
            <Input.Wrapper size='sm' >
                <Input />
            </Input.Wrapper>

        </Grid.Col>
        <Grid.Col span={5}>
            <label>Price (Regular)</label>
        </Grid.Col>
        <Grid.Col span={7}>
            <Input.Wrapper size='sm' >
                <Input />
            </Input.Wrapper>

        </Grid.Col>
        <Grid.Col span={5}>
            <label>Price (Single)</label>
        </Grid.Col>
        <Grid.Col span={7}>
            <Input.Wrapper size='sm' >
                <Input />
            </Input.Wrapper>

        </Grid.Col>


        <Grid.Col span={5}>
            <div>
                <Button type='primary'>Add</Button>&nbsp;
                <Button htmlType='submit'>Cancel</Button>
            </div>
        </Grid.Col>

    </Grid>

</>);

const AddRooms = (props) => (<>
    <Grid className='form-item' >
        <Grid.Col span={5}>
            <label>Room Type</label>
        </Grid.Col>
        <Grid.Col span={7}>
            <Input.Wrapper size='sm' >
                <Input />
            </Input.Wrapper>

        </Grid.Col>
        <Grid.Col span={5}>
            <label>Number of rooms</label>
        </Grid.Col>
        <Grid.Col span={7}>
            <Input.Wrapper size='sm' >
                <Input />
            </Input.Wrapper>

        </Grid.Col>



        {/* <Grid.Col span={5}>
            <div>
                <Button type='primary'>Add</Button>&nbsp;
                <Button htmlType='submit'>Cancel</Button>
            </div>
        </Grid.Col> */}

    </Grid>

</>);

const ServiceCategory = (props) => (<>
    <Grid className='form-item' >
        <Grid.Col span={5}>
            <label>Category Name</label>
        </Grid.Col>
        <Grid.Col span={7}>
            <Input.Wrapper size='sm' >
                <Input />
            </Input.Wrapper>

        </Grid.Col>

        {/* <Grid.Col span={5}>
            <div>
                <Button type='primary' onClick={props.props}>Add</Button>&nbsp;
                <Button htmlType='submit'>Cancel</Button>
            </div>
        </Grid.Col> */}

    </Grid>

</>)

// export default AddNewGuest;
export { AddNewService, AddCategory, AddRoomType, AddRooms, ServiceCategory, AddNewGuest }