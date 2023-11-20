import React from 'react'
import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarLabel,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "../../elements/Menubar/menubar"
  
  export function Menu() {
    return (
      <Menubar className="rounded-none border-b border-none px-2 lg:px-4">
        <MenubarMenu>
          <MenubarTrigger className="font-bold">HotelierPro</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>About Subscription</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Preferences... <MenubarShortcut>⌘,</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Subscription History <MenubarShortcut>⌘H</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Refer a friend  <MenubarShortcut>⌘H</MenubarShortcut>
            </MenubarItem>
         
            <MenubarShortcut />
            <MenubarItem>
              Sign out <MenubarShortcut>⌘Q</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="relative">Booking</MenubarTrigger>
          <MenubarContent>
       
            <MenubarItem>
              New Booking <MenubarShortcut>⌘Bs</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Configure Email<MenubarShortcut>⌘B</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
          
            <MenubarItem>
              Export <MenubarShortcut>⌘O</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
          
            <MenubarItem>Hostory</MenubarItem>
         
            
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Configure</MenubarTrigger>
          <MenubarContent>
            <MenubarItem >
              Billing & taxes <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem >
              Regional <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem >
              Channel Manager <MenubarShortcut>⌘X</MenubarShortcut>
            </MenubarItem>
            <MenubarItem >
              Booking Engine <MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarItem>
            <MenubarItem >
              Hotel Information <MenubarShortcut>⌘V</MenubarShortcut>
            </MenubarItem>
        
      
          </MenubarContent>
        </MenubarMenu>
 
        <MenubarMenu>
          <MenubarTrigger className="hidden md:block">Account</MenubarTrigger>
          <MenubarContent forceMount>
          
          
       
          
            <MenubarItem inset>My Profile</MenubarItem>
            <MenubarSeparator />

            <MenubarItem inset>Change Password</MenubarItem>
            <MenubarItem inset>Add Account</MenubarItem>
            <MenubarItem inset>User Logs</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
  }