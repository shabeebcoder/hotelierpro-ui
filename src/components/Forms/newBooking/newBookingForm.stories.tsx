import React from 'react';
import NewBookingForm from './newBookingForm';
import { Button } from '../../../elements/Buttons/buttons';
import { PlusCircledIcon } from '@radix-ui/react-icons';
import Drawer from '../../Drawer/drawer';
import { Form } from '../../Forms';

export default { title: 'hotelierPro/Form/NewBookingForm' };

export const NewBookingFormExample = (args) => {

    const [open, setOpen] = React.useState(false)
    const NewGuest = () => {

        return (
            <Drawer

                title={'Add new Guests'}
                description={'Add new guests'}
                open={open}
                onClose={() => null}
                Form={() => <><Form.addPerson
                    id="addGuest"
                    onsubmit={(data: any) => { alert(JSON.stringify(data)) }}
                    defaultValues={{}}
                />
                    <Button form='addGuest' type='submit'>das</Button>
                </>}
                SubmitButton={() => <div className="flex gap-4 mt-4">
                    <Button type='button' onClick={() => setOpen(!open)} variant='secondary' className="capitalize">
                        cancel
                    </Button>
                    <Button type="submit" className="capitalize">
                        create new Guests
                    </Button>
                </div>}

            >
                <Button type='button' disabled={false} onClick={() => setOpen(!open)} variant="outline" >
                    <PlusCircledIcon className="mr-2 h-4 w-4" />

                    New Guest</Button>
            </Drawer>
        )

    }


    return (
        <>
            <Drawer

                title={'Add new Guests'}
                description={'Add new guests'}
                open={open}
                onClose={() => null}
                Form={() => <><Form.addPerson
                    id="addGuest"
                    onsubmit={(data: any) => { alert(JSON.stringify(data)) }}
                    defaultValues={{}}
                />
                    <Button form='addGuest' type='submit'>das</Button>
                </>}
                SubmitButton={() => <div className="flex gap-4 mt-4">
                    <Button type='button' onClick={() => setOpen(!open)} variant='secondary' className="capitalize">
                        cancel
                    </Button>
                    <Button type="submit" form='addGuest' className="capitalize">
                        create new Guests
                    </Button>
                </div>}

            >
                <Button type='button' disabled={false} onClick={() => setOpen(!open)} variant="outline" >
                    <PlusCircledIcon className="mr-2 h-4 w-4" />

                    New Guest</Button>
            </Drawer>
            <NewBookingForm
                handleCancel={()=>alert()}
                id="dadas"
                isLoading={false}
                onSubmit={(data) => {
                    alert(JSON.stringify(data))
                    console.log("form", data)
                }}

                roomTypes={[
                    {
                        value: "single",
                        label: "Single"
                    },
                    {
                        value: "double",
                        label: "Double"
                    }
                ]}
                status={[
                    {
                        value: "booked",
                        label: "Booked"
                    },
                    {
                        value: "checkin",
                        label: "Checkin"
                    }
                ]}
                guestList={[
                    {
                        name: "shabeeb ck",
                        email: "shabeebcoder@gmail.com",
                        id: "4335345345",
                        avatar: "https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    }
                    ,
                    {
                        name: "Bonnie Green",
                        email: "email@flowbite.com",
                        id: "4335ds345345",
                        avatar: "https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    }
                ]}
                NewGuest={() => {
                    return (<Button onClick={() => setOpen(!open)} type='button'>
                        <PlusCircledIcon className="mr-2 h-4 w-4" />

                        New Guest</Button>)
                }}
                onSelect={(data) => alert(JSON.stringify(data))}

            />
        </>)
};



