import Link from "next/link";
import { Stack, Typography, Link as MUILink } from "@mui/material";
import theme from "@theme/theme";


import vid from '@assets/vid.webp'
import talk from '@assets/talk.webp'
import attendee from '@assets/attendee.webp'
import circularText from '@assets/CircularText.webp'

import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CallMadeIcon from '@mui/icons-material/CallMade';

const Stats2024 = () => {
    return (
        <Stack width={'100%'} gap={2} position={'relative'}>
            <Stack>
                <Typography variant="h4">About The Event</Typography>
                <Typography variant="h6" color={theme.palette.text.secondary}>NapulETH 2024</Typography>
            </Stack>
            <Stack width={'100%'} direction={{ xs: 'column', lg: 'row' }} alignItems={'stretch'} gap={1.5}>
                <Stack width={{ xs: '100%', lg: '70%' }} alignItems={'stretch'} gap={1.5}>
                    <Stack height={{ xs: '25vh', lg: '50vh' }} width={'100%'} alignItems={'center'} justifyContent={'center'} borderRadius={"1.8rem"} sx={{
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
                        <Link
                            href="https://x.com/napuleth/status/1852008850938880080?s=52"
                            target="_blank"
                            style={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textDecoration: 'none'
                            }}
                        >
                            <Stack alignItems={'center'} justifyContent={'center'} sx={{
                                scale: '2.5'
                            }}>
                                <PlayCircleOutlineIcon color="info" fontSize="large" />
                                <Typography variant="caption" fontWeight={600} color={theme.palette.background.default} position={'relative'} zIndex={5}>2024 Aftermovie</Typography>
                            </Stack>
                        </Link>
                    </Stack>
                    <Stack height={{ xs: 'auto', lg: '40vh' }} width={'100%'} direction={{ xs: 'column', sm: 'row' }} alignItems={'stretch'} gap={1.5}>
                        <Stack width={{ xs: '100%', lg: '40%' }} alignItems={'center'} justifyContent={'center'} borderRadius={'1.8rem'} sx={{
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
                            <MUILink href='/archive/2024' underline="hover" target="_blank" rel="noopener">
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
                            </MUILink>
                        </Stack>
                        <Stack width={'100%'} justifyContent={'end'} borderRadius={'1.8rem'} padding={2} sx={{
                            backgroundColor: theme.palette.ne_lightblue.main,
                            backgroundImage: `url('${talk.src}')`,
                            backgroundPosition: 'center 85%',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
                        }}>
                            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-around'} borderRadius={'1.6rem'} gap={{ xs: 2, lg: 4 }} padding={3} sx={{
                                backgroundColor: theme.palette.background.default
                            }}>
                                <Typography display={{ xs: 'none', lg: 'block' }} lineHeight={0.8} variant="h1">
                                    80+<br />
                                    <span style={{
                                        display: 'block',
                                        fontSize: '2.6rem',
                                        fontWeight: 600
                                    }}>Speakers</span>
                                </Typography>
                                <Typography display={{ xs: 'none', lg: 'block' }} variant="h5">
                                    From different backgrounds, industries and countries, enriched NapulETH with Talks, Panels, workshops ...
                                </Typography>

                                <Typography display={{ xs: 'block', lg: 'none' }} lineHeight={0.8} variant="h2">
                                    80+<br />
                                    <span style={{
                                        display: 'block',
                                        fontSize: '1.6rem',
                                        fontWeight: 600
                                    }}>Speakers</span>
                                </Typography>
                                <Typography display={{ xs: 'block', lg: 'none' }} variant="h6" fontWeight={600}>
                                    From different backgrounds, industries and countries, enriched NapulETH with Talks, Panels, workshops ...
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack width={{ xs: '100%', lg: '30%' }} direction={{ xs: 'column', sm: 'row', lg: 'column' }} flexWrap={{xs: 'nowrap', sm: 'wrap', lg: 'nowrap'}} height={{xs: '91vh', sm: '100%', lg: '91vh'}} alignItems={'center'} justifyContent={{xs: 'center', sm: 'space-around', lg: 'center'}} gap={1.5}>
                    <Stack width={{xs: '100%', sm: '48%', lg: '100%'}} height={{xs: '25%', sm: 'auto', lg: '33%'}} direction={'row'} alignItems={'center'} justifyContent={'space-around'} gap={4} padding={{xs: 2, sm: 3, md: 2}} borderRadius={'1.8rem'} sx={{
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
                    <Stack width={{xs: '100%', sm: '48%', lg: '100%'}} height={{xs: '50%', sm: 'auto', lg: '33%'}} justifyContent={'end'} padding={{xs: 2, sm: 0.5, md: 2}} borderRadius={'1.8rem'} sx={{
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
                                900+<br />
                                <span style={{
                                    display: 'block',
                                    fontSize: '2.6rem',
                                    fontWeight: 600
                                }}>Attendees</span>
                            </Typography>
                            <Typography variant="h5" fontSize={{xs: '1rem', sm: '1.2rem', md: '1.4rem'}}>
                                Who loved NapulETH2024 ❤️❤️
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack width={{xs: '100%', sm: '100%', lg: '100%'}} height={{xs: '25%', sm: 'auto', lg: '33%'}} direction={'row'} alignItems={'center'} justifyContent={'space-around'} gap={4} padding={{xs: 2, sm: 4, md: 2}} borderRadius={'1.8rem'} sx={{
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