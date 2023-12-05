import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../../../elements/Buttons/buttons';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../../../elements/Form/form';
import {
    Dialog,
    DialogContent,
    DialogClose,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../../../elements/Dialog/dialog';
import { Input } from '../../../elements/Input/input';

function NewTask({ FormData }) {
    const form = useForm();
    const onSubmit = (data) => {
        form.setValue('text', '');
        FormData({ id: Date.now(), ...data });
    };
    return (
        <Dialog>
            <DialogTrigger className="mt-8">
                <Button>Add New Task</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>New Task</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                    >
                        <FormField
                            control={form.control}
                            name="text"
                            rules={{ required: true }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Task Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Name of the task"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogClose asChild>
                            <Button type="submit">Submit</Button>
                        </DialogClose>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}

export default NewTask;
