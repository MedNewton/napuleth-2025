'use client';

import { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import theme from "@theme/theme";
import Navbar from "@components/Navbar";
import Footer from "@sections/Footer";

const Maps = () => {

    const [selectedMap, setSelectedMap] = useState<string>("ground");

    const handleMapClick = (map: string) => {
        setSelectedMap(map);
    }

    return (
        <Box width={'100vw'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} padding={2} gap={3} sx={{
            overflow: 'hidden',
            backgroundColor: theme.palette.ne_lightblue.main
        }}>
            <Stack width={"100%"} alignItems={'center'} gap={5} borderRadius={"1.2rem"} position={'relative'} overflow={'hidden'} sx={{
                backgroundColor: theme.palette.ne_lightblue.main
            }}>
                <Navbar isHome={false} />
                <Stack width={{ xs: '100%', lg: '60%' }} alignItems={'center'} gap={2} paddingBottom={3}>
                    <Typography variant="h3" textAlign={'center'}>
                        Map
                    </Typography>
                    <Typography variant="h5" textAlign={'center'}>
                        Here you can find detailed maps of the villa where the event will take place.
                    </Typography>
                </Stack>
                <Stack width={"100%"} height={"100%"} direction={{xs: 'column', lg: 'row'}} alignItems={'center'} justifyContent={'center'} gap={{xs: 2, lg: 4}} position={'relative'} paddingX={{ xs: 0, lg: 8 }} paddingBottom={2}>
                    <Button variant='outlined' onClick={() => handleMapClick("ground")} sx={{
                        background: selectedMap === "ground" ? theme.palette.text.primary : theme.palette.ne_rose.main,
                        color: selectedMap === "ground" ? theme.palette.background.default : theme.palette.text.primary,
                        width: {xs: '100%', lg: '50%'},
                        fontWeight: 700,
                        position: 'relative',
                        zIndex: 2,
                        '&:hover': {
                            backgroundColor: "black",
                            color: theme.palette.background.default
                        }
                    }}>
                        <Typography variant="h6" paddingTop={0.5} fontWeight={700}>
                            Ground Floor
                        </Typography>
                    </Button>
                    <Button variant='outlined' onClick={() => handleMapClick("2nd")} sx={{
                        background: selectedMap === "2nd" ? theme.palette.text.primary : theme.palette.ne_rose.main,
                        color: selectedMap === "2nd" ? theme.palette.background.default : theme.palette.text.primary,
                        width: {xs: '100%', lg: '50%'},
                        fontWeight: 700,
                        position: 'relative',
                        zIndex: 2,
                        '&:hover': {
                            backgroundColor: "black",
                            color: theme.palette.background.default
                        }
                    }}>
                        <Typography variant="h6" paddingTop={0.5} fontWeight={700}>
                            2nd Floor
                        </Typography>
                    </Button>
                </Stack>
                {
                    selectedMap === "2nd" && (
                        <Stack width={"100%"} height={"100%"} position={'relative'} paddingX={{ xs: 0, lg: 8 }} paddingBottom={2} overflow={'hidden'} borderRadius={"1.2rem"}>
                            <iframe
                                src="https://online.fliphtml5.com/ogjyx/twfq/" width="100%" height="100%" style={{ border: 'none', height: '100vh' }} allowFullScreen ></iframe>
                        </Stack>
                    )
                }
                {
                    selectedMap === "ground" && (
                        <Stack width={"100%"} height={"100%"} position={'relative'} paddingX={{ xs: 0, lg: 8 }} paddingBottom={2} overflow={'hidden'} borderRadius={"1.2rem"}>
                            <iframe
                                src="https://online.fliphtml5.com/ogjyx/skcq/" width="100%" height="100%" style={{ border: 'none', height: '100vh' }} allowFullScreen ></iframe>
                        </Stack>
                    )
                }
            </Stack>
            <Footer />
        </Box>
    );
}

export default Maps;
