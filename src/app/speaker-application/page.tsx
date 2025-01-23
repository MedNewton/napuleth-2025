'use client';

import { Box, Stack, Typography, Button, Link, keyframes } from "@mui/material";
import theme from "@theme/theme";
import Navbar from "@components/Navbar";
import TopSpeakers2024 from "@sections/TopSpeakers2024";
import Footer from "@sections/Footer";

import EastIcon from '@mui/icons-material/East';
import bastoni from '@assets/asso di bastoni.webp'


const moveLeftRight = keyframes`
    0% { transform: translateX(0px); }
    100% { transform: translateX(6px); }
`;


const SpeakerApplication = () => {
    return (
        <Box width={'100vw'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} padding={2} gap={3} sx={{
            overflow: 'hidden'
        }}>
            <Stack width={"100%"} alignItems={'center'} gap={5} borderRadius={"1.2rem"} position={'relative'} overflow={'hidden'} sx={{
                backgroundColor: theme.palette.ne_lightblue.main
            }}>
                <Box height={'100%'} width={"20%"} display={{ xs: 'none', lg: 'block' }} sx={{
                    position: 'absolute',
                    left: '-5%',
                    backgroundImage: `url('${bastoni.src}')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                </Box>
                <Navbar />
                <Stack width={{ xs: '100%', lg: '60%' }} alignItems={'center'} gap={2} paddingBottom={3}>
                    <Typography variant="h3">
                        Apply as a speaker
                    </Typography>
                    <Typography variant="h6" textAlign={'center'} paddingX={2}>
                        We invite passionate speakers to apply for Napuleth 2025! Share your expertise, inspire others, and be part of an exciting event that celebrates innovation and creativity. Submit your proposal today and help make this year&apos;s event unforgettable!
                    </Typography>
                    <Link href="https://docs.google.com/forms/d/1ab_a3VH-Ojogg2U6r0bqDN2iZ5ggYvRWID6EFtpSo2Y/viewform?edit_requested=true&pli=1" target="_blank" underline="none" width={'fit-content'}>
                        <Button sx={{
                            backgroundColor: theme.palette.ne_rose.main,
                            paddingRight: 2,
                            whiteSpace: 'nowrap',
                            '&:hover': {
                                backgroundColor: "black",
                                color: theme.palette.background.default
                            }
                        }}>
                            <Typography variant="h5" paddingX={1.5} paddingY={1} lineHeight={1}>Apply as a speaker</Typography>
                            <EastIcon fontSize="medium" sx={{
                                animation: `${moveLeftRight} 1s infinite alternate`
                            }} />
                        </Button>
                    </Link>
                </Stack>
                <Box height={'100%'} width={"20%"} display={{ xs: 'none', lg: 'block' }} sx={{
                    position: 'absolute',
                    right: '-5%',
                    backgroundImage: `url('${bastoni.src}')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    transform: 'scaleX(-1)'
                }}></Box>
            </Stack>
            <TopSpeakers2024 />
            <Footer />
        </Box>
    );
}

export default SpeakerApplication;
