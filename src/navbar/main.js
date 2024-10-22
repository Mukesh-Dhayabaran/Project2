import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Blocks from './icons/Blocks';
import People from './icons/People';
import User from './icons/User';
import Buildings from './icons/Buildings';
import Clouds from './icons/Clouds';
import Settings from './icons/Settings';
import Files from './icons/Files';
import Message from './icons/Message';
import Arrow from './icons/Arrow';
import RequestTicket from './icons/RequestTicket';

export default function Main() {
  const [open, setOpen] = useState(false);
  const NavComponents = [
    { name: "Dashboard", icon: <Blocks /> },
    { name: "Company", icon: <People /> },
    { name: "Owner", icon: <User /> },
    { name: "Properties", icon: <Buildings /> },
    { name: "Principle", icon: <RequestTicket /> },
    { name: "Settings", icon: <Settings /> },
    { name: "Data", icon: <Clouds /> },
    { name: "Report", icon: <Files /> },
    { name: "Document", icon: <Files /> },
    { name: "Communication", icon: <Message /> },
  ];

  const onclick = {
    backgroundColor: '#5078E1',
    color: '#FFFFFF',
    width: '20px',
    height: '30px',
    borderRadius: '15px',
  };

  return (
    <Drawer 
      variant="permanent"
      PaperProps={{
        sx: {
          // marginTop: '54px',
          backgroundColor: "#333333",
          width: open ? "270.01px" : "90px",
          height: "714px",
          transition: 'width 0.3s',
        },
      }}
    >
      <List sx={{display: 'flex', flexDirection: 'column'}} >
        <ListItem button onClick={() => setOpen(!open)} 
       
          >
            <ListItemText primary={open ? 'Dynamic Netsoft' : null} sx={{height: '32px',color: '#FFFFFF'}}></ListItemText>
          <ListItemIcon sx={{ justifyContent: 'center',}}><Arrow /></ListItemIcon>
        </ListItem>
        {NavComponents.map((navItem, index) => (
          <ListItem key={index} sx={{justifyContent: 'center'}}>
            <ListItemIcon sx={{display: 'flex', justifyContent: 'center',height:'32px',width: '20px',
            ":hover": 
              {
              height: '32px',
              backgroundColor: '#5078E1',
              borderRadius: '15px', 
              cursor: 'pointer',}
            }}>
              {navItem.icon}
            </ListItemIcon>
            <ListItemText primary={open ? navItem.name : null} sx={{ color: '#FFFFFF'}} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
