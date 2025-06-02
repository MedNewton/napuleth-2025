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
        <Stack width={'100%'} gap={2}>
            <Stack width={'100%'} height={'100%'} alignItems={'start'} justifyContent={'center'}>
                <Navbar isHome={false} />
            </Stack>
            <Typography variant="h4">Speakers</Typography>
            <Grid container spacing={0} sx={{
                '--Grid-borderWidth': '2px',
                borderTop: '2px solid #000',
                borderLeft: '2px solid #000',
                borderColor: 'divider',
                '& > div': {
                    borderRight: '2px solid #000',
                    borderBottom: '2px solid #000',
                    borderColor: 'divider',
                },
            }}>
                {speakersList.sort((a, b) => a.name.localeCompare(b.name)).map((speaker: Speaker) => (
                    <Grid key={speaker.id} size={{ xs: 12, md: 4, lg: 3 }}>
                        <Stack width={'100%'} height={'100%'} onClick={() => handleOpen(speaker)} sx={{
                            aspectRatio: '1/1',
                            border: `1px solid #000`,
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
