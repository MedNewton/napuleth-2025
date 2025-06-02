"use client";

import { useState } from "react";
import { Stack, Typography } from "@mui/material";
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

const SpeakersPage = () => {
    const [open, setOpen] = useState(false);
    const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker>(speakersList[0]!);

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
            <Stack width={'100%'} gap={2} paddingX={{ xs: 1, md: 1, lg: 2 }}>
                <Stack width={'100%'} height={'100%'} alignItems={'start'} justifyContent={'center'}>
                    <Navbar isHome={false} />
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
                <Grid container spacing={{ xs: 1, md: 0.5, lg: 0.5 }} sx={{
                    borderRadius: '1rem',
                }}>
                    {speakersList.sort((a, b) => a.name.localeCompare(b.name)).map((speaker: Speaker) => (
                        <Grid key={speaker.id} size={{ xs: 12, md: 4, lg: 3 }}>
                            <Stack width={'100%'} height={'100%'} onClick={() => handleOpen(speaker)} sx={{
                                aspectRatio: '1/1',
                            }}>
                                <SpeakersPageCard speaker={speaker} />
                            </Stack>
                        </Grid>
                    ))}
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
