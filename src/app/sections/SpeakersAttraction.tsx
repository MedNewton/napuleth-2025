import { Stack, Typography, Button } from "@mui/material"
import theme from "@theme/theme"
import Link from '@mui/material/Link';
import Image from "next/image";

import bg from "@assets/img1.webp"
import calendar from '@assets/calendar.webp'

import CallMadeIcon from '@mui/icons-material/CallMade';

const AttractSpeakers = () => {
    return (
        <Stack width={'100%'} direction={{ xs: 'column', lg: 'row' }} alignItems="stretch" justifyContent={'center'} gap={1.5}>
            <Stack width={{ xs: '100%', lg: '60%' }} gap={1.5}>
                <Typography display={{ xs: 'none', lg: 'block' }} variant="h3" width={'90%'}>
                    Bringing New Faces To The Fascinating World Of <span style={{
                        padding: '0.6rem',
                        borderRadius: '5rem',
                        backgroundColor: theme.palette.ne_lightblue.main
                    }}>Ethereum</span>
                </Typography>
                <Typography display={{ xs: 'block', lg: 'none' }} variant="h4" fontSize={'2.5rem'} width={'92%'}>
                    Bringing New Faces To The Fascinating World Of <span style={{
                        padding: '0.6rem',
                        borderRadius: '5rem',
                        backgroundColor: theme.palette.ne_lightblue.main
                    }}>Ethereum</span>
                </Typography>
                <Stack width={'100%'} justifyContent={'space-between'} borderRadius={'1.8rem'} padding={2} gap={{ xs: 4, lg: 0 }} sx={{
                    backgroundImage: `url('${bg.src}')`,
                    backgroundPosition: 'center',
                    backgroundSize: '130%',
                    backgroundRepeat: 'no-repeat',
                    aspectRatio: { xs: 'auto', lg: 16 / 9 }
                }}>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'end'}>
                        <Link href="/coming_soon" underline="none">
                            <Button sx={{
                                backgroundColor: theme.palette.background.default
                            }}>
                                <Typography variant="h6" paddingX={1}>Become a Sponsor</Typography>
                            </Button>
                        </Link>
                    </Stack>
                    <Stack width={'100%'} direction={'column'} alignItems={'start'} justifyContent={'start'}>
                        <Stack width={{ xs: '100%', lg: '80%' }} gap={1} sx={{
                            backgroundColor: theme.palette.background.default,
                            padding: 1,
                            borderRadius: '1.2rem',
                        }}>
                            <Typography variant="subtitle1">&#9679; Sponsor</Typography>
                            <Typography variant="h4">Become a sponsor of the biggest We3 event in southern Italy: NapulETH 2025 </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack width={{ xs: '100%', lg: '40%' }} gap={1.5}>
                <Stack width={'100%'} height={'50%'} justifyContent={'space-between'} borderRadius={'1.8rem'} padding={2} sx={{
                    backgroundColor: theme.palette.ne_lightblue.main
                }}>
                    <Stack gap={{ xs: 2, lg: 1 }}>
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                            <Typography variant="h4">Pitch Deck</Typography>
                            <Link underline="hover" href="https://online.fliphtml5.com/ogjyx/lysx/" target="_blank" rel="noopener">
                                <Button sx={{
                                    backgroundColor: theme.palette.background.default,
                                    borderRadius: '50%',
                                    aspectRatio: 1,
                                    padding: 0
                                }}>
                                    <CallMadeIcon fontSize="large" />
                                </Button>
                            </Link>
                        </Stack>
                        <Typography variant="h6" width={{ xs: '100%', lg: '60%' }}>Get to know all the necessary info about NapulETH 2025 : Tracks, Goals, and much more ...</Typography>
                    </Stack>
                    <Link underline="hover" href="https://online.fliphtml5.com/ogjyx/lysx/" target="_blank" rel="noopener"><Typography variant="h5">Read Our Pitch Deck</Typography></Link>
                </Stack>
                <Stack width={'100%'} height={{ xs: '100%', lg: '50%' }} borderRadius={'1.8rem'} padding={{ xs: 2, lg: 2 }} position={'relative'} justifyContent={{ xs: 'end', lg: 'space-between' }} sx={{
                    backgroundColor: theme.palette.ne_green.main,
                    overflowX: 'hidden',
                    overflowY: 'hidden'
                }}>
                    <Stack display={{ xs: 'none', lg: 'flex' }} direction={'row'} alignItems={'center'} justifyContent={'end'}>
                        <Link href="https://napul.eth.limo/agenda.html" underline="hover" target="_blank" rel="noopener" position={'relative'} zIndex={10}>
                            <Button sx={{
                                backgroundColor: theme.palette.background.default,
                                borderRadius: '50%',
                                aspectRatio: 1,
                                padding: 0
                            }}>
                                <CallMadeIcon fontSize="large" />
                            </Button>
                        </Link>
                    </Stack>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} position={'relative'} marginTop={{ xs: '40%', lg: 0 }} zIndex={2}>
                        <Button sx={{
                            backgroundColor: theme.palette.background.default
                        }}>
                            <Link href="https://napul.eth.limo/agenda.html" underline="hover" target="_blank" rel="noopener">
                                <Typography variant="h5" paddingX={1}>Check 2024 agenda</Typography>
                            </Link>
                        </Button>
                    </Stack>
                    <Stack display={{ xs: 'none', lg: 'flex' }} height={'100%'} width={'100%'} alignItems={'center'} justifyContent={'center'} style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}>
                        <Image src={calendar} alt="event agenda calendar napuleth 2024" height={300} width={300}></Image>
                    </Stack>

                    <Stack display={{ xs: 'flex', lg: 'none' }} height={'100%'} width={'100%'} alignItems={'center'} justifyContent={'center'} style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}>
                        <Image src={calendar} alt="event agenda calendar napuleth 2024" height={200} width={200}></Image>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default AttractSpeakers