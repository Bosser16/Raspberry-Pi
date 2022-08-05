import React, { useState } from 'react'
import { AppBar, Box, Button, Drawer, IconButton, List, ListItemButton, styled, Toolbar, Typography } from '@mui/material'
import { Menu } from '@mui/icons-material'
import useWindowDimensions from './useWindowDimensions';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
   
  }));

const HorizonalBox = styled(Box)({ // creates a Box that adds components from left to right rather than top to bottom
    display: 'flex',
    alignItems: 'center',
})

export default function Navbar({buttons, title}) {

const [isDrawerOpen, setIsDrawerOpen] = useState(false);
const windowSize = useWindowDimensions()

function updateToolbar(){
    var sliceVal;

    if(windowSize.width > 1200){
        sliceVal = 8;
    }
    else if(windowSize.width < 1200 && windowSize.width > 950){
        sliceVal = 6;
    }
    else if(windowSize.width < 950 && windowSize.width > 750){
        sliceVal = 4;
    }
    else if(windowSize.width < 750 && windowSize.width > 500){
        sliceVal = 2;   
    }
    else{
        sliceVal = 0;
    }
    return sliceVal;
}

return (
    <Box>
        <AppBar position='sticky' >
            <StyledToolbar>
                <Typography variant='h4'>
                    {title}
                </Typography>
                <HorizonalBox>
                    <HorizonalBox gap={3}>
                        <HorizonalBox>
                            {buttons.slice(0, updateToolbar()).map(buttons => (
                                <Button variant=''>{buttons}</Button>
                            ))}
                        </HorizonalBox>
                        <IconButton onClick={() => setIsDrawerOpen(true)}>
                            <Menu 
                                sx={{ 
                                    height: 40,
                                    width: 40, 
                                    color: 'white'
                                }}
                            />
                        </IconButton>
                    </HorizonalBox>
                </HorizonalBox>
            </StyledToolbar>
        </AppBar>
        <>
        <Drawer anchor='right' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} >
            <Box width='250px' textAlign='center'>
                <Typography variant='h6' component='div'>Side Pannel</Typography>
                <List>
                    {buttons.slice(updateToolbar()).map(buttons => (
                        <ListItemButton variant=''>
                            <Typography>{buttons}</Typography>
                        </ListItemButton>
                    ))}
                </List>
            </Box>
        </Drawer>
    </>                       
    </Box>
  )
}
