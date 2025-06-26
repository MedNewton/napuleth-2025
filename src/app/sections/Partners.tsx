'use client'
import { Stack, Typography, Link } from "@mui/material";
import Grid from '@mui/material/Grid2';
import theme from "@theme/theme";
import 'react-multi-carousel/lib/styles.css';

import { type Partner, PartnersList } from "@data/Partners";

const Partners = () => {
    return (
        <Stack width={'100%'} gap={2}>
            <Typography variant="h4">Our Partners</Typography>
            <Stack width={'100%'}>
                <Grid container spacing={2}>
                    {
                        PartnersList.map((partner: Partner, key) => {
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
                                            <Stack minWidth={{ xs: '80%', lg: '80%' }} minHeight={{ xs: '2rem', lg: '4rem' }} width={{ xs: '80%', lg: '80%' }} height={{ xs: '4rem', lg: '80%' }} sx={{
                                                backgroundImage: `url('${partner.logo}')`,
                                                backgroundPosition: 'center',
                                                backgroundSize: { xs: partner.mobilePercentage, lg: partner.percentage },
                                                backgroundRepeat: 'no-repeat',
                                                filter: partner.invert ? 'invert(1)' : 'none'
                                            }}></Stack>
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

export default Partners;