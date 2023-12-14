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

import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod';

export const roomsSchema = z.object({
    name: z.string(),
    price: z.number(),
    roomType: z.string(),
    image: z.string().array().optional(),
    id: z.string().optional()
});

export type IRoom = z.infer<typeof roomsSchema>

interface AddRoomsProps {
  onsubmit: any
  defaultValues?: any;
  id: string;
  roomTypes: any;
  fields?: any;
}

function AddRooms({
  onsubmit,
  defaultValues = {
    roomTypes: "1"
  },
  id,
  roomTypes = [],
  fields = {
    roomTypes: {
      label: "Room Types *",
      description: "Select the type of room from the options below. Choose the most appropriate category that describes the nature or purpose of the room."
    },
    name: {
      label: "Room Name/Number *",
      description: "Enter the total number of rooms available in your property or facility. This should include all types of rooms, such as bedrooms, meeting rooms, and offices."
    }
  }
}: AddRoomsProps

): any {

  const form = useForm<IRoom>({ defaultValues, resolver: zodResolver(roomsSchema) });


  return (
 
  
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onsubmit)} className="space-y-8"
          id={id}
        >
          <FormField
            control={form.control}
            rules={{ required: true }}
            name="roomType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{fields.roomTypes.label}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {
                      roomTypes.map((item: any) => <SelectItem value={item.value}>{item.label}</SelectItem>)
                    }


                  </SelectContent>
                </Select>
                <FormDescription>
                  {fields.roomTypes.description}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            rules={{ required: true }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{fields.name.label}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  {fields.name.description}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid sm:flex flex-col w-full max-w-sm  gap-1.5">
            <div>

              <Label htmlFor="picture">Upload Image</Label>
              <Input id="picture" type="file" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className='flex gap-1.5'>

              <img className='w-35 h-11' src="https://s3-alpha-sig.figma.com/img/51e7/26a4/c5ad5fa89e6eb395e2dfcd3dbfe68a99?Expires=1701043200&Signature=DbL8OxRDOYeZqpSTuNPGgibkUMytgInayNYmeCjEI9I2qiKZ9xvxlY1BcRivK2EKGkq1hb3PSGtOMCWdStGp4AU184PxfEsSACn9ILuiSaiUB01TmRFC0tTcf~Ab754w11t41x0taXlt29UmoSmWx1z3-52eM2JU3mBotaqDNG0Ke2~mKymmTylP0RkiH8ggRd48jx5qMYRTNCBUf2FAd2avezDOwGCwP4jflfDHzZXhZDmb-4iw7TaRrpn2typS1CXaJyys9HIf~JbPHGI~EvlEwrop1aKyER28~hU7AKfIpxjUIp4dWWaqWyrGDwauqzgHtSpW1AiQ60zxYL2OBg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
              <img className='w-33 h-11' src="https://s3-alpha-sig.figma.com/img/51e7/26a4/c5ad5fa89e6eb395e2dfcd3dbfe68a99?Expires=1701043200&Signature=DbL8OxRDOYeZqpSTuNPGgibkUMytgInayNYmeCjEI9I2qiKZ9xvxlY1BcRivK2EKGkq1hb3PSGtOMCWdStGp4AU184PxfEsSACn9ILuiSaiUB01TmRFC0tTcf~Ab754w11t41x0taXlt29UmoSmWx1z3-52eM2JU3mBotaqDNG0Ke2~mKymmTylP0RkiH8ggRd48jx5qMYRTNCBUf2FAd2avezDOwGCwP4jflfDHzZXhZDmb-4iw7TaRrpn2typS1CXaJyys9HIf~JbPHGI~EvlEwrop1aKyER28~hU7AKfIpxjUIp4dWWaqWyrGDwauqzgHtSpW1AiQ60zxYL2OBg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
              <img className='w-35 h-11' src="https://s3-alpha-sig.figma.com/img/51e7/26a4/c5ad5fa89e6eb395e2dfcd3dbfe68a99?Expires=1701043200&Signature=DbL8OxRDOYeZqpSTuNPGgibkUMytgInayNYmeCjEI9I2qiKZ9xvxlY1BcRivK2EKGkq1hb3PSGtOMCWdStGp4AU184PxfEsSACn9ILuiSaiUB01TmRFC0tTcf~Ab754w11t41x0taXlt29UmoSmWx1z3-52eM2JU3mBotaqDNG0Ke2~mKymmTylP0RkiH8ggRd48jx5qMYRTNCBUf2FAd2avezDOwGCwP4jflfDHzZXhZDmb-4iw7TaRrpn2typS1CXaJyys9HIf~JbPHGI~EvlEwrop1aKyER28~hU7AKfIpxjUIp4dWWaqWyrGDwauqzgHtSpW1AiQ60zxYL2OBg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
            </div>
          </div>
        </form>
      </Form>
    
  )
}

export default AddRooms;