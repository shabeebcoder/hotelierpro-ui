import React from 'react'
import { Input } from '../../../elements/Input/input'
import { Label } from '../../../elements/Label/label'
import { Button } from '../../../elements/Buttons/buttons'
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, Form } from '../../../elements/Form/form'
import {  useForm } from "react-hook-form"


function AddRoomType({
  onsubmit,
  id,
  defaultValues = {},
  fields = {
    name: {
      label: "Name",
      description: "Please enter a unique name for the room. It may contain letters, numbers, and spaces. Avoid special characters or symbols."
    },
    maxPerson: {
      label: "Max. Persons(per rooms)",
      description: "Enter the standard price for using this room for regular purposes. Consider factors such as time duration, amenities included, and any other relevant considerations."
    },
    regularPrice: {
      label: "Price(Regular use)",
      description: "Enter the standard price for using this room for regular purposes. Consider factors such as time duration, amenities included, and any other relevant considerations."
    },
    singlePrice: {
      label: "Price(Single use)",
      description: "Specify the standard price for a single use of this room for regular purposes."
    },


  }
}): any {


  const form:any = useForm({
    defaultValues
  })


  return (
    // <div className="hidden h-full flex-1 flex-col space-y-3 p-8 md:flex">
    //   <div className="flex items-center justify-between space-y-2">
    //     <div>
    //       <h2 className="text-2xl font-bold tracking-tight">Add New Type Room Information </h2>
    //       <p className="text-muted-foreground">

    //         This form is used to input essential details about the rooms available within your hotel or property. Accurate and complete information is crucial for efficient room management and an improved guest experience. Please fill out the following fields with the relevant information for each room.
    //       </p>
    //     </div>

    //   </div>
    //   <div>
    <Form {...form}>
      <form id={id} onSubmit={form.handleSubmit(onsubmit)} className="space-y-8">
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
          name="regularPrice"
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
          name="singlePrice"
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
        {/* <Button type="submit">Create new room</Button>&nbsp;&nbsp;&nbsp;
              <Button variant="secondary" type="submit">Cancel room</Button> */}
      </form>
    </Form>
    //   </div>
    // </div>
  )
}

export default AddRoomType