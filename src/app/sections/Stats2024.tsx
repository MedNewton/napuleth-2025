import { Stack, Typography } from "@mui/material";
import theme from "@theme/theme";
import Image from "next/image";

import vid from '@assets/vid.webp'
import talk from '@assets/talk.webp'
import attendee from '@assets/attendee.webp'
import circularText from '@assets/CircularText.webp'

import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CallMadeIcon from '@mui/icons-material/CallMade';

const Stats2024 = () => {
    return (
        <Stack width={'100%'} gap={2}>
            <Stack>
                <Typography variant="h4">About The Event</Typography>
                <Typography variant="h6" color={theme.palette.text.secondary}>NapulETH 2024</Typography>
            </Stack>
            <Stack width={'100%'} direction={'row'} alignItems={'stretch'} gap={1.5}>
                <Stack width={'70%'} alignItems={'stretch'} gap={1.5}>
                    <Stack height={'50vh'} width={'100%'} alignItems={'center'} justifyContent={'center'} borderRadius={"1.8rem"} sx={{
                        backgroundImage: `url('${vid.src}')`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        overflow: 'hidden',
                        position: 'relative',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0, 0, 0, 0.5)', // Darken the image with a semi-transparent black
                            pointerEvents: 'none', // Prevent overlay from interfering with interactions
                        },
                    }}>
                        <PlayCircleOutlineIcon color="info" fontSize="large" sx={{
                            scale: '2.5'
                        }} />
                    </Stack>
                    <Stack height={'40vh'} width={'100%'} direction={'row'} alignItems={'stretch'} gap={1.5}>
                        <Stack width={'40%'} alignItems={'center'} justifyContent={'center'} borderRadius={'1.8rem'} sx={{
                            backgroundColor: theme.palette.ne_rose.main,
                            aspectRatio: 1,
                            position: 'relative'
                        }}>
                            <Stack id="circularText" width={'80%'} borderRadius={'50%'} padding={1.5} sx={{
                                backgroundColor: theme.palette.background.default,
                                backgroundImage: `url('${circularText.src}')`,
                                backgroundPosition: 'center',
                                backgroundSize: '90%',
                                backgroundRepeat: 'no-repeat',
                                aspectRatio: 1,
                                animation: "spin 10s linear infinite",
                                "@keyframes spin": {
                                    "0%": {
                                        transform: "rotate(-360deg)",
                                    },
                                    "100%": {
                                        transform: "rotate(0deg)",
                                    },
                                },
                            }}>
                            </Stack>
                            <Stack width={'50%'} alignItems={'center'} justifyContent={'center'} position={'absolute'} top={'50%'} left={'50%'} borderRadius={'50%'} gap={1} sx={{
                                backgroundColor: theme.palette.ne_rose.main,
                                aspectRatio: 1,
                                transform: 'translate(-50%, -50%)'
                            }}>
                                <CallMadeIcon fontSize="large" sx={{
                                    scale: '1.5'
                                }} />
                                <Typography variant="h6" textAlign={'center'}>Visit 2024 Website</Typography>
                            </Stack>
                        </Stack>
                        <Stack width={'100%'} justifyContent={'end'} borderRadius={'1.8rem'} padding={2} sx={{
                            backgroundColor: theme.palette.ne_lightblue.main,
                            backgroundImage: `url('${talk.src}')`,
                            backgroundPosition: 'center 85%',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}>
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-around'} borderRadius={'1.6rem'} gap={4} padding={3} sx={{
                                backgroundColor: theme.palette.background.default
                            }}>
                                <Typography lineHeight={0.8} variant="h1">
                                    80+<br />
                                    <span style={{
                                        display: 'block',
                                        fontSize: '2.6rem',
                                        fontWeight: 600
                                    }}>Speakers</span>
                                </Typography>
                                <Typography variant="h5">
                                    From different backgrounds, industries and countries, enriched NapulETH with Talks, Panels, workshops ...
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack width={'30%'} height={'91vh'} alignItems={'center'} justifyContent={'center'} gap={1.5}>
                    <Stack width={'100%'} height={'25%'} direction={'row'} alignItems={'center'} justifyContent={'space-around'} gap={4} padding={2} borderRadius={'1.8rem'} sx={{
                        backgroundColor: theme.palette.ne_gold.main
                    }}>
                        <Typography lineHeight={0.8} variant="h2">
                            30+<br />
                            <span style={{
                                display: 'block',
                                fontSize: '1.6rem',
                                fontWeight: 600
                            }}>Sponsors</span>
                        </Typography>
                        <Typography variant="h6" fontWeight={600}>
                            From different sectors participated in making NapulETH 2024 a great event.
                        </Typography>
                    </Stack>
                    <Stack width={'100%'} height={'50%'} justifyContent={'end'} padding={2} borderRadius={'1.8rem'} sx={{
                        backgroundColor: theme.palette.ne_green.main,
                        backgroundImage: `url('${attendee.src}')`,
                        backgroundPosition: 'center 100%',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}>
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-around'} borderRadius={'1.6rem'} gap={4} padding={3} sx={{
                            backgroundColor: theme.palette.ne_purple.main
                        }}>
                            <Typography lineHeight={0.8} variant="h2">
                                330+<br />
                                <span style={{
                                    display: 'block',
                                    fontSize: '2.6rem',
                                    fontWeight: 600
                                }}>Attendees</span>
                            </Typography>
                            <Typography variant="h5">
                            Who loved NapulETH2024 ❤️❤️
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack width={'100%'} height={'25%'} direction={'row'} alignItems={'center'} justifyContent={'space-around'} gap={4} padding={2} borderRadius={'1.8rem'} sx={{
                        backgroundColor: theme.palette.ne_lightblue.main
                    }}>
                        <Typography lineHeight={0.8} variant="h2">
                            60+<br />
                            <span style={{
                                display: 'block',
                                fontSize: '1.8rem',
                                fontWeight: 600
                            }}>Partners</span>
                        </Typography>
                        <Typography variant="h6" fontWeight={600}>
                            From and outside Italy did their best to make NapulETH 2024 better.
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Stats2024