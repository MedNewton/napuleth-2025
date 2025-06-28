'use client'
import { Stack, Typography, Link } from "@mui/material";
import Grid from '@mui/material/Grid2';
import Image from "next/image";
import theme from "@theme/theme";
import 'react-multi-carousel/lib/styles.css';
import { type Partner, MediaPartnersList } from "@data/MediaPartners";


const MediaPartners = () => {
    return (
        <Stack width={'100%'} gap={2}>
            <Typography variant="h4">Media Partners</Typography>
            <Stack width={'100%'}>
                <Grid container spacing={2}>
                    {
                        MediaPartnersList.map((partner: Partner, key) => {
                            return (
                                <Grid size={{ xs: 6, md: 4, lg: 2 }} key={key}>
                                    <Link key={key} href={partner.link} target="_blank" underline="none" sx={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <Stack key={key} direction="row" alignItems={'center'} justifyContent={'center'} marginX={1.5} sx={{
                                            backgroundColor: theme.palette.background.default,
                                            borderRadius: '20rem',
                                            paddingX: 2.5,
                                            paddingY: 0.5,
                                            minWidth: '12rem',
                                            minHeight: '5rem',
                                            boxShadow: `
                                    0 0 #000000,
                                    0 0 #000000,
                                    0 6px 18px rgba(0, 0, 0, 0.09)
                                    `
                                        }}>
                                            <Stack display={{xs: "none", lg: "flex"}} alignItems={"center"} justifyContent={"center"} minWidth={{ xs: '80%', lg: '80%' }} minHeight={{ xs: '2rem', lg: '4rem' }} width={{ xs: '80%', lg: '80%' }} height={{ xs: '4rem', lg: '80%' }} sx={{
                                                overflow: "hidden",
                                                filter: partner.invert ? 'invert(1)' : 'none'
                                            }}>
                                                <Image src={partner.logo} alt="" width={100} height={50} style={{
                                                    width: partner.percentage,
                                                    height: partner.percentage
                                                }}>

                                                </Image>
                                            </Stack>
                                            <Stack display={{xs: "flex", lg: "none"}} alignItems={"center"} justifyContent={"center"} minWidth={{ xs: '80%', lg: '80%' }} minHeight={{ xs: '2rem', lg: '4rem' }} width={{ xs: '80%', lg: '80%' }} height={{ xs: '80%', lg: '80%' }} sx={{
                                                overflow: "hidden",
                                                filter: partner.invert ? 'invert(1)' : 'none'
                                            }}>
                                                <Image src={partner.logo} alt="" width={100} height={50} style={{
                                                    width: partner.mobilePercentage,
                                                    height: partner.mobilePercentage,
                                                    objectFit: "contain"
                                                }}>

                                                </Image>
                                            </Stack>
                                        </Stack>
                                    </Link>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Stack>
        </Stack>
    )
}

export default MediaPartners;