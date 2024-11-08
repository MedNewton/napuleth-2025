import { Stack, Typography, Button } from "@mui/material"
import theme from "@theme/theme"
import Link from '@mui/material/Link';
import Image from "next/image";

import bg from "@assets/img1.webp"
import calendar from '@assets/calendar.webp'

import CallMadeIcon from '@mui/icons-material/CallMade';

const AttractSpeakers = () => {
    return (
        <Stack width={'100%'} direction="row" alignItems="stretch" justifyContent={'center'} gap={1.5}>
            <Stack width={'60%'} gap={1.5}>
                <Typography variant="h3" width={'90%'}>
                    Bringing New Faces To The Fascinating World Of <span style={{
                        padding: '0.6rem',
                        borderRadius: '5rem',
                        backgroundColor: theme.palette.ne_lightblue.main
                    }}>Ethereum</span>
                </Typography>
                <Stack width={'100%'} justifyContent={'space-between'} borderRadius={'1.8rem'} padding={2} sx={{
                    backgroundImage: `url('${bg.src}')`,
                    backgroundPosition: 'center',
                    backgroundSize: '130%',
                    backgroundRepeat: 'no-repeat',
                    aspectRatio: 16 / 9
                }}>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'end'}>
                        <Button sx={{
                            backgroundColor: theme.palette.background.default
                        }}>
                            <Typography variant="h6" paddingX={1}>Become a Sponsor</Typography>
                        </Button>
                    </Stack>
                    <Stack width={'100%'} direction={'column'} alignItems={'start'} justifyContent={'start'}>
                        <Stack width={'80%'} gap={1} sx={{
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
            <Stack width={'40%'} gap={1.5}>
                <Stack width={'100%'} height={'50%'} justifyContent={'space-between'} borderRadius={'1.8rem'} padding={2} sx={{
                    backgroundColor: theme.palette.ne_lightblue.main
                }}>
                    <Stack gap={1}>
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                            <Typography variant="h4">Pitch Deck</Typography>
                            <Button sx={{
                                backgroundColor: theme.palette.background.default,
                                borderRadius: '50%',
                                aspectRatio: 1,
                                padding: 0
                            }}>
                                <CallMadeIcon fontSize="large" />
                            </Button>
                        </Stack>
                        <Typography variant="h6" width={'60%'}>Get to know all the necessary info about NapulETH 2025 : Tracks, Goals, and much more ...</Typography>
                    </Stack>
                    <Link href="#"><Typography variant="h5">Read Our Pitch Deck</Typography></Link>
                </Stack>
                <Stack width={'100%'} height={'50%'} borderRadius={'1.8rem'} padding={2} position={'relative'} justifyContent={'space-between'} sx={{
                    backgroundColor: theme.palette.ne_green.main
                }}>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'end'}>
                        <Button sx={{
                            backgroundColor: theme.palette.background.default,
                            borderRadius: '50%',
                            aspectRatio: 1,
                            padding: 0
                        }}>
                            <CallMadeIcon fontSize="large" />
                        </Button>
                    </Stack>
                    <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} position={'relative'} zIndex={2}>
                        <Button sx={{
                            backgroundColor: theme.palette.background.default
                        }}>
                            <Typography variant="h5" paddingX={1}>Check 2024 agenda</Typography>
                        </Button>
                    </Stack>
                    <Stack height={'100%'} width={'100%'} alignItems={'center'} justifyContent={'center'} style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}>
                        <Image src={calendar} alt="event agenda calendar napuleth 2024" height={300} width={300}></Image>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default AttractSpeakers