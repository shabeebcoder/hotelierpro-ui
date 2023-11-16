import React from 'react'
import { Input } from '../../../elements/Input/input'
import { Label } from '../../../elements/Label/label'
import { Button } from '../../../elements/Buttons/buttons'
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, Form } from '../../../elements/Form/form'
import { useFieldArray, useForm } from "react-hook-form"
import {Separator} from '../../../elements/Separator/seperator'
function AddRoomType({onsubmit}) {

  
  const form = useForm({})


  return (
    <div className="hidden h-full flex-1 flex-col space-y-3 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Add New Room Information </h2>
          <p className="text-muted-foreground">

            This form is used to input essential details about the rooms available within your hotel or property. Accurate and complete information is crucial for efficient room management and an improved guest experience. Please fill out the following fields with the relevant information for each room.
          </p>
        </div>

      </div>
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onsubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="room_type_name"
              rules={
                { required: true }
              }
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field}/>
                  </FormControl>
                  <FormDescription>
                  Please enter a unique name for the room. It may contain letters, numbers, and spaces. Avoid special characters or symbols.                                            </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
              />
            <FormField
              control={form.control}
              name="max_person"
              rules={
                { required: true }
              }
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Max. Persons(per rooms)</FormLabel>
                  <FormControl>
                    <Input type='number' {...field} />
                  </FormControl>
                  <FormDescription>
                  Specify the maximum number of individuals allowed in this room. Please consider factors such as room size, safety regulations, and comfort.                                            </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
              />
            <FormField
              control={form.control}
              name="regular_price"
              rules={
                { required: true }
              }
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price(Regular use)</FormLabel>
                  <FormControl>
                    <Input type='number' {...field} />
                  </FormControl>
                  <FormDescription>
                  Enter the standard price for using this room for regular purposes. Consider factors such as time duration, amenities included, and any other relevant considerations.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
              />
            <FormField
              control={form.control}
              name="sing_price"
              rules={
                { required: true }
              }
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price(Single use)</FormLabel>
                  <FormControl>
                    <Input type='number' {...field} />
                  </FormControl>
                  <FormDescription>
                  Specify the standard price for a single use of this room for regular purposes.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
              />
              <Button type="submit">Create new room</Button>&nbsp;&nbsp;&nbsp;
              <Button variant="secondary" type="submit">Cancel room</Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default AddRoomType