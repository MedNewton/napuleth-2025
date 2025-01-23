'use client'

import * as React from 'react';
import { useState } from 'react';
import { Stack, Typography, Button, Divider, Link } from "@mui/material"
import theme from "@theme/theme";
import Image from "next/image";

import logo from '@assets/logo.webp'
import { IoMdArrowDropdown } from "react-icons/io";
import MenuIcon from '@mui/icons-material/Menu';
import { IoCloseSharp } from "react-icons/io5";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';


import { Menu, MenuItem } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { fallDown as MobileMenu } from 'react-burger-menu'


const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

    return (
        <>
            <Stack width={{ xs: '100%', lg: '70%' }} direction={'row'} alignItems={'center'} justifyContent={'space-between'} padding={2} borderRadius={'50rem'} marginX={'auto'} marginTop={{ xs: 0, lg: 3 }} sx={{
                backgroundColor: { xs: 'transparent', lg: theme.palette.background.default },
                transform: 'translateX(0%)'
            }}>
                <Stack direction={'row'} alignItems={'end'} gap={1}>
                    <Image src={logo} alt="napuleth NAPULETH napulETH 2025 Naples Napoli ETH event web3 southern italy" height={34} width={22}></Image>
                    <Typography variant="h5" fontWeight={600} lineHeight={{ xs: '1.5rem', lg: 'normal' }}>NapulETH</Typography>
                </Stack>
                <Stack display={{ xs: 'none', lg: 'flex' }} direction={'row'} alignItems={'end'} justifyContent={'center'} gap={3}>
                    <Link href="/" underline="none">
                        <Typography variant="h6">Home</Typography>
                    </Link>
                    <Link href="/agenda" underline="none">
                        <Typography variant="h6">Agenda</Typography>
                    </Link>
                    <Menu
                        menuButton={<Stack direction={'row'} alignItems={'center'} justifyContent={'center'} gap={0.5} sx={{ cursor: 'pointer' }}>
                            <Typography variant="h6">About</Typography>
                            <IoMdArrowDropdown size={16} />
                        </Stack>}
                    >
                        <MenuItem onClick={() => {
                            if(window) window.location.href = '/team'
                        }}>
                            <Typography variant="h6" fontWeight={400}>Team</Typography>
                        </MenuItem>
                        <MenuItem>
                            <Typography variant="h6" fontWeight={400}>2024 Archive</Typography>
                        </MenuItem>
                    </Menu>
                    <Menu
                        menuButton={<Stack direction={'row'} alignItems={'center'} justifyContent={'center'} gap={0.5} sx={{ cursor: 'pointer' }}>
                            <Typography variant="h6">Events</Typography>
                            <IoMdArrowDropdown size={16} />
                        </Stack>}
                    >
                        <MenuItem onClick={() => {
                            if(window) window.location.href = '/meetups'
                        }}>
                            <Typography variant="h6" fontWeight={400}>Meetups</Typography>
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={() => {
                            if(window) window.location.href = '/side-events'
                        }}>
                            <Typography variant="h6" fontWeight={400}>Side Events</Typography>
                        </MenuItem>
                    </Menu>
                    <Menu
                        menuButton={<Stack direction={'row'} alignItems={'center'} justifyContent={'center'} gap={0.5} sx={{ cursor: 'pointer' }}>
                            <Typography variant="h6">Contact</Typography>
                            <IoMdArrowDropdown size={16} />
                        </Stack>}
                    >
                        <MenuItem onClick={() => {
                            if(window) window.open('https://x.com/napuleth', '_blank')
                        }}>
                            <Typography variant="h6" fontWeight={400}>Twitter</Typography>
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={() => {
                            if(window) window.open('https://www.instagram.com/napuleth', '_blank')
                        }}>
                            <Typography variant="h6" fontWeight={400}>Instagram</Typography>
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={() => {
                            if(window) window.open('https://www.linkedin.com/company/napul-eth/?originalSubdomain=it', '_blank')
                        }}>
                            <Typography variant="h6" fontWeight={400}>LinkedIn</Typography>
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={() => {
                            if(window) window.open('https://t.me/napuleth', '_blank')
                        }}>
                            <Typography variant="h6" fontWeight={400}>Telegram</Typography>
                        </MenuItem>
                    </Menu>
                </Stack>
                <Stack display={{ xs: 'none', lg: 'flex' }}>
                    <Link display={{ xs: 'none', lg: 'flex' }} href="/speaker-application" underline="none">
                        <Stack alignItems={'center'} justifyContent={'center'} paddingX={2} paddingBottom={1} paddingTop={1.5} borderRadius={'1.8rem'} sx={{
                            backgroundColor: theme.palette.ne_rose.main
                        }}>
                            <Typography variant='h5' lineHeight={1}>Become a speaker</Typography>
                        </Stack>
                    </Link>
                </Stack>


                {/* Mobile Menu Button*/}
                <Button variant="outlined" onClick={() => setMobileMenuOpen(true)} sx={{
                    display: { xs: 'flex', lg: 'none' },
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    position: 'relative',
                    zIndex: 1000000000,
                }}>
                    <MenuIcon fontSize='large' />
                </Button>
            </Stack>
            <Stack width="100vw" height="100vh" position="fixed" top={0} left={0} zIndex={1000000} display={{ xs: mobileMenuOpen ? 'flex' : 'none', lg: 'none' }}>
                <MobileMenu isOpen={mobileMenuOpen} id="burgerMenu">
                    <Stack width="100%" height="100%" alignItems="center" justifyContent="center">
                        <Stack width="100vw" height={'15%'} paddingTop={2} paddingBottom={4} direction={'row'} alignItems="start" justifyContent="space-between">
                            <Stack direction={'row'} alignItems={'end'} gap={1} paddingLeft={2}>
                                <Image src={logo} alt="napuleth NAPULETH napulETH 2025 Naples Napoli ETH event web3 southern italy" height={34} width={22}></Image>
                                <Typography variant="h5" fontWeight={600} lineHeight={{ xs: '1.5rem', lg: 'normal' }}>NapulETH</Typography>
                            </Stack>
                            <Button sx={{
                                backgroundColor: theme.palette.background.default,
                                borderRadius: 0,
                                padding: 0,
                                boxShadow: 'none',
                                border: 'none'
                            }}
                                onClick={() => setMobileMenuOpen(false)}>
                                <IoCloseSharp size={36} />
                            </Button>
                        </Stack>
                        <Stack width={'100%'} height={'85%'} justifyContent={'space-between'}>
                            <Stack width="100vw" direction={'column'} alignItems="center" justifyContent="start" gap={2}>
                                <Link href="/" underline="none">
                                    <Typography variant="h5">Home</Typography>
                                </Link>
                                <Divider sx={{ borderColor: "#000", width: '30%', marginY: 1 }} />
                                <Link href="/agenda" underline="none">
                                    <Typography variant="h5">Agenda</Typography>
                                </Link>

                                <Divider sx={{ borderColor: "#000", width: '30%', marginY: 1 }} />
                                <Link href="/meetups" underline="none">
                                    <Typography variant="h5">Meetups</Typography>
                                </Link>
                                <Divider sx={{ borderColor: "#000", width: '30%', marginY: 1 }} />
                                <Link href="/side-events" underline="none">
                                    <Typography variant="h5">Side Events</Typography>
                                </Link>
                                <Divider sx={{ borderColor: "#000", width: '30%', marginY: 1 }} />
                                <Link href="/team" underline="none">
                                    <Typography variant="h5">Team</Typography>
                                </Link>
                                <Divider sx={{ borderColor: "#000", width: '30%', marginY: 1 }} />
                                <Link href="/archive/2024" underline="none">
                                    <Typography variant="h5">2024 Archive</Typography>
                                </Link>
                                <Divider sx={{ borderColor: "#000", width: '30%', marginY: 1 }} />
                                <Link href="/speaker-application" underline="none">
                                    <Stack alignItems={'center'} justifyContent={'center'} paddingX={2} paddingBottom={1} paddingTop={1.5} borderRadius={'1.8rem'} sx={{
                                        backgroundColor: theme.palette.ne_rose.main
                                    }}>
                                        <Typography variant='h5' lineHeight={1}>Become a speaker</Typography>
                                    </Stack>
                                </Link>
                            </Stack>
                            <Stack width={'100%'} direction={'row'} alignItems={'center'} justifyContent={'center'} paddingBottom={4} gap={3}>
                                <Link href="https://x.com/napuleth" target="_blank" underline="none" color={theme.palette.text.primary}>
                                    <Stack direction={'row'} alignItems={'center'} gap={1}>
                                        <XIcon color="info" fontSize='large' sx={{ filter: 'brightness(0)' }} />
                                    </Stack>
                                </Link>
                                <Link href="https://www.instagram.com/napuleth" target="_blank" underline="none" color={theme.palette.text.primary}>
                                    <Stack direction={'row'} alignItems={'center'} gap={1}>
                                        <InstagramIcon color="info" fontSize='large' sx={{ filter: 'brightness(0)' }} />
                                    </Stack>
                                </Link>
                                <Link href="https://www.linkedin.com/company/napul-eth/?originalSubdomain=it" target="_blank" underline="none" color={theme.palette.text.primary}>
                                    <Stack direction={'row'} alignItems={'center'} gap={1}>
                                        <LinkedInIcon color="info" fontSize='large' sx={{ filter: 'brightness(0)' }} />
                                    </Stack>
                                </Link>
                                <Link href="https://t.me/napuleth" target="_blank" underline="none" color={theme.palette.text.primary}>
                                    <Stack direction={'row'} alignItems={'center'} gap={1}>
                                        <TelegramIcon color="info" fontSize='large' sx={{ filter: 'brightness(0)' }} />
                                    </Stack>
                                </Link>
                            </Stack>

                        </Stack>
                    </Stack>
                </MobileMenu>
            </Stack>
        </>
    )
}

export default Navbar;