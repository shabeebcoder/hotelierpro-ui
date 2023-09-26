import React from 'react';
import { Checkbox, Form } from 'antd';
import { Input, TextInput, Textarea, Grid, Select } from '@mantine/core';
import { Button } from "./../Buttons"

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

const AddNewGuest = (props) => (<>
    <Grid className='form-item' >
        <Grid.Col span={5}>
            <label>Company ID</label>
        </Grid.Col>
        <Grid.Col span={7}>
            <Input.Wrapper size='sm' >
                <Input />
            </Input.Wrapper>

        </Grid.Col>

        <Grid.Col span={5}>
            <label>Bank</label>

        </Grid.Col>
        <Grid.Col span={7}>
            <Input.Wrapper size='sm' >
                <Input />
            </Input.Wrapper>
        </Grid.Col>
        <Grid.Col span={5}>
            <label>Account No.</label>

        </Grid.Col>
        <Grid.Col span={7}>
            <Input.Wrapper size='sm' >
                <Input />
            </Input.Wrapper>

        </Grid.Col>
        <Grid.Col span={5}>
            <label>Email</label>

        </Grid.Col>
        <Grid.Col span={7}>
            <Input.Wrapper size='sm' >
                <Input />
            </Input.Wrapper>
        </Grid.Col>
        <Grid.Col span={5}>
            <label>Phone No</label>

        </Grid.Col>
        <Grid.Col span={7}>
            <Input.Wrapper size='sm' >
                <Input />
            </Input.Wrapper>
        </Grid.Col>
        <Grid.Col span={5}>
            <label>Address</label>

        </Grid.Col>
        <Grid.Col span={7}>
            <Input.Wrapper size='sm' >
                <Input />
            </Input.Wrapper>
        </Grid.Col>
        <Grid.Col span={5}>
            <label>Contact Person</label>

        </Grid.Col>
        <Grid.Col span={7}>
            <Input.Wrapper size='sm' >
                <Input />
            </Input.Wrapper>
        </Grid.Col>
        <Grid.Col span={5}>
            <label>Notes</label>

        </Grid.Col>
        <Grid.Col span={7}>
            <Textarea
                rows={5}
            />
        </Grid.Col>
        <Grid.Col span={5}></Grid.Col>
        <Grid.Col span={7}> <div>
            <Button type='primary'>Add</Button>&nbsp;
            <Button htmlType='submit'>Cancel</Button>
        </div></Grid.Col>
    </Grid>
</>
);


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


        <Grid.Col span={5}>
            <div>
                <Button type='primary'>Add</Button>&nbsp;
                <Button htmlType='submit'>Cancel</Button>
            </div>
        </Grid.Col>

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



        <Grid.Col span={5}>
            <div>
                <Button type='primary'>Add</Button>&nbsp;
                <Button htmlType='submit'>Cancel</Button>
            </div>
        </Grid.Col>

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

        <Grid.Col span={5}>
            <div>
                <Button type='primary'>Add</Button>&nbsp;
                <Button htmlType='submit'>Cancel</Button>
            </div>
        </Grid.Col>

    </Grid>

</>)

export default AddNewGuest;
export { AddNewService, AddCategory, AddRoomType, AddRooms, ServiceCategory }