import React from 'react'
import { Input } from '../../../elements/Input/input'
import { Label } from '../../../elements/Label/label'
import { Button } from '../../../elements/Buttons/buttons'
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, Form } from '../../../elements/Form/form'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';

export const roomTypeTypeSchema = z.object({
  name: z.string(),
  singleUsePrice: z.number(),
  regularUsePrice: z.number(),
  maxPerson: z.number(),
  id: z.string().optional()
});

export type IRoomTypeType = z.infer<typeof roomTypeTypeSchema>


type IProps = {
  onSubmit: (data: IRoomTypeType) => void;
  id: string;
  defaultValues?: IRoomTypeType,
  fields?: any
}

function AddRoomType({
  onSubmit,
  id,
  defaultValues = {},
  fields = {
    name: {
      label: "Name *",
      description: "Please enter a unique name for the room. It may contain letters, numbers, and spaces. Avoid special characters or symbols."
    },
    maxPerson: {
      label: "Max. Persons(per rooms) *",
      description: "Enter the standard price for using this room for regular purposes. Consider factors such as time duration, amenities included, and any other relevant considerations."
    },
    regularPrice: {
      label: "Price(Regular use) *",
      description: "Enter the standard price for using this room for regular purposes. Consider factors such as time duration, amenities included, and any other relevant considerations."
    },
    singlePrice: {
      label: "Price(Single use) *",
      description: "Specify the standard price for a single use of this room for regular purposes."
    },


  }
}: IProps) {


  const form = useForm<IRoomTypeType>({
    defaultValues
  })


  return (<Form {...form}>
    <form id={id} onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
        control={form.control}
        name="name"
        rules={
          { required: true }
        }
        render={({ field }) => (
          <FormItem>
            <FormLabel>{fields.name.label}</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormDescription>
              Please enter a unique name for the room. It may contain letters, numbers, and spaces. Avoid special characters or symbols.                                            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="maxPerson"
        rules={
          { required: true }
        }
        render={({ field }) => (
          <FormItem>
            <FormLabel>{fields.maxPerson.label}</FormLabel>
            <FormControl>
              <Input type='number' {...field} />
            </FormControl>
            <FormDescription>
              {fields.maxPerson.description}
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="regularUsePrice"
        rules={
          { required: true }
        }
        render={({ field }) => (
          <FormItem>
            <FormLabel>{fields.regularPrice.label}</FormLabel>
            <FormControl>
              <Input type='number' {...field} />
            </FormControl>
            <FormDescription>
              {fields.regularPrice.description}
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="singleUsePrice"
        rules={
          { required: true }
        }
        render={({ field }) => (
          <FormItem>
            <FormLabel>{
              fields.singlePrice.label
            }</FormLabel>
            <FormControl>
              <Input type='number' {...field} />
            </FormControl>
            <FormDescription>
              {
                fields.singlePrice.description
              }
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

    </form>
  </Form>

  )
}

export default AddRoomType