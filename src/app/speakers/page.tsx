"use client";

import { useState } from "react";
import { Link, Stack, Typography, TextField } from "@mui/material";
import Grid from '@mui/material/Grid2';
import theme from "@theme/theme";
import { type Speaker, speakersList } from "@data/SpeakersList";
import SpeakersPageCard from "@components/speakersPageCard";
import Image from "next/image";
import horn from "@assets/rockHand.webp";
import Navbar from "@components/Navbar";
import Footer from "@sections/Footer";
import SpeakerDrawer from "@components/speakerDrawer";
import talk from '@assets/talk.webp'
import ProgressiveBlurSpeakerCard from "@components/ProgressiveBlurSpeakerCard";
import { MdOutlineArrowOutward } from "react-icons/md";

const SpeakersPage = () => {
    const [open, setOpen] = useState(false);
    const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker>(speakersList[0]!);
    const [search, setSearch] = useState('');

    const handleOpen = (speaker: Speaker) => {
        setSelectedSpeaker(speaker);
        setOpen(true);
    }

    const handleClose = () => {
        setSelectedSpeaker(speakersList[0]!);
        setOpen(false);
    }
    return (
        <>
            <Stack width={'100%'} alignItems={'center'} gap={2} paddingX={{ xs: 1, md: 1, lg: 2 }}>
                <Stack width={'100%'} height={'100%'} alignItems={'start'} justifyContent={'center'}>
                    <Navbar isHome={false} />
                </Stack>
                <Stack width={{ xs: '100%', lg: '60%' }} alignItems={'center'} gap={2} paddingX={4} paddingTop={3} paddingBottom={3}>
                    <Typography variant="h3" textAlign={'center'}>
                        Speakers
                    </Typography>
                    <Typography variant="h5" textAlign={'center'}>
                        Explore the Ethereum community with interactive workshops, panels, and networking. Connect with developers, investors, and enthusiasts while discovering the latest innovations. Don’t miss these enriching experiences!
                    </Typography>
                    <TextField id="standard-basic" label="" placeholder="Search by name ..." variant="standard" value={search} onChange={(e) => setSearch(e.target.value)} sx={{
                        height: 60,
                        maxHeight: 60,
                        width: '100%',
                        border: "1.5px solid #000",
                        borderRadius: '1.8rem',
                        outline: "none",
                        backgroundColor: "transparent",
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 0,
                        paddingTop: 1,
                        paddingBottom: 1,
                        paddingX: 2,
                        fontSize: "1.4rem",
                        fontWeight: 600,
                        "& .MuiInputBase-input::placeholder": {
                            fontSize: "1.2rem",
                            fontWeight: 600,
                            lineHeight: 1,
                            paddingTop: 2,
                            paddingBottom: 0,
                        },
                        "&:before": {
                            display: "none",
                        },
                        "&:after": {
                            display: "none",
                        },
                        "&:hover": {
                            border: "1.5px solid #000",
                            outline: "none",
                            "&:before": {
                                display: "none",
                            },
                            "&:after": {
                                display: "none",
                            },
                        },
                        "& .MuiInputBase-root": {
                            padding: 0,
                            margin: 0,
                            height: '100%',
                            width: '100%',
                            border: "none",
                            outline: "none",
                            "&:before": {
                                display: "none",
                            },
                            "&:after": {
                                display: "none",
                            },
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                            outline: "none",
                            "&:before": {
                                display: "none",
                            },
                            "&:after": {
                                display: "none",
                            },
                        },
                        "&:focus": {
                            border: "2px solid grey",
                            outline: "none",
                            "&:before": {
                                display: "none",
                            },
                            "&:after": {
                                display: "none",
                            },
                        },

                    }} />
                </Stack>
                <Stack display={{ xs: 'none', lg: 'none' }} width={'100%'} height={'100%'} direction={{ xs: 'column', lg: 'row' }} alignItems={'stretch'} justifyContent={'center'}>
                    <Stack width={'40%'} minHeight={'50vh'} alignItems={'start'} justifyContent={'start'} borderRadius={'1.8rem'} padding={2}>
                        <Stack width={'100%'} borderRadius={'1.6rem'} gap={{ xs: 2, lg: 4 }} padding={3} sx={{
                            backgroundColor: theme.palette.background.default
                        }}>
                            <Typography display={{ xs: 'none', lg: 'block' }} lineHeight={0.8} variant="h3">
                                Speakers
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
                    <Stack width={'60%'} minHeight={'50vh'} alignItems={'end'} justifyContent={'end'} borderRadius={'1.8rem'} padding={2} sx={{
                        backgroundColor: theme.palette.ne_lightblue.main,
                        backgroundImage: `url('${talk.src}')`,
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }}>
                    </Stack>
                </Stack>
                <Grid container spacing={2} height={'100%'} width={'100%'} paddingX={4}>
                    {
                        speakersList
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .filter((speaker: Speaker) => search == "" || speaker.name.toLowerCase().includes(search.toLowerCase())).map((speaker: Speaker) => (
                                <Grid
                                    height={'100%'}
                                    key={speaker.id}
                                    onClick={() => handleOpen(speaker)}
                                    size={{
                                        xs: 12,
                                        md: 6,
                                        lg: 3
                                    }}
                                >
                                    <ProgressiveBlurSpeakerCard speaker={speaker} />
                                </Grid>
                            ))
                    }
                </Grid>
                <Stack width={'100%'} height={'100%'}>
                    <Footer />
                </Stack>
            </Stack>
            <SpeakerDrawer speaker={selectedSpeaker} open={open} onClose={handleClose} />

        </>
    )
}

export default SpeakersPage;
