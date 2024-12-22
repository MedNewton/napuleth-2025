'use client'

import * as React from 'react';
import { Stack, Typography, Button, Divider, Link } from "@mui/material"
import theme from "@theme/theme";
import Image from "next/image";

import logo from '@assets/logo.webp'
import { IoMdArrowDropdown } from "react-icons/io";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';

import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const Navbar = () => {
   
    return (
        <Stack width={{ xs: '100%', lg: '70%' }} direction={'row'} alignItems={'center'} justifyContent={'space-between'} padding={2} borderRadius={'50rem'} marginX={'auto'} marginTop={{ xs: 0, lg: 3 }} sx={{
            backgroundColor: { xs: 'transparent', lg: theme.palette.background.default },
            transform: 'translateX(0%)'
        }}>
            <Stack direction={'row'} alignItems={'end'} gap={1}>
                <Image src={logo} alt="napuleth NAPULETH napulETH 2025 Naples Napoli ETH event web3 southern italy" height={34} width={22}></Image>
                <Typography variant="h5" fontWeight={600} lineHeight={{ xs: '1.5rem', lg: 'normal' }}>NapulETH</Typography>
            </Stack>
            <Stack display={{ xs: 'none', lg: 'flex' }} direction={'row'} alignItems={'end'} justifyContent={'center'} gap={3}>
                <Typography variant="h6" >Home</Typography>
                <Typography variant="h6">Agenda</Typography>
                <Menu 
                    menuButton={<Stack direction={'row'} alignItems={'center'} justifyContent={'center'} gap={0.5} sx={{cursor: 'pointer'}}>
                    <Typography variant="h6">About</Typography>
                    <IoMdArrowDropdown size={16} />
                </Stack>}
                >
                    <MenuItem>
                        <Typography variant="h6" fontWeight={400}>Team</Typography>
                    </MenuItem>
                </Menu>
                <Menu 
                    menuButton={<Stack direction={'row'} alignItems={'center'} justifyContent={'center'} gap={0.5} sx={{cursor: 'pointer'}}>
                    <Typography variant="h6">Events</Typography>
                    <IoMdArrowDropdown size={16} />
                </Stack>}
                >
                    <MenuItem>
                        <Typography variant="h6" fontWeight={400}>Meetups</Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <Typography variant="h6" fontWeight={400}>Side Events</Typography>
                    </MenuItem>
                </Menu>
                <Menu 
                    menuButton={<Stack direction={'row'} alignItems={'center'} justifyContent={'center'} gap={0.5} sx={{cursor: 'pointer'}}>
                    <Typography variant="h6">Contact</Typography>
                    <IoMdArrowDropdown size={16} />
                </Stack>}
                >
                    <MenuItem>
                        <Typography variant="h6" fontWeight={400}>Twitter</Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <Typography variant="h6" fontWeight={400}>Instagram</Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <Typography variant="h6" fontWeight={400}>LinkedIn</Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <Typography variant="h6" fontWeight={400}>Telegram</Typography>
                    </MenuItem>
                </Menu>
            </Stack>
            <Link href="/coming_soon" underline="none">
                <Stack alignItems={'center'} justifyContent={'center'} paddingX={3} paddingBottom={1.5} paddingTop={2} borderRadius={'1.8rem'} sx={{
                    backgroundColor: theme.palette.ne_rose.main
                }}>
                    <Typography variant='h5' lineHeight={1}>Join Us</Typography>
                </Stack>
            </Link>


            {/* Mobile Menu Button*/}
            <Button variant="outlined" sx={{
                display: { xs: 'none', lg: 'none' },
                backgroundColor: 'transparent',
                boxShadow: 'none'
            }}>
                <MenuIcon fontSize='large' />
            </Button>

        </Stack>
    )
}

export default Navbar;