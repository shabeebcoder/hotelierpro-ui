import React from 'react'
import { Input } from '../../../elements/Input/input'
import { Label } from '../../../elements/Label/label'
import { Button } from '../../../elements/Buttons/buttons'
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, Form } from '../../../elements/Form/form'
import { useFieldArray, useForm } from "react-hook-form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "../../../elements/Select/select"
function AddRooms() {
    const form = useForm({})
  return (
    <div>
      <div className="hidden h-full flex-1 flex-col space-y-3 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Add New Rooms</h2>
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
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Room Types</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="m@example.com">Single</SelectItem>
                      <SelectItem value="m@google.com">Double</SelectItem>
                      <SelectItem value="m@support.com">other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                  Select the type of room from the options below. Choose the most appropriate category that describes the nature or purpose of the room.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>No of Rooms</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                  Enter the total number of rooms available in your property or facility. This should include all types of rooms, such as bedrooms, meeting rooms, and offices.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
                <Label htmlFor="picture">Upload Image</Label>
            <div className="grid sm:flex w-full max-w-sm items-center gap-1.5">
                <Input id="picture" type="file" />
                <img className='w-35 h-11' src="https://s3-alpha-sig.figma.com/img/51e7/26a4/c5ad5fa89e6eb395e2dfcd3dbfe68a99?Expires=1701043200&Signature=DbL8OxRDOYeZqpSTuNPGgibkUMytgInayNYmeCjEI9I2qiKZ9xvxlY1BcRivK2EKGkq1hb3PSGtOMCWdStGp4AU184PxfEsSACn9ILuiSaiUB01TmRFC0tTcf~Ab754w11t41x0taXlt29UmoSmWx1z3-52eM2JU3mBotaqDNG0Ke2~mKymmTylP0RkiH8ggRd48jx5qMYRTNCBUf2FAd2avezDOwGCwP4jflfDHzZXhZDmb-4iw7TaRrpn2typS1CXaJyys9HIf~JbPHGI~EvlEwrop1aKyER28~hU7AKfIpxjUIp4dWWaqWyrGDwauqzgHtSpW1AiQ60zxYL2OBg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                <img className='w-33 h-11' src="https://s3-alpha-sig.figma.com/img/51e7/26a4/c5ad5fa89e6eb395e2dfcd3dbfe68a99?Expires=1701043200&Signature=DbL8OxRDOYeZqpSTuNPGgibkUMytgInayNYmeCjEI9I2qiKZ9xvxlY1BcRivK2EKGkq1hb3PSGtOMCWdStGp4AU184PxfEsSACn9ILuiSaiUB01TmRFC0tTcf~Ab754w11t41x0taXlt29UmoSmWx1z3-52eM2JU3mBotaqDNG0Ke2~mKymmTylP0RkiH8ggRd48jx5qMYRTNCBUf2FAd2avezDOwGCwP4jflfDHzZXhZDmb-4iw7TaRrpn2typS1CXaJyys9HIf~JbPHGI~EvlEwrop1aKyER28~hU7AKfIpxjUIp4dWWaqWyrGDwauqzgHtSpW1AiQ60zxYL2OBg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                <img className='w-35 h-11' src="https://s3-alpha-sig.figma.com/img/51e7/26a4/c5ad5fa89e6eb395e2dfcd3dbfe68a99?Expires=1701043200&Signature=DbL8OxRDOYeZqpSTuNPGgibkUMytgInayNYmeCjEI9I2qiKZ9xvxlY1BcRivK2EKGkq1hb3PSGtOMCWdStGp4AU184PxfEsSACn9ILuiSaiUB01TmRFC0tTcf~Ab754w11t41x0taXlt29UmoSmWx1z3-52eM2JU3mBotaqDNG0Ke2~mKymmTylP0RkiH8ggRd48jx5qMYRTNCBUf2FAd2avezDOwGCwP4jflfDHzZXhZDmb-4iw7TaRrpn2typS1CXaJyys9HIf~JbPHGI~EvlEwrop1aKyER28~hU7AKfIpxjUIp4dWWaqWyrGDwauqzgHtSpW1AiQ60zxYL2OBg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            </div>
            <Button type="submit">Create new room</Button>&nbsp;&nbsp;&nbsp;
            <Button variant="secondary" type="submit">Cancel room</Button>
          </form>
        </Form>
      </div>
    </div>
    </div>
  )
}

export default AddRooms;