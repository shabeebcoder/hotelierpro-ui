import React from 'react'
import {Input} from '../../../elements/Input/input'
import {Label} from '../../../elements/Label/label'
import {Button} from '../../../elements/Buttons/buttons'
import { FormField ,FormItem ,FormLabel,FormControl,FormDescription,FormMessage ,Form} from '../../../elements/Form/form'
import { useFieldArray, useForm } from "react-hook-form"
function AddRoomType() {
  const form = useForm({})
  return (
    <div>
      <Form {...form}>
          <form onSubmit={form.handleSubmit(() => alert())} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Max. Persons(per rooms)</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price(Regular use)</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price(Single use)</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit">Add</Button>&nbsp;&nbsp;&nbsp;
            <Button variant="secondary" type="submit">Cancel</Button>
          </form>
        </Form>
    </div>
  )
}

export default AddRoomType