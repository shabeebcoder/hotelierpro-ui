import React from 'react';
import { Label } from '../../../elements/Label/label';
import { Input } from '../../../elements/Input/input';
import { Textarea } from '../../../elements/TextArea/textarea';
import { Button } from '../../../elements/Buttons/buttons';

function AddPersonForm() {
    const formLabels = [
        'full name',
        'company iD',
        'bank',
        'account no',
        'email',
        'phone no',
        'address',
        'contact person',
    ];
    const formElements = formLabels.map((item, pos) => {
        return (
            <div
                key={pos}
                className="flex items-center justify-between my-2 w-[25rem]"
            >
                <Label htmlFor={item} className="capitalize text-lg">
                    {item}
                </Label>
                <Input
                    type="text"
                    id={item}
                    className="max-w-[15rem] text-lg"
                />
            </div>
        );
    });

    return (
        <>
            <h3 className="font-semibold capitalize text-3xl">add person</h3>
            <form className="mt-4">
                {formElements}
                <div className="flex items-center">
                    <Label className="text-lg">Notes</Label>
                    <Textarea className="ml-[7.25rem] max-w-[30rem]" />
                </div>
                <div className="flex gap-4 mt-4">
                    <Button className="capitalize text-lg">
                        create person
                    </Button>
                    <Button
                        className="capitalize text-lg border-primary"
                        variant="outline"
                    >
                        cancel
                    </Button>
                </div>
            </form>
        </>
    );
}

export default AddPersonForm;
