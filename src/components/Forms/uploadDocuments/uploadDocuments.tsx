import React from 'react';
import { FilePlusIcon } from '@radix-ui/react-icons';
import { Separator } from '../../../elements/Separator/seperator';
import { Input } from '../../../elements/Input/input';
import { Button } from '../../../elements/Buttons/buttons';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '../../../elements/Form/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';

function UploadDocuments({ onSubmit }) {
    const form = useForm({});
    return (
        <>
            <h2 className="text-2xl font-bold tracking-tight capitalize">
                Profile Photo
            </h2>
            <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt=""
                className="w-[10rem]"
            />
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-8 mt-8"
                >
                    <FormField
                        control={form.control}
                        name="document"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel></FormLabel>
                                <FormControl>
                                    <div className="flex gap-4">
                                        {' '}
                                        <Input
                                            placeholder="Document name"
                                            type="file"
                                            {...field}
                                            className="w-[20rem]"
                                        />
                                        <Button>
                                            <FilePlusIcon className="mr-2 h-4 w-4" />{' '}
                                            Add Document
                                        </Button>
                                    </div>
                                </FormControl>
                                <FormDescription></FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Separator className="my-2" />
                    <FormField
                        control={form.control}
                        name="passport"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel></FormLabel>
                                <FormControl>
                                    <div className="flex gap-4">
                                        {' '}
                                        <Input
                                            placeholder="Passport"
                                            type="file"
                                            {...field}
                                            className="w-[20rem]"
                                        />
                                        <Button>
                                            <FilePlusIcon className="mr-2 h-4 w-4" />{' '}
                                            Add Passport
                                        </Button>
                                    </div>
                                </FormControl>
                                <FormDescription></FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Separator className="my-2" />
                    <FormField
                        control={form.control}
                        name="idProof"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel></FormLabel>
                                <FormControl>
                                    <div className="flex gap-4">
                                        {' '}
                                        <Input
                                            placeholder="Id Proof"
                                            type="file"
                                            {...field}
                                            className="w-[20rem]"
                                        />
                                        <Button>
                                            <FilePlusIcon className="mr-2 h-4 w-4" />
                                            Add ID Proof
                                        </Button>
                                    </div>
                                </FormControl>
                                <FormDescription></FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Separator className="my-2" />
                    <div className="space-x-4">
                        <Button>Upload</Button>
                        <Button variant="outline">Cancel</Button>
                    </div>
                </form>
            </Form>
        </>
    );
}

export default UploadDocuments;
