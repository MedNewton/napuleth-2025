'use client'

import * as React from 'react';
import { Stack, Typography, Button, Divider } from "@mui/material"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import theme from "@theme/theme";
import Image from "next/image";

import logo from '@assets/logo.webp'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [anchorEvents, setAnchorEvents] = React.useState<null | HTMLElement>(null);
    const openEvents = Boolean(anchorEvents);
    const handleEventsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEvents(event.currentTarget);
    };
    const handleEventsClose = () => {
        setAnchorEvents(null);
    };

    const [anchorAbout, setAnchorAbout] = React.useState<null | HTMLElement>(null);
    const openAbout = Boolean(anchorAbout);
    const handleAboutClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorAbout(event.currentTarget);
    };
    const handleAboutClose = () => {
        setAnchorAbout(null);
    };

    return (
        <Stack width={{xs: '100%', lg: '70%'}} direction={'row'} alignItems={'center'} justifyContent={'space-between'} padding={2} borderRadius={'50rem'} marginX={'auto'} marginTop={{xs: 0, lg: 3}} sx={{
            backgroundColor: {xs: 'transparent', lg: theme.palette.background.default},
            transform: 'translateX(0%)'
        }}>
            <Stack direction={'row'} alignItems={'end'} gap={1}>
                <Image src={logo} alt="napuleth NAPULETH napulETH 2025 Naples Napoli ETH event web3 southern italy" height={34} width={22}></Image>
                <Typography variant="h5" fontWeight={600} lineHeight={{xs:'1.5rem', lg: 'normal'}}>NapulETH</Typography>
            </Stack>
            <Stack display={{xs: 'none', lg: 'flex'}} direction={'row'} alignItems={'end'} justifyContent={'center'} gap={3}>
                <Typography variant="h6" >Home</Typography>
                <Typography variant="h6">Agenda</Typography>
                <Button
                    aria-controls={openAbout ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openAbout ? 'true' : undefined}
                    onClick={handleAboutClick}
                    sx={{
                        backgroundColor: 'transparent',
                        boxShadow: '0px 0px 0px 0px rgba(0,0,0,0)',
                        padding: 0
                    }}
                >
                    <Typography variant="h6">About</Typography>
                    <KeyboardArrowDownIcon fontSize='small' />
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorAbout}
                    open={openAbout}
                    onClose={handleAboutClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleAboutClose}>
                        <Typography variant="h6">Team</Typography>
                    </MenuItem>
                    <Divider sx={{ borderBottomWidth: 1, borderColor: theme.palette.text.secondary }} />
                    <MenuItem onClick={handleAboutClose}>
                        <Typography variant="h6">Speakers</Typography>
                    </MenuItem>
                    <Divider sx={{ borderBottomWidth: 1, borderColor: theme.palette.text.secondary }} />
                    <MenuItem onClick={handleAboutClose}>
                        <Typography variant="h6">Artists</Typography>
                    </MenuItem>
                </Menu>
                <Button
                    aria-controls={openEvents ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={openEvents ? 'true' : undefined}
                    onClick={handleEventsClick}
                    sx={{
                        backgroundColor: 'transparent',
                        boxShadow: '0px 0px 0px 0px rgba(0,0,0,0)',
                        padding: 0
                    }}
                >
                    <Typography variant="h6">Events</Typography>
                    <KeyboardArrowDownIcon fontSize='small' />
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEvents}
                    open={openEvents}
                    onClose={handleEventsClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleEventsClose}>
                        <Typography variant="h6">Meetups</Typography>
                    </MenuItem>
                    <Divider sx={{ borderBottomWidth: 1, borderColor: theme.palette.text.secondary }} />
                    <MenuItem onClick={handleEventsClose}>
                        <Typography variant="h6">Side Events</Typography>
                    </MenuItem>
                    <Divider sx={{ borderBottomWidth: 1, borderColor: theme.palette.text.secondary }} />
                    <MenuItem onClick={handleEventsClose}>
                        <Typography variant="h6">Pitch Battle</Typography>
                    </MenuItem>
                    <Divider sx={{ borderBottomWidth: 1, borderColor: theme.palette.text.secondary }} />
                    <MenuItem onClick={handleEventsClose}>
                        <Typography variant="h6">Map</Typography>
                    </MenuItem>
                </Menu>
            </Stack>
            <Button variant="outlined" sx={{
                display: {xs: 'none', lg: 'flex'}
            }}>
                Join Us
            </Button>

            {/* Mobile Menu Button*/}
            <Button variant="outlined" sx={{
                display: {xs: 'flex', lg: 'none'},
                backgroundColor: 'transparent',
                boxShadow: 'none'
            }}>
                <MenuIcon fontSize='large' />
            </Button>

        </Stack>
    )
}

export default Navbar;