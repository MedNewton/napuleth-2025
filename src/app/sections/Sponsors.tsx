'use client'
import { Stack, Typography, Button, Link } from "@mui/material";
import Grid from '@mui/material/Grid2';
import theme from "@theme/theme";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { type ArrowProps } from 'react-multi-carousel/lib/types';
import Image from "next/image";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Marquee from "react-fast-marquee";


import { type Sponsor, SponsorsList } from "@data/Sponsors";

interface CustomLeftArrowProps extends ArrowProps {
    myOwnStuff: string;
}

interface CustomRightArrowProps extends ArrowProps {
    myOwnStuff: string;
}

const CustomLeftArrow = ({ onClick }: CustomLeftArrowProps) => {
    return (
        <Stack alignItems={'center'} justifyContent={'center'} position={'absolute'} left={0} marginX={{ xs: 0.5, lg: 5 }} sx={{
            scale: { xs: '0.6', lg: '1' },
            top: '20%',
        }}>
            <Button onClick={onClick} sx={{
                backgroundColor: 'rgba(253, 193, 255, 1)',
                paddingX: '0.1rem',
                borderRadius: '50%',
                aspectRatio: 1
            }}>
                <ArrowBackIosIcon fontSize="medium" sx={{
                    marginLeft: 1
                }} />
            </Button>
        </Stack>
    );
};

const CustomRightArrow = ({ onClick }: CustomRightArrowProps) => {
    return (
        <Stack alignItems={'center'} justifyContent={'center'} position={'absolute'} right={0} marginX={{ xs: 0.5, lg: 5 }} sx={{
            scale: { xs: '0.6', lg: '1' },
            top: '20%',
        }}>
            <Button onClick={onClick} sx={{
                backgroundColor: 'rgba(253, 193, 255, 1)',
                paddingX: '0.1rem',
                borderRadius: '50%',
                aspectRatio: 1
            }}>
                <ArrowForwardIosIcon fontSize="medium" />
            </Button>
        </Stack>
    );
};


const Sponsors = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Stack width={'100%'} gap={2}>
            <Typography variant="h4">Our Sponsors</Typography>
            <Stack width={'100%'}>
                <Grid container spacing={2}>
                    {
                        SponsorsList.filter((sponsor: Sponsor) => sponsor.show).map((sponsor: Sponsor, key) => {
                            return (
                                <Grid size={{ xs: 6, md: 4, lg: 2 }} key={key}>
                                    <Link key={key} href={sponsor.link} target="_blank" underline="none" sx={{
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
                                        }}>
                                            <Stack minWidth={{ xs: '80%', lg: '80%' }} minHeight={{ xs: '2rem', lg: '4rem' }} width={{ xs: '80%', lg: '80%' }} height={{ xs: '3rem', lg: '80%' }} sx={{
                                                backgroundImage: `url('${sponsor.logo}')`,
                                                backgroundPosition: 'center',
                                                backgroundSize: { xs: sponsor.mobilePercentage, lg: sponsor.percentage },
                                                backgroundRepeat: 'no-repeat',
                                                filter: sponsor.invert ? 'invert(1)' : 'none'
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

export default Sponsors;